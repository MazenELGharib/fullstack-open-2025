import { useState,useEffect } from 'react'
import Persons from './components/Persons.jsx'
import PersonForm from './components/PersonForm.jsx'
import Filter from './components/Filter.jsx'
import phoneBookServ from './services/phoneBookServ.js'
import Notification from './components/Notification.jsx'

const App = () => {

  const [persons,setPersons] = useState([])
  const [success,setSuccess] = useState(null)
  const [error,setError] = useState(null)
  const [name,setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter,setFilter] = useState('')

useEffect(()=>{
  phoneBookServ.getNumbers()
  .then(intialNumbers=>{
    setPersons(intialNumbers)
  })
},[])

const handleUpdate = (id,updatedNumber)=>{
  phoneBookServ
  .updateNumber(id,updatedNumber)
  .then(returnedObj=>{
    setPersons(persons.map(person => person.id !== id ? person : returnedObj))
    setSuccess(`Updated ${returnedObj.name} Number`)
    setTimeout(()=>{setSuccess(null)},5000)
    setName('')
    setNumber('')
  }).catch(err => {
    setError(`Information of ${updatedNumber.name} has already been removed`)
    setTimeout(() =>{setError(null)}, 5000)
    console.log(err)
  })
}


const handleDelete = (id) =>{
  phoneBookServ
  .deleteNumber(id)
  .then(()=>{
    setPersons(persons.filter(p => p.id !== id))
    setSuccess(' Contact Deleted Successfully')
    setTimeout(()=>{setSuccess(null)},5000)
  }).catch(err=>{
    setError(`Information of ${persons.find(p => p.id === id).name} has already been removed`)
    setTimeout(() =>{setError(null)}, 5000)
    console.log(err)
  })
}


const handleAdd = (e) => {
  e.preventDefault()
  if(name.trim() === '' || number.trim()=== ''){
    setError(`Name or Number can't be empty`)
    setTimeout(()=>{setError(null)},5000)
    return
  }

  const exists = persons.find(person=> person.name.trim().toLowerCase() === name.trim().toLowerCase());
  if (exists) {
    if (window.confirm(`${name} is already added to phonebook, replace the old number with a new one ?`)) {
      handleUpdate(exists.id,{...exists,number})
    }
    return
  }
  
  const personObj = {
    name ,
    number
  }
    
  phoneBookServ
  .addNumber(personObj)
  .then(returnedObj => {
    setPersons([...persons, returnedObj])
    setSuccess(`Added ${returnedObj.name} Successfully`)
    setTimeout(()=>{setSuccess(null)},5000)
    setName('')
    setNumber('')
  })
  
}


  return(
    <div>
      <h1>Phonebook</h1>
      <Notification success={success} error={error} />
      <Filter filter={filter} setFilter={setFilter} />
      <h1>Add a new contact</h1>
      <PersonForm name={name} number={number} handleAdd={handleAdd} setName={setName} setNumber={setNumber}/>
      <h2>Numbers</h2>
      <ul>
        {filter ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(filteredPerson => (
          <Persons key={filteredPerson.id} person={filteredPerson} handleDelete={handleDelete} />
        )) : (persons.map(person=>
          <Persons key={person.id} person={person} handleDelete={handleDelete} />)
        )}
      </ul>
    </div>
  )
}

export default App
