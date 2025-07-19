
# 🛠️ Backend Video Revision Summary

## 1. Using Schema in Mongoose
- Define data structure using `const schema = new mongoose.Schema({ ... })`.
- Supports nested objects and arrays.

## 2. `Schema.Types.ObjectId` and `ref`
- Used to create relationships between collections.
```js
userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
}
```

## 3. Object Inside Array in Schema
- Example:
```js
cartItems: [
  {
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number
  }
]
```

## 4. Aggregate Plugin in Mongoose
- Useful for performing complex queries and data processing like group, match, etc.

## 5. Exporting the Schema
```js
module.exports = mongoose.model("User", userSchema);
```

## 6. Index for Searching (like `username`)
- Improve performance for specific field queries.
```js
userSchema.index({ username: 1 });
```

## 7. `required: [true, "custom error message"]`
- Schema-level validation.

## 8. Password Hashing with `bcrypt.hash()`
- Always hash passwords before saving to DB.
```js
const bcrypt = require("bcrypt");
userSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10); // 10 = salt rounds
  }
  next();
});
```

## 9. Method to Check Password Validity
```js
userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}
```

## 10. What is JWT?
- JWT (JSON Web Token) is a **bearer token**: whoever has it can access protected routes.
- Used for authentication.
- Store secret and expiry config in `.env`.

## 11. Access vs Refresh Tokens
- **Access Token**:
  - Short-lived.
  - Typically NOT stored in DB.
  - Carries essential auth info.

- **Refresh Token**:
  - Long-lived.
  - May be stored in DB.
  - Used to generate new access tokens.

## 12. Generating JWT Tokens
```js
userSchema.methods.generateToken = function() {
  return jwt.sign(
    { _id: this._id }, // payload
    process.env.TOKEN_SECRET, // secret key
    { expiresIn: "15m" } // expiry
  );
};
```

## 🚧 Note
- Ensure to use `this` in regular function to access schema properties.
- Arrow functions will not bind `this` correctly for schema methods.

---

✍️ Keep reviewing this for clarity. You're building strong backend foundations! Let me know if you'd like a flowchart for any part.
