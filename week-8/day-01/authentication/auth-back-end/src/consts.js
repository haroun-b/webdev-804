require("dotenv").config();

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/authentication-example";
const PORT = process.env.PORT || 3000;
const TOKEN_SECRET = process.env.TOKEN_SECRET;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

const EMAIL_REGEX =
  /^(?=.{5,254}$)(?=.{1,64}@)(([a-z]|\d)+[-_+\.]?)*([a-z]|\d)@(?=.{3,252}$)(?=.{1,63}\.)(([a-z]|\d)+-?)*([a-z]|\d)\.(?=.{1,63}$)(([a-z]+-?)*([a-z]|\d))$/g;

module.exports = { MONGO_URI, PORT, TOKEN_SECRET, CORS_ORIGIN, EMAIL_REGEX };
