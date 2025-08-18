import { useState } from 'react'
import Statistics from './Statistics.jsx'
import Button from './Button.jsx'
function App() {
  const [good, setGood] = useState(0)
  const [neutral , setNeutral] = useState(0)
  const [bad , setBad] = useState(0)


  return (
  <div>
    <h1> Give FeedBack</h1>
    <Button onClick ={()=> setGood(good +1)} text = "Good" />
    <Button onClick ={()=> setNeutral(neutral+1)} text = "Neutral"/>
    <Button onClick = {()=> setBad(bad+1)} text = "Bad"/>

    <Statistics good={good} neutral={neutral} bad={bad}/>
  
  </div>
  )
}

export default App
