import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

   const addValue=() =>{
     if(count<20){
      setCount(count+1)
     }
   }

   const removeValue=()=>{
    if(count>0){
      setCount(count-1)
    }
   }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App