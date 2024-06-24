import React from 'react'
import "./Testimony.css"

const Testimony = (props) => {
  return (
    <>
       <div className="mainContainer">
        <div className="Block">
        <blockquote>{props.message}</blockquote>

        <div className="image">
        <img src={props.img} alt="" />
        </div>

        <div className="credentials">
            <p className='colored'>{props.name}</p>
            <p>{props.title}</p>
        </div>
        </div>
       </div>
    </>
  )
}

export default Testimony
