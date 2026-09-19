import React, { useState } from "react";
import "./app.css";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim === 0) return;

    const newTask = {
      id: Date.now(),
      name: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const taskStatus = (id, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = status;
        }
        return task;
      }),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };
  return (
    <div className="todo-app">
      <div className="header">
        <h2>TO-DO List</h2>
        <p>Plan it✍️Do it🎯Done✔️</p>
      </div>
      <div className="input-box">
        <input
          type="text"
          name="task"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>
          <span>+</span> Add Task
        </button>
      </div>
      <div className="task-section">
        <h2>Your Tasks</h2>
        {tasks
          .filter(({ completed }) => completed === false)
          .map(({ id, name }) => (
            <div className="task-item" key={id}>
              <p>{name}</p>
              <span className="task-buttons">
                <button
                  className="complete-btn"
                  onClick={() => taskStatus(id, true)}
                >
                  Completed
                </button>
                <button className="delete-btn" onClick={() => deleteTask(id)}>
                  Delete
                </button>
              </span>
            </div>
          ))}
      </div>
      <div className="task-section">
        <h2>Completed Tasks</h2>
        {tasks
          .filter(({ completed }) => completed === true)
          .map(({ id, name }) => (
            <div className="task-item" key={id}>
              <p>{name}</p>
              <span className="task-buttons">
                <button
                  className="incomplete-btn"
                  onClick={() => taskStatus(id, false)}
                >
                  Incomplete
                </button>
                <button className="delete-btn" onClick={() => deleteTask(id)}>
                  Delete
                </button>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
