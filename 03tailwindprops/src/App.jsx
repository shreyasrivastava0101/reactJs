import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-green-400 text-red-500 p-4 rounded-4xl mb-4'>Tailwind test</h2>
      <Card username="chaiaurcode" btnText='click me'/>
    </>
  )
}

export default App