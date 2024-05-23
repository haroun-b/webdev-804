const mongoose = require("mongoose");
const { MONGO_URI } = require("../consts");

async function connectDB() {
  try {
    const db = await mongoose.connect(MONGO_URI);

    console.log(`Connected to DB: ${db.connection.name}`);
  } catch (error) {
    console.log("Could not connect to DB: ", error);
  }
}

module.exports = connectDB;
