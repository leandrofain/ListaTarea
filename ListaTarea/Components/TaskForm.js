import React, { useState } from "react";

const TaskForm = ({ onAddNewTask }) => {
  const [newTask, setNewTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica para agregar nueva tarea
    onAddNewTask(newTask);
    setTasksList([...tasksList, newTask]); // Agregar tarea a la lista
    setNewTask(""); // Limpiar el campo después de agregar la tarea
  };

  const handleTaskDeletion = (index) => {
    // Lógica para eliminar tarea de la lista
    const updatedTasks = [...tasksList];
    updatedTasks.splice(index, 1);
    setTasksList(updatedTasks);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <h2>Tareas Agregadas:</h2>
        <ul>
          {tasksList.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button type="button" onClick={() => handleTaskDeletion(index)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;



