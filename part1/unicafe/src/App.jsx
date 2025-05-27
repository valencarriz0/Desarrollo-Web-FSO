import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getAll= () => good+neutral+bad
  const getAverage= () => (good - bad)/getAll()
  const getPositive= ()=> (good/getAll())*100

  return(
    <div>
      <h1>Give FeedBack</h1>
      <button onClick={()=>{setGood(good + 1)}}>Bueno</button>
      <button onClick={()=>{setNeutral(neutral + 1)}}>Neutral</button>
      <button onClick={()=>{setBad(bad + 1)}}>Malo</button>
      <h2>Estadísticas</h2>
      <p>Bueno {good}</p>
      <p>Neutral {neutral}</p>
      <p>Malo {bad}</p>
      <p>Todo {getAll()}</p>
      <p>Puntuación promedio {getAverage()}</p>
      <p>Porcentaje Positivo {getPositive()}%</p>

    </div>
  )
}

export default App
