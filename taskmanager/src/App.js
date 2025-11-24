import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "./services/TaskService";

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  // Load tasks when App mounts
  useEffect(() => {
    loadTasks();
  }, []);
  
  const loadTasks = async () => {
    setLoading(true);
    const data = await getTasks();
    setTasks(data);
    setLoading(false);
  };

  const handleAddTask = async (taskData) => {
    try {
      setLoading(true);
      await addTask(taskData);
      await loadTasks();
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateTask = async (id, updatedData) => {
    try {
      setLoading(true);
      await updateTask(id, updatedData);
      await loadTasks();
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      setLoading(true);
      await deleteTask(id);
      await loadTasks();
    } finally {
      setLoading(false);
    }
  };

const handleToggleComplete = async (task) => {
    try {
      setLoading(true);
      await updateTask(task.id, { completed: !task.completed });
      await loadTasks();
    } finally {
      setLoading(false);
    }
  };

    const [filter, setFilter] = useState("all"); // all | completed | pending
    const [editingTask, setEditingTask] = useState(null);
    const [loading, setLoading] = useState(false);

    const filteredTasks = tasks.filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    });

return (
  <div className="container py-4">
      <h2 className="text-center mb-4">Task Tracker</h2>

      <TaskForm
          onAddTask={handleAddTask}
          editingTask={editingTask}
          onUpdateTask={handleUpdateTask}
      />
      <div className="d-flex justify-content-center gap-2 mb-4">
      <button
        className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        className={`btn btn-sm ${filter === "completed" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>

      <button
        className={`btn btn-sm ${filter === "pending" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>
    </div>
      {loading && (
        <div className="d-flex justify-content-center align-items-center mt-4">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <TaskList
        tasks={filteredTasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
