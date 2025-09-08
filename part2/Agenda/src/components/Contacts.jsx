import React from 'react'

const Contacts = ({ persons, filteredItems, searchTerm, deletePerson }) => {
  return (
    <div>
      <h2>Lista completa de contactos</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => deletePerson(person.id, person.name)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {searchTerm && (
        <div>
          <h2>Resultados de búsqueda</h2>
          <ul>
            {filteredItems.map((person) => (
              <li key={person.id}>
                {person.name} {person.number}
                <button onClick={() => deletePerson(person.id, person.name)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Contacts