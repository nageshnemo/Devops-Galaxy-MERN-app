import React, { useState, useEffect } from "react";
import { getTasks, createTask } from "./services/api";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const addTask = async (newTask) => {
    const addedTask = await createTask(newTask);
    setTasks([...tasks, addedTask]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
