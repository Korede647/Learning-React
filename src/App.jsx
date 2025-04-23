import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Landing/Landing.jsx'
import Signup from './Landing/SignUp/Signup.jsx'

function App() {
 

  return (
    <>
    <div className="korede" style={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      width: "100%",
    }}>
     {/* <Landing/>
     <Landing/> */}
     <Signup/>
     </div>
    </>
  )
}

export default App
