import React from 'react'
import "./landing.css"
import JudeB from "../assets/images.jpeg"
import { Link } from 'react-router-dom'
import SideBar from '../components/SideBar'

const Landing = () => {
  const Name = "Korede"
  const Age = 12
  return (
    <div className="mainDiv">
      <SideBar/>
      
      <div className="dashboard">

    <div className='practice'>
      <div className="image">
        <img src={JudeB} alt="" />
      </div>
      <h2 className='name'>I am {Name}</h2>
      <h1 className='age'>I am {Age} years old</h1>
      <Link to="/">
      Back to Sign up
      </Link>
    </div>

    <div className='practice'>
      <div className="image">
        <img src={JudeB} alt="" />
      </div>
      <h2 className='name'>I am {Name}</h2>
      <h1 className='age'>I am {Age} years old</h1>
    </div>

    <div className='practice'>
      <div className="image">
        <img src={JudeB} alt="" />
      </div>
      <h2 className='name'>I am {Name}</h2>
      <h1 className='age'>I am {Age} years old</h1>
    </div>

    </div>

    </div>
  )
}

export default Landing
