import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import "./Signup.css"

const TestForm = () => {
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        defaultValues: {
            items: [{name: ""}]
        }, 
    });
    const {fields, append, remove} = useFieldArray({
        control,
        name: "items",
    })

    const onSubmit = (data) => {
        console.log(data);
        alert("You have been signed up succesfully")
    }
  return (
    <>

    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="fullname">Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            {...register("fullname", { required: "Full Name is required" })}
          />
          {errors.fullname && <span>{errors.fullname.message}</span>}


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
          
        {fields.map((field, index) => (
            <div key={field.id}>
                <input
                {...register(`items.${index}.name`)}
                defaultValue={field.name}
                />
                <button type='button' onClick={() => remove(index)}>
                    Remove
                </button>
            </div>
        ))}
        <button type='button' onClick={() => append({name: ""})}>
            Add Item
        </button>
        <div>
            <button type="submit" onClick={() => reset()}>Sign Up</button>
          </div>
    </form>
      
    </>
  )
}

export default TestForm
