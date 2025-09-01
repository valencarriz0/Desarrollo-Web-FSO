import React from 'react'

const Contacts = ({ filteredItems }) => {
  return (
    <div>        
        <h2>Resultados de búsqueda</h2>
        <ul>{filteredItems.map((person,i) => <li key={i}>{person.name} {person.number}</li>)}</ul></div>
  )
}

export default Contacts