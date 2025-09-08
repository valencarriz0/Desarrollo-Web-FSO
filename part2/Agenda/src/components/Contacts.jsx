const Contacts = ({ filteredItems, deletePerson }) => {
  return (
    <div>
      <h2>Agenda</h2>
      <ul>
        {filteredItems.map(person => (
          <li key={person.id}>
            {person.name} — {person.number}
            <button onClick={() => deletePerson(person.id, person.name)}>
              eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Contacts
