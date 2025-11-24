import axios from "axios";

const API_URL = "https://taskmanager-fjo7.onrender.com/api/tasks";

// Get all tasks
export const getTasks = async () => {
  const response = await axios.get(API_URL);
  
  // Convert backend fields to frontend friendly fields
  return response.data.map(task => ({
    id: task._id,
    title: task.title,
    description: task.description,
    completed: task.isCompleted
  }));
};

// Add new task
export const addTask = async (taskData) => {
  const response = await axios.post(API_URL, {
    title: taskData.title,
    description: taskData.description
  });

  return {
    id: response.data._id,
    title: response.data.title,
    description: response.data.description,
    completed: response.data.isCompleted
  };
};

// Update task (toggle complete or update text)
export const updateTask = async (id, updatedData) => {
  const response = await axios.patch(`${API_URL}/${id}`, {
    title: updatedData.title,
    description: updatedData.description,
    isCompleted: updatedData.completed
  });

  return {
    id: response.data._id,
    title: response.data.title,
    description: response.data.description,
    completed: response.data.isCompleted
  };
};

// Delete a task
export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};

