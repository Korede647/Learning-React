import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css"

const Footer = () => {
    // const fruits = ['mango', 'banana'];
  return (
    <>
       <div className="navigation">
        <div className="nav-left">
        <Link to="/"> Sochima Korede</Link>
        </div>


      <div className="nav-middle">
      <Link to="/"> Home</Link>
       <Link to="/about">About</Link>
       <Link to="/footer">Contact</Link>
       <Link to="/">Home</Link>
      </div>

       <div className="nav-right">
        <button>Get Started</button>
       </div>
       </div>

    </>
  )
}

export default Footer
