import React, { useState } from 'react'
import "./counts.css"
import { set } from 'react-hook-form';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [tasks, setTasks] = useState([]);

    const handleDeleteTask = (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this task?");
      if (confirmDelete) {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
      }
    };
  return (
    <>
    <div>
      <p>Counter</p>
      <p>This is a state management system</p>
      <h3>{count}</h3>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <br /><br />
      <button onClick={()=> setCount(count - 1)}>Decrement</button>

      <button onClick={() => handleDeleteTask(count)}></button>
    </div>
    </>
  )
}

export default Counter
