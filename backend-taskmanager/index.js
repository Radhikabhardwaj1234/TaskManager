const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("Task Backend Running");
});
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
