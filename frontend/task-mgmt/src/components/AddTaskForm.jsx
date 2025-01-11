import React, { useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
