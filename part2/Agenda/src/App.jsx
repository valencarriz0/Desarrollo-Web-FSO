import { useState } from 'react'
import './App.css'
import Filtrado from './components/Filtrado'
import Agenda from './components/Agenda'
import Contacts from './components/Contacts'

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
        <Filtrado handleSearch={handleSearch} />
        <Agenda
          addNumber={addNumber}
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
          newName={newName}
          newNumber={newNumber}
        />
        <Contacts filteredItems={filteredItems} />
      </div>
  )
}

export default App

