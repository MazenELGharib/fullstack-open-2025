import FlagImage from "./FlagImage"
const CountryDetails = ({country,weather })=>{
    return(
        
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p> 
            <h2>Languages</h2>
            <ul>
                {Object.entries(country.languages).map(([key,value])=>
                    <li key={key}>{value}</li>
                )}
            </ul>
            <FlagImage src ={country.flags.png} alt ={country.flags.alt}/>
            { weather &&(
                <div>
                    <h2>Weather in {country.capital[0]}</h2>
                    <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                    <p><strong>Wind:</strong> {weather.wind.speed} m/s</p>
                </div>
            )}
        </div>
        
            
    )
}

export default CountryDetails