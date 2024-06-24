import React from "react";
import "./Signup.css";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("You have been signed up successfully");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            {...register("fullname", { required: "Full Name is required" })}
          />
          {errors.fullname && <span>{errors.fullname.message}</span>}
          </div>


          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"
             {...register("email", { required: "Email is required", 
              pattern:{
                value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message:"Invalid Email address"
              },
              })}
                />
            {errors.email && <span>{errors.email.message}</span>}
          </div>


          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" 
            {...register("password", {
                required: "Pasword cannot be empty", 
                minLength:{
                    value:6,
                message:"Password must be minimum of 6 characters",
            },
            maxLength:{
                value:10,
                message:"Password cannot be more than 10 characters",
            },
           })}
           />
           {errors.password && <span>{errors.password.message}</span>}
          </div>
          
          <div>
            <button type="submit">Sign Up</button>
          </div>
      </form>
    </>
  )
}

export default SignUp;
