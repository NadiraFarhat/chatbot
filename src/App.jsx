import { useState } from 'react'
import './App.css'
import Welcome from './pages/welcome/Welcome'
import { BrowserRouter, Routes } from 'react-router-dom'
import Chatbox from './pages/chatbox/Chatbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome/>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/chatbox" element={<Chatbox />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
