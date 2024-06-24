import React, { useState } from 'react'
import "../SignupFormValidation/Signup.css"

const BankForm = () => {
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(`Submitted details`);
        console.log(`Name: ${Fullname}\n
            Email: ${email}\n
            Password: ${password}`);
    }
  return (
    <>

 <div className="flexing">
 <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            id="fullname"
            name={fullname} 
            onChange={(e)=>setFullname(e.target.value)}
          />
          {!fullname && <span>Please enter your name</span>} <br />
          {fullname.length < 3 && <span>Name length must be greater than two</span>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            id="email" 
            name={email}
            onChange={(e)=>setEmail(e.target.value)}
                />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input 
            type="text" 
            id="password" 
            name={password} 
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          
          <div>
            <button type="submit">Sign Up</button>
          </div>


      </form>
      <h3>User Details</h3>
          <p>Fullname: {fullname}</p>
          <p>Email: {email}</p>
 </div>
      
    </>
  )
}

export default BankForm

// to do: title time (previous) TO DO APP (array will be passed into useState([])) 
