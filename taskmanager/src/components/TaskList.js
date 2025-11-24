import React from "react";
import TaskItem from "./TaskItem";

/**
 * TaskList Component
 * Renders a list of TaskItem components
 * @param {Array} tasks - list of tasks
 * @param {Function} onUpdateTask - update callback
 * @param {Function} onDeleteTask - delete callback
 */
const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-muted">No tasks available</p>;
  }

  return (
    <div className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
