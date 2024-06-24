import React from 'react'

const ListItems = (props) => {
  return (
    <div>
      {props.items.map((item, index)=> (
      <li key={index}>{item}</li>
    ))}
    </div>
  )
}

export default ListItems

// table
