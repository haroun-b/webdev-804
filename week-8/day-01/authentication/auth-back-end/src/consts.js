require("dotenv").config();

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/authentication-example";
const PORT = process.env.PORT || 3000;
const TOKEN_SECRET = process.env.TOKEN_SECRET;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

module.exports = { MONGO_URI, PORT, TOKEN_SECRET, CORS_ORIGIN };
