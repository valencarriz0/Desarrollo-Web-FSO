import React from 'react'

const Filtrado = ({ handleSearch }) => {
  return (
    <div>
      <h3>Filtrar por nombre</h3>
      <input type="text" placeholder="Buscar..." onChange={handleSearch}/>
    </div>
  )
}

export default Filtrado