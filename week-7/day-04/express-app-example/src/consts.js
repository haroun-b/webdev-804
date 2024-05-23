require("dotenv").config();

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mongoose-example";
const PORT = process.env.PORT || 3000;

module.exports = { MONGO_URI, PORT };
