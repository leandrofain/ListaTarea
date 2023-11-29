import React, { useState } from "react";

const TaskItem = ({ task, onTaskCompletion, onTaskDeletion }) => {
  const [isCompleted, setCompleted] = useState(task.completed);

  const handleCompletion = () => {
    setCompleted(!isCompleted);
    onTaskCompletion(task.id);
  };

  const handleDeletion = () => {
    onTaskDeletion(task.id);
  };

  return (
    <li style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
      {task.name}
      <button onClick={handleCompletion}>Completar</button>
      <button onClick={handleDeletion}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
