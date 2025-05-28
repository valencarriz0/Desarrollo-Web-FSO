import React from 'react'

const Statistics = ({good, neutral, bad}) => {
            const getAll= () => good+neutral+bad
            const getAverage= () => getAll()===0 ? 0: (good - bad)/getAll()
            const getPositive= ()=> getAll()===0 ? 0: (good/getAll())*100

  return (
    getAll()===0 ? <p>No hay FeedBack</p> :
    <>
      <h2>Estadísticas</h2>
      <p>Bueno {good}</p>
      <p>Neutral {neutral}</p>
      <p>Malo {bad}</p>
      <p>Todo {getAll()}</p>
      <p>Puntuación promedio {getAverage()}</p>
      <p>Porcentaje Positivo {getPositive()}%</p>
      
    </>
  )

}
export default Statistics