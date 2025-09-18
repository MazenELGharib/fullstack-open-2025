import axios from 'axios'

const baseUrl ='https://studies.cs.helsinki.fi/restcountries/api'
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q='

const getAll = ()=>{
    return axios.get(`${baseUrl}/all`).then(res => res.data)
}

const getByName = (name)=>{
    return axios.get(`${baseUrl}/name/${name}`).then(res => res.data)
}

const getWeatherByCapital = (capital, apiKey) =>{
    return axios.get(`${weatherUrl}${capital}&appid=${apiKey}&units=metric`).then(res=>res.data)
}

export default {getAll, getByName,getWeatherByCapital}