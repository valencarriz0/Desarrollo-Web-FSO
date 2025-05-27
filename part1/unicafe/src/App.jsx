import { useState } from 'react'
import Statistics from './components/statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
    <div>
      <h1>Give FeedBack</h1>
      <button onClick={()=>{setGood(good + 1)}}>Bueno</button>
      <button onClick={()=>{setNeutral(neutral + 1)}}>Neutral</button>
      <button onClick={()=>{setBad(bad + 1)}}>Malo</button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>

    </div>
  )
}

export default App
