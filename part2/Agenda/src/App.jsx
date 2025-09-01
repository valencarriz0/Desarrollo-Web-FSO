import { useState } from 'react'
import './App.css'

function App() {
  const [persons, setPersons] = useState([{name:"Genaro", number: "123456789"},{name: "Facundo", number: "987654321"}])
  const [newName, setNewName]= useState ('')
  const [newNumber, setNewNumber]= useState ('')
  const [searchTerm, setSearchTerm] = useState('');

  const addNumber = (event) => {
    event.preventDefault()
    console.log('newNumber', newNumber)

      // Verifico si ya existe el nombre en la agenda
    const numberExists = persons.some(
      (person) => person.number === newNumber
    )

    if (numberExists) {
      alert(`${newNumber} ya está en la agenda telefónica`)
      return
    }

    const personObject = {
    name: newName,
    number: newNumber,
    id: persons.length + 1,
    }

    setPersons(persons.concat(personObject))
    setNewNumber('')

  }

  const handleNameChange= (event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredItems = persons.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div>
        <h3>Filtrar por nombre</h3>
        <input type="text" placeholder="Buscar..." onChange={handleSearch}/>
        <h2>Agenda Telefónica</h2>
        <form onSubmit={addNumber}>
          <input value={newName} placeholder='Ingrese nombre' onChange={handleNameChange}/>
          <input value={newNumber} placeholder='Ingrese número' onChange={handleNumberChange}/>
          <button type="submit">Guardar</button>
        </form>
        <h2>Resultados de búsqueda</h2>
        <ul>{filteredItems.map((person) => <li key={person.id}>{person.name} {person.number}</li>)}</ul>
      </div>
  )
}

export default App

