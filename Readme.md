# Video Upload Backend API

A secure and efficient backend API for uploading videos, built with **Node.js**, **Express**, **MongoDB**, and **Cloudinary**. This project includes authentication using JWT and supports file uploads with Multer.

## 🌐 Features

- ✅ User Authentication with JWT (Access + Refresh tokens)
- ☁️ Video upload support using Cloudinary
- 📂 File handling using Multer
- 🔐 Protected Routes with JWT Middleware
- 🧾 Environment-based configuration
- 📬 API tested using Postman

---

## 📁 Project Structure

```
📦 project-root
 ┣ 📂 controllers
 ┣ 📂 middlewares
 ┣ 📂 models
 ┣ 📂 routes
 ┣ 📂 utils
 ┣ 📂 public
 ┣ 📄 app.js
 ┣ 📄 .env
 ┣ 📄 server.js
 ┗ 📄 README.md
```

---

## 🛠️ Tech Stack

- **Backend Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **File Uploads**: Multer
- **Cloud Storage**: Cloudinary

---

## 🔑 Environment Variables

Create a `.env` file and include the following:

```
PORT=
CORS_ORIGIN=

ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=

REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

MONGODB_URI=
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git https://github.com/Mouanu/Javascript-Backend.git

```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment

Add the required environment variables to a `.env` file as shown above.

### 4. Run the server

```bash
npm run dev
```

---

## 🧪 API Testing

Tested using **Postman**. Make sure to include the JWT token for protected routes in either cookies or the Authorization header as `Bearer <token>`.

---

## 🔒 Authentication Flow

- Login/Register → Receive Access & Refresh Tokens
- Store Access Token in `cookies` or `Authorization` header
- Use `verifyJWT` middleware to protect private routes

---

## 📦 File Upload

- Handled by `multer.middleware.js`
- Uploaded videos are stored on **Cloudinary**
- Temporary files stored in `./public/temp`

---

## 🙌 Acknowledgements

- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer)
- [Cloudinary](https://cloudinary.com/)
- [JWT](https://jwt.io/)
- [MongoDB](https://www.mongodb.com/)

---

## 🧑‍💻 Author

**Anushila Biswas**  
4th Year CSE, IIIT Kottayam  
Built as part of backend learning journey.

---

