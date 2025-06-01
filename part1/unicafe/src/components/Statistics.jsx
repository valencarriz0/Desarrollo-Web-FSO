import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({good, neutral, bad}) => {
            const getAll= () => good+neutral+bad
            const getAverage= () => getAll()===0 ? 0: (good - bad)/getAll()
            const getPositive= ()=> getAll()===0 ? 0: (good/getAll())*100

  return (
    getAll()===0 ? <p>No hay FeedBack</p> :
    <>
      <h2>Estadísticas</h2>
      <table>
        <StatisticLine text='Bueno' value={good}/>
        <StatisticLine text='Neutral' value={neutral}/>
        <StatisticLine text='Malo' value= {bad}/>
        <StatisticLine text='Todo' value= {getAll()}/>
        <StatisticLine text='Promedio' value= {getAverage()}/>
        <StatisticLine text='Positivo %' value= {getPositive()}/>
      </table>
    </>
  )

}
export default Statistics