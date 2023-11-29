import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Lista de tareas actualizada:", tasks);
  }, [tasks]);

  const handleTaskCompletion = (taskId) => {
    // Implementar lógica para marcar como completada
  };

  const handleTaskDeletion = (taskId) => {
    // Implementar lógica para eliminar tarea
  };

  const addNewTask = (newTask) => {
    // Implementar lógica para agregar nueva tarea
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <TaskList
        tasks={tasks}
        onTaskCompletion={handleTaskCompletion}
        onTaskDeletion={handleTaskDeletion}
      />
      <TaskForm onAddNewTask={addNewTask} />
    </div>
  );
};

export default App;

