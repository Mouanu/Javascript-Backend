# Backend Authentication Summary

---

## 🔧 Mongoose Schema Basics

* Define schema using `mongoose.Schema()`

```js
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  posts: [
    {
      title: String,
      content: String
    }
  ]
});
```

* Use `Schema.Types.ObjectId` to create references:

```js
user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
}
```

* Export schema:

```js
module.exports = mongoose.model("User", userSchema);
```

* Use index for efficient search (e.g., on `username`).

---

## 🔐 Password Handling with Bcrypt

* Hash password using middleware:

```js
const bcrypt = require("bcryptjs");

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10); // 10 = salt rounds
  next();
});
```

* Create method for password validation:

```js
userSchema.methods.isPasswordCorrect = async function(password) {
  return await bcrypt.compare(password, this.password);
};
```

---

## 🔑 JWT Authentication

### What is JWT?

JWT (JSON Web Token) is a bearer token — whoever has it can access protected resources. It’s typically signed and includes:

* Payload (user data)
* Signature (verification)
* Expiry info

---

### Creating a JWT Token:

```js
const jwt = require("jsonwebtoken");

userSchema.methods.generateJWT = function() {
  return jwt.sign(
    { _id: this._id },
    process.env.TOKEN_SECRET,
    { expiresIn: "15m" }
  );
};
```

---

## 🔁 Access Token vs Refresh Token

| Type          | Purpose                       | Lifespan    | Stored In             |
| ------------- | ----------------------------- | ----------- | --------------------- |
| Access Token  | Used to access routes/APIs    | Short (15m) | Cookie/Client         |
| Refresh Token | Used to get new access tokens | Long (7d+)  | DB or HttpOnly Cookie |

---

## ✅ Final Flow

```txt
1. User registers → password hashed → user saved in DB
2. User logs in → password validated using bcrypt.compare
3. JWT generated → sent to client (Access Token)
4. For protected routes → token verified → access allowed
5. Optionally: Refresh Token used to get new Access Token
```

---

## ❗ TODOs / Clarifications

* [ ] Confirm whether to store refresh tokens in DB or just in cookies
* [ ] Clarify the tradeoffs in storing refresh tokens client-side vs server-side

---
