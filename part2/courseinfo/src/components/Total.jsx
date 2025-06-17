import React from 'react'

const Total = ({parts}) => {
  return (
    <p>Number of exercises {parts.reduce((acumulador, part) => acumulador + part.exercises, 0)}</p>
  )
}

export default Total