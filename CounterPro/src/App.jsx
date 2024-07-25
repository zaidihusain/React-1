import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(15)
  const AddtheValue = () => {
    console.log("Value Added" , Counter)
    Counter = Counter + 1;
    setCounter(Counter);
  }

  const RemovetheValue = () => {
      Counter = Counter -1;
      setCounter(Counter)
  }
//  let Counter =15;
  return (
    <>
      <h1>Hussain the</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick={AddtheValue}>Add Value {Counter}</button>
      <br />
      <button onClick={RemovetheValue}>Remove value {Counter}</button>

      <p>footer:{Counter}</p>
    </>
  )
}

export default App
