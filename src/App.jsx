import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyPage from './components/MyPage'
import Footer from './components/Footer'
import ListItems from './components/Props/ListItems'
import Greeting from './components/Props/Greeting'
import Button from './components/Props/Button'
import Testimony from './components/Props/Testimony'
import Fati from './assets/Fati.jpeg'
import SignUp from './components/SignupFormValidation/SignUp'
import TestForm from './components/SignupFormValidation/TestForm'
import Counter from './components/UseState/Counter'
import BankForm from './components/UseState/BankForm'
import SecondTest from './components/SignupFormValidation/SecondTest'
import ToDoTest from './components/SignupFormValidation/ToDoTest'
import Register from './components/API/Register'

function App() {
const fruits = ["mango", "lemon", "orange", "apple"];
const prices = ["8409", "4508", "2370", "7820"];
const handleRegister= ()=>{
  alert("You clicked on Register");
}
const handleLogin= ()=>{
  alert("You clicked on Login");
}

  return (
    <>
      {/* <MyPage/>
      <Footer/> */}
    
    {/* <Greeting name="Adebayo" message="There's no place like home"/>
     
    <ListItems items={fruits}/>
    <h2>Prices</h2>
    <ListItems items={prices}/>
    <br />
    <Greeting name="Korede" message="There's no one like you"/>
    <br />
    <Button label="Register" onClick = {handleRegister} title="Register here"></Button>
    <br /><br />
    <Button label="Login" onClick = {handleLogin} title="Login here"></Button> */}

    {/* <div className='testimonyCards'>
    <Testimony message = '"I love this products. Displaying customer reviews or testimonials on your website is a wise way to convert visitors into customers. Testimonials are effective because they establish trust, encouraging visitors to buy, subscribe, or take whatever action you are after."' img={Fati} name="Samuel Abel" title="Software Apprentice"/>
    <Testimony message = '"I love this products. Displaying customer reviews or testimonials on your website is a wise way to convert visitors into customers. Testimonials are effective because they establish trust, encouraging visitors to buy, subscribe, or take whatever action you are after."' img={Fati} name="Samuel Abel" title="Software Apprentice"/>
    <Testimony/>  <img src={Fati} alt="" /> */}
    {/* </div> */}
    {/* <h2>Registration</h2> */}
    {/* <SignUp/> */}
    {/* <TestForm/> */}
     <h2>Managing Count</h2>
     {/* <Counter/> */}
     {/* <BankForm/> */}
     {/* <ToDoTest/> */}
     <h1>Resgister User</h1>
     <Register/>

    </>
  )
}

export default App
