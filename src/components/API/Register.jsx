import React, { useState } from 'react'
import axios from 'axios' 

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async(e) =>{
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try{
      const response = await axios.post(
              "https://ecommerce-backend-cxlj.onrender.com/api/v1/users/register/",
      { 
      fullname,
      email,
      password
        }
      );
      setMessage(`User registered successfully: ${response.data.message}`);
    // post is the http verb

    }catch(error){ // the error gotten in fetching data
      setMessage(`Error: ${error.response ? error.response.data : error.message }`)
    }finally{
      setLoading(false);
    }
  }
  return (
    <>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e)=>setFullname(e.target.value)}
            required
           />
          </div>


          <div>
            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            id="email" 
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
          </div>


          <div>
            <label htmlFor="password">Password</label>
            <input 
            type="text" 
            id="password" 
            name="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
           
          </div>
          
          <div>
            <button type="submit" disabled={loading}>{loading? "Registering...": 'Register'}</button>
          </div>
      </form>
      {message && <p>{error}</p>}
      
    </>
  )
}

export default Register
