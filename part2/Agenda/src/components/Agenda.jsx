import React from 'react'

const Agenda = ({addNumber, handleNameChange, handleNumberChange, newName, newNumber }) => {
  return (
    <div>        
        <h2>Agenda Telefónica</h2>
        <form onSubmit={addNumber}>
          <input value={newName} placeholder='Ingrese nombre' onChange={handleNameChange}/>
          <input value={newNumber} placeholder='Ingrese número' onChange={handleNumberChange}/>
          <button type="submit">Guardar</button>
        </form>
    </div>
  )
}

export default Agenda