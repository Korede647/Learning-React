import React from 'react'
import "./landing.css"
import JudeB from "../assets/images.jpeg"

const Landing = () => {
  const Name = "Korede"
  const Age = 12
  return (
    <div className='practice'>
      <div className="image">
        <img src={JudeB} alt="" />
      </div>
      <h2 className='name'>I am {Name}</h2>
      <h1 className='age'>I am {Age} years old</h1>
    </div>
  )
}

export default Landing
