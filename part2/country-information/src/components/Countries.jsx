
const Countries = ({countries,handleShowDetails})=>{
    console.log(countries.map(c=>c.name.common))
    
    return(

        <div>
            {countries.length > 10 ? <p>Too many matches, specify another filter</p> :
                        
                        countries.map(country=> <li key={country.cca2}>
                            {country.name.common}
                            <button onClick={(e) => handleShowDetails(e,country)}>Show</button>
                        </li>
                        )}
                    
                
        </div>
    )
}

export default Countries