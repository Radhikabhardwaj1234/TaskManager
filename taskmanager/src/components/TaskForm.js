import React, { useEffect, useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const taskData = { title, description };
    onAddTask(taskData);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <textarea
          className="form-control"
          placeholder="Enter task description..."
          rows="2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className="btn btn-primary w-100" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
