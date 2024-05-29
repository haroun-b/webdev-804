const { Schema, model } = require("mongoose");
const { EMAIL_REGEX } = require("../consts");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email is already used"],
    match: [EMAIL_REGEX, "invalid email"]
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
