import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App = () => {
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEdit = (task) => setTaskToEdit(task);

  const handleSuccess = () => {
    setTaskToEdit(null);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm taskToEdit={taskToEdit} onSuccess={handleSuccess} />
      <TaskList onEdit={handleEdit} />
    </div>
  );
};

export default App;
