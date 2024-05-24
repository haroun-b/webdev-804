const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email is already used"]
  },
  password: {
    type: String,
    required: [true, "password is required"]
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

const User = model("User", userSchema);

module.exports = User;
