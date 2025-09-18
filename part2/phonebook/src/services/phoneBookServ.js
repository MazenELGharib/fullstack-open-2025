import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getNumbers = () =>{
    return axios.get(baseUrl).then(response => response.data)
}

const addNumber = (personObj) =>{
    return axios.post(baseUrl,personObj).then(response => response.data);
}

const deleteNumber = (id) =>{
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data);
}


const updateNumber = (id,updatedNumber) =>{
    return axios.put(`${baseUrl}/${id}`,updatedNumber).then(response => response.data)
}




export default {addNumber, getNumbers, deleteNumber, updateNumber}