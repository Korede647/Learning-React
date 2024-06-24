import React, { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState()
  return (
    <div>

      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
           />
          </div>


          <div>
            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            id="email" 
            name="email"
            />
          </div>


          <div>
            <label htmlFor="password">Password</label>
            <input 
            type="text" 
            id="password" 
            name="password" 
            />
           
          </div>
          
          <div>
            <button type="submit">Sign Up</button>
          </div>
      </form>
      
    </div>
  )
}

export default Register
