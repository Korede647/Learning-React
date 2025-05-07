import React from 'react'
import './App.css'
import Landing from './Landing/Landing.jsx'
import Signup from './Landing/SignUp/Signup.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="korede" style={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      width: "100%",
    }}>
      
       <BrowserRouter>
      <Routes>
         <Route path='/' element={<Signup/>}/>
         <Route path='/landing' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>

     </div>
    </>
  )
}

export default App
