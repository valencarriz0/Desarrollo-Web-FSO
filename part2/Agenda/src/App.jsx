import { useState } from 'react'
import './App.css'

function App() {
  const [persons, setPersons] = useState([{name:"Genaro"},{name: "Facundo"}])
  const [newName, setNewName]= useState ('')

  const addName = (event) => {
    event.preventDefault()
   setPersons(pre=>[...pre,{name:newName}])
    console.log('newName', newName)
  }

  return (
      <div>
        <h2>Agenda Telefónica</h2>
        <form onSubmit={addName}>
          <input value={newName} placeholder='ingrese nombre' onChange={(event) => setNewName(event.target.value)}/>
          <button type="submit">Guardar</button>
        </form> 
        <h2>Numbers</h2>
        <ul>{persons.map((person, id)=> <li key={id}>{person.name}</li> )}</ul>
      </div>     
  )
}

export default App

