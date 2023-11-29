import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onTaskCompletion, onTaskDeletion }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskCompletion={onTaskCompletion}
          onTaskDeletion={onTaskDeletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;
