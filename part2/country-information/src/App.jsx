import { useState, useEffect} from 'react'
import countryService from './services/countryService.js'
import Countries from './components/Countries.jsx'
import Search from './components/Search.jsx'
import CountryDetails from './components/CountryDetails.jsx'


function App() {
  const [filter, setFilter] = useState('')
  const [allCountries,setAllCountries]= useState([])
  const [countries ,setCountries] =useState([])
  const [selectedCountry,setSelectedCountry]= useState(null)
  const [weather , setWeather] = useState(null)
  const[loading,setLoading] = useState(true)

  useEffect(()=>{
    countryService.getAll()
    .then(data =>{ 
      setAllCountries(data)
      setLoading(false)}
    )
    .catch(err => {
      console.error('Error fetching countries:', err)
      setLoading(false)
    });
  },[])
  

  useEffect(()=>{

    if(filter ===''){
      setCountries([])
      setSelectedCountry(null)
      return
    }

    const filtered = allCountries.filter(country =>
      country.name.common.toLowerCase().startsWith(filter.toLowerCase())
    )
    setCountries(filtered)
    
    if( filtered.length === 1){
      setSelectedCountry(filtered[0])
    }else{
      setSelectedCountry(null)
    }

  },[filter,allCountries])

  const handleShowDetails = (e,country)=>{
    e.preventDefault()
    setSelectedCountry(country)
    
  }
 
  useEffect(()=>{
    if(!selectedCountry || !selectedCountry.capital[0]) return

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    countryService
    .getWeatherByCapital(selectedCountry.capital[0],apiKey)
    .then(data => setWeather(data))
    .catch(err=> console.error('Error fetching weather data:', err));

  },[selectedCountry])



  return (
    <div>
      <Search filter={filter} setFilter={setFilter} loading={loading} />

      {selectedCountry ? <CountryDetails country={selectedCountry} weather={weather} /> :
      (<Countries countries={countries} handleShowDetails={handleShowDetails} />)
      }
      
    </div>
  )
}

export default App
