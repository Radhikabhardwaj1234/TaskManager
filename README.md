
📌 Task Tracker | MERN + Bootstrap
A simple and responsive Task Management Application that allows users to add, edit, delete, and mark tasks as complete, along with description support and filtering by status.
Currently connected with a mock API / local service, and backend integration with MongoDB will be added soon.

🚀 Features
✨ Add new tasks with title & description
📝 Inline editing (edit in the same place without popup)
❌ Delete a task
✔ Mark task as Completed / Undo
🔍 Filter tasks by All / Completed / Pending
💾 Prepared for backend integration (Express + MongoDB)
📱 Fully responsive UI with Bootstrap


🧠 Tech Stack
Frontend                    React, Bootstrap
Backend                     Node.js, Express.js, JavaScript
DataBase                    MongoDB

📁 Folder Structure
Frontend:

src/
│── components/
│   ├── TaskForm.js
│   ├── TaskItem.js
│   └── TaskList.js
│── services/
│   └── TaskService.js
│── App.js
└── index.js

Backend:
backend-taskmanager/
│── src/
│   │── config/
│   │   └── db.js                # MongoDB connection
│   │
│   │── controllers/
│   │   └── taskController.js    # Logic for handling requests
│   │
│   │── models/
│   │   └── taskModel.js         # Mongoose schema/model
│   │
│   │── routes/
│   │   └── taskRoutes.js        # API endpoints
│                    
│── index.js                    # server entry point
│── package.json




📷 Screenshots

<img width="1908" height="848" alt="{FE75DBA3-64BD-4FC6-AABC-CCEEC3B95C16}" src="https://github.com/user-attachments/assets/25ba73b9-b72d-422f-8e5f-fa4ceb2d6915" />


