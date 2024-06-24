import React from 'react'

const Greeting = (props) => {

  return (
   <>
    <h1>Hello {props.name}!</h1>
    <p>{props.message}</p>
   </>
  )
}

export default Greeting
