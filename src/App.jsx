import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import LoginCard from './components/LoginCard'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'


function App() {
  const [message, setMessage] = useState('')

  const showMessage = (message, color)=>{
    setMessage({
      message: message,
      color: color
    })
  }

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<LoginCard message={message} showMessage={showMessage}/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
