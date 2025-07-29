# Blog List Backend

This repository contains the backend part of the **Blog List** application, developed as part of the [Full Stack Open](https://fullstackopen.com/en/) course, part 4 exercises (4.1 to 4.23).

---

## Features

- RESTful API for managing blogs and users
- User registration with password hashing (bcrypt)
- Token-based authentication using JWT
- Authorization: only the creator of a blog can delete it
- Validation for user creation (unique username, minimum length)
- Comprehensive test coverage using Node’s test runner, and Supertest
- Middleware for token and user extraction
- MongoDB database integration via Mongoose

---

## Requirements

- Node.js (v16 or newer recommended)
- MongoDB (local or Atlas)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Akiz-Ivanov/bloglist-backend.git
cd bloglist-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the root containing your MongoDB URI and PORT

```
MONGODB_URI=your_mongodb_connection_string
PORT=3003
SECRET=your_jwt_secret
```

### 4. Run the backend

```bash
npm start
```

## Running Tests

This project includes extensive tests covering API endpoints and authentication flows.

Run tests with:

```bash
npm test
```
Tests are implemented using Node’s test runner, Supertest, and Mongoose.

## API Endpoints

- `GET /api/blogs` — List all blogs (with user info)
- `POST /api/blogs` — Add new blog (requires token)
- `DELETE /api/blogs/:id` — Delete blog (only creator, requires token)
- `PUT /api/blogs/:id` — Update blog likes count
- `GET /api/users` — List all users (with their blogs)
- `POST /api/users` — Create new user
- `POST /api/login` — User login, returns token