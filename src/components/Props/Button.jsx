import React from 'react'

const fruits = []

const Button = (props) => {
  
  return (
    <button onClick={props.onClick} title={props.title} style={props.color}>{props.label}</button>
  )
}

export default Button
