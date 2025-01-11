import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ color: "black", fontWeight: "bold" }}>
          {task.title} - {task.status}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;