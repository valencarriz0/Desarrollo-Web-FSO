import { useState } from 'react'
import './App.css'

function App() {
  const [persons, setPersons] = useState([{name:"Genaro"},{name: "Facundo"}])
  const [newName, setNewName]= useState ('')

  const addName = (event) => {
    event.preventDefault()
    console.log('newName', newName)

      // Verifico si ya existe el nombre en la agenda
    const nameExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )

    if (nameExists) {
      alert(`${newName} ya está en la agenda telefónica`)
      return
    }

    const personObject = {
    name: newName,
    id: persons.length + 1,
    }

  setPersons(persons.concat(personObject))
  setNewName('')

  }

  const handleNameChange= (event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
      <div>
        <h2>Agenda Telefónica</h2>
        <form onSubmit={addName}>
          <input value={newName} placeholder='ingrese nombre' onChange={handleNameChange}/>
          <button type="submit">Guardar</button>
        </form> 
        <h2>Numbers</h2>
        <ul>{persons.map((person)=> <li key={person.id}>{person.name}</li> )}</ul>
      </div>     
  )
}

export default App

