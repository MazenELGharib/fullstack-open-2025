const Persons = ({person,handleDelete}) =>{

  return (
    <div>
      <li>{person.name} {person.number} <button onClick={() =>{if(window.confirm(`Delete ${person.name}?`)) {handleDelete(person.id)}}}>Delete</button></li>
    </div>
  )
}

export default Persons