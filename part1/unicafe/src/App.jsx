import { useState } from 'react'
import Statistics from './components/statistics'
import Button from './components/Button'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
    <div>
      <h1>Give FeedBack</h1>

      <Button onClick={()=>{setGood(good + 1)}} text= 'Bueno'/>
      <Button onClick={()=>{setNeutral(neutral + 1)}} text= 'Neutral'/>
      <Button onClick={()=>{setBad(bad + 1)}} text= 'Malo'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
   </div>
  )
}

export default App
