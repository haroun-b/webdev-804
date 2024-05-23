require("dotenv").config(); // loads environment variables from a .env file into process.env

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mongoose-example";
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || `http://127.0.0.1:${PORT}`;

module.exports = { MONGO_URI, PORT, CORS_ORIGIN };
