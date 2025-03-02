import { useState } from 'react'
import './App.css'
import Welcome from './pages/welcome/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Home</h1>
      <Welcome/>
    </>
  )
}

export default App
