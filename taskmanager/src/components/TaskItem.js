import React, { useState } from "react";

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || "");

  const handleSave = () => {
    onUpdateTask(task.id, { title: editTitle, description: editDescription });
    setIsEditing(false);
  };

  return (
    <div className="list-group-item d-flex justify-content-between align-items-start">
      <div style={{ flex: 1 }}>
        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control mb-2"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />

            <textarea
              className="form-control mb-2"
              rows="2"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </>
        ) : (
          <>
            <h5
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
              className="mb-1"
            >
              {task.title}
            </h5>
            <p className="text-muted mb-1">{task.description}</p>
          </>
        )}

        {/* ACTION BUTTONS */}
        <div className="mt-2 d-flex gap-2">
          {isEditing ? (
            <>
              <button className="btn btn-success btn-sm" onClick={handleSave}>
                Save
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className={`btn btn-sm ${
                  task.completed ? "btn-secondary" : "btn-success"
                }`}
                onClick={() =>
                  onUpdateTask(task.id, { completed: !task.completed })
                }
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                className="btn btn-warning btn-sm"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDeleteTask(task.id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
