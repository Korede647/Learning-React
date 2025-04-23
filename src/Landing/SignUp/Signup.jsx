import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
      const validateEmail = (mail) =>{
        let regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
        regEx.test(mail)
      }

      if(!firstName || !lastName || !email || !password){
        setError("All fields are required.")
        return
      }
      if(password < 6){
        setError("Password must be 6 characters or more.")
        return
      }
      if(validateEmail(email)){
        setError("Invalid Email.")
        return
      }

      const NewUser = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password":password
    }

    localStorage.setItem("NewUser", JSON.stringify(NewUser))

     alert("Form Submitted Successfully.")

    }

  return (
    <div className="form-container">
      <div className="logo-container">Create Account</div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">FirstName:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your FirstName"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">LastName:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your LastName"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required=""
          />
        </div>

        <button className="form-submit-btn" type="submit">
          Create Account
        </button>
         
        <p style={{
            color: "red"
        }}>{error}</p>

      </form>

      <p class="signup-link">
        Don't have an account?
        <a href="#" className="signup-link link">
          {" "}
          Sign up now
        </a>
      </p>
    </div>
  );
};


export default Signup;
