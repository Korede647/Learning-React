import React, { useState, useEffect } from "react";
import "./todo.css";

function ToDoTest() {
  const [tasks, setTasks] = useState([]); // List of all tasks
  const [input, setInput] = useState(""); // What we type in the box to add a new task
  const [isEditing, setIsEditing] = useState(false); // Are we changing a task?
  const [currentTask, setCurrentTask] = useState(null); // Which task are we changing?
  const [currentInput, setCurrentInput] = useState(""); // The new value for the task we're changing
  const [searchQuery, setSearchQuery] = useState(""); // What we type in the search box

  useEffect(() => {
    // When we open our notebook, we load saved tasks
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    // Whenever tasks change, we save them
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    // Add a new task to our list
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleDeleteTask = (index) => {
    // Remove a task from our list
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    // Start changing a task
    setIsEditing(true);
    setCurrentTask(index);
    setCurrentInput(tasks[index]);
  };

  const handleSaveTask = () => {
    // Save the changed task
    const updatedTasks = tasks.map((task, index) =>
      index === currentTask ? currentInput : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentTask(null);
    setCurrentInput("");
  };

  const handleSearch = (e) => {
    // Update the search query
    setSearchQuery(e.target.value);
    
  };

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <br />
      <br />
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search tasks"
      />
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            {isEditing && currentTask === index ? (
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
              />
            ) : (
              task
            )}
            {isEditing && currentTask === index ? (
              <button onClick={handleSaveTask}>Save</button>
            ) : (
              <>
                <button onClick={() => handleEditTask(index)}>Edit</button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoTest;

// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid'; // Importing a library to generate unique IDs

// function ToDoTest() {
//   const [tasks, setTasks] = useState([]);
//   const [currentInput, setCurrentInput] = useState('');
//   const [searchQuery, setSearchQuery] = useState("");

//   // Load tasks from localStorage when the component mounts
//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem('tasks'));
//     if (savedTasks) {
//       setTasks(savedTasks);
//     }
//   }, []);

//   // Save tasks to localStorage whenever tasks change
//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   // Handle adding a new task
//   const handleAddTask = () => {
//     if (currentInput.trim()) {
//       const newTask = { id: uuidv4(), text: currentInput };
//       setTasks([...tasks, newTask]);
//       setCurrentInput('');
//     }
//   };

//   // Handle deleting a task
//   const handleDeleteTask = (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this task?");
//     if (confirmDelete) {
//       const newTasks = tasks.filter(task => task.id !== id);
//       setTasks(newTasks);
//     }
//   };

//   // Handle editing a task
//   const handleEditTask = (id, newText) => {
//     const updatedTasks = tasks.map(task =>
//       task.id === id ? { ...task, text: newText } : task
//     );
//     setTasks(updatedTasks);
//   };

//   // Handle search input change
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter tasks based on search query
//   const filteredTasks = tasks.filter(task =>
//     task.text.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearch}
//         placeholder="Search tasks"
//       />
//       <ul>
//         {filteredTasks.map(task => (
//           <li key={task.id}>
//             <input
//               type="text"
//               value={task.text}
//               onChange={(e) => handleEditTask(task.id, e.target.value)}
//             />
//             <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//         <li>
//           <input
//             type="text"
//             placeholder="Enter a new task"
//             value={currentInput}
//             onChange={(e) => setCurrentInput(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') {
//                 handleAddTask();
//               }
//             }}
//           />
//           <button onClick={handleAddTask}>
//             Add Task
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default ToDoTest;
