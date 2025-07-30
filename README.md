Blog Management Platform
A full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application with JWT-based authentication, role-based access control, and admin moderation workflows. Users can register, submit posts, and comment; admins can approve or reject posts and comments.

Features
Secure user registration and login using JSON Web Tokens (JWT)

Role-based access control for users and administrators

RESTful API for blog posts, comments, and moderation

React.js frontend displaying only admin-approved posts

Comment system with real-time state updates and admin approval

Admin dashboard for approving/rejecting posts/comments and viewing user activity

Optimized MongoDB schemas for users, posts, comments, and moderation status

Tech Stack
Backend: Node.js, Express.js

Frontend: React.js, Create React App

Database: MongoDB with Mongoose ODM

Authentication: JSON Web Tokens (JWT)

State Management: React Hooks, Context API or Redux (optional)

Prerequisites
Node.js v14 or higher

npm or Yarn

MongoDB instance (local or Atlas)

Installation
Clone the repository

bash
git clone https://github.com/<your-username>/blog-management-platform.git
cd blog-management-platform
