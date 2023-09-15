
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, deleteTask } from "./Pages/todoSlice";
import './Pages/todo.css'
function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos);
  const [newTask, setNewTask] = useState("");
  

  const handleAddTask = () => {
    if (newTask.trim() !== "") {


      
      dispatch(addTask(newTask));
      setNewTask("");
    }
  };

  const handleEditTask = (index) => {
    const updatedTask = prompt("Edit Task:", tasks[index]);
    if (updatedTask !== null) {
      dispatch(editTask({ index, updatedTask }));
    }
  };

  const handleDeleteTask = (index) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(index));
    }
  };

  return (
    <div className="App">
      <h1 className="todohead">Todo List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {/* {[...tasks].reverse().map((task, index) => ( */}
        <ul className="task-list">
  {tasks.map((task, index) => (
    <li key={index} className="task-item"> {/* Removed extra '>' before className */}
      <span>{task}</span>
      <button onClick={() => handleEditTask(index)}>Edit</button>
      <button onClick={() => handleDeleteTask(index)}>Delete</button>
    </li>
  ))}
</ul>

      </ul>
    </div>
  );
}

export default App;
