import { useState } from 'react'
import './App.css'
import Welcome from './pages/welcome/Welcome'
import Header from './components/header/Header'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Welcome/>

      {/* <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Welcome/>}/>
          </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
