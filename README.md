# 🗂 Task Management Web Application

A simple **full-stack Task Management Web Application** built as part of the **GLOBAL TREND – Full Stack Development Internship Skill Assessment Assignment**.

The application allows users to **create, view, update, and delete tasks**, demonstrating CRUD operations with a responsive UI and a RESTful backend.

---

## 🎯 Objective

The objective of this assignment is to demonstrate my understanding of:

- Front-end development fundamentals  
- Back-end API design and logic  
- Database integration and persistence  
- Code organization, quality, and problem-solving skills  

---

## 📋 Assignment Overview

This project is a **Task Management Web Application** where users can:

- Add new tasks  
- View all tasks  
- Edit existing tasks  
- Delete tasks  

Each task includes:
- **Title**
- **Description**
- **Status** (Pending / Completed)

---

## 🛠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript (Vanilla JS)

### Backend
- Node.js
- Express.js

### Database
- MongoDB (with Mongoose)

---

## 📂 Folder Structure

  Task-Manager:
    backend:
      models:
        - Task.js
      routes:
        - taskRoutes.js
      files:
        - server.js
        - package.json
    frontend:
      - index.html
      - style.css
      - script.js

---

##⚙️ Setup Instructions
clone_repository:
    - git clone https://github.com/pratikKenjale/Task-Management-Web-Application
    - cd Task-Manager
  backend:
    - cd backend
    - npm install
    - npm run dev
  frontend:
    - Open frontend/index.html in browser
    - Or use Live Server

---

##🔄 API Endpoints
- GET /tasks – Get all tasks
- POST /tasks – Create task
- PUT /tasks/:id – Update task
- DELETE /tasks/:id – Delete task

##✨ Features
- Responsive UI
- Full CRUD functionality
- RESTful API
- Persistent database storage
- Clean, modular code

##📝 Notes
- Focused on full-stack fundamentals
- Bonus features can be added later
- Built for internship skill assessment

---

## 👤 Author
Pratik Kenjale
