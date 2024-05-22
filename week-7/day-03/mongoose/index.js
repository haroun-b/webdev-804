const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Human = require("./models/Human.model");
const humans = [{ id: 1, name: "Ulysse", phone: "0637349855" }];

const port = 3000;
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/humans", (req, res) => {
  res.json(humans);
});

app.post("/humans", async (req, res) => {
  const { name, phone } = req.body;
  const newHuman = { name, phone };

  try {
    const createdHuman = await Human.create(newHuman);
    res.status(201).json(createdHuman);
  } catch (error) {
    if (error.message.includes("validation")) {
      res.status(400).json({ message: "Invalid input" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

async function connectDB() {
  try {
    const db = await mongoose.connect(
      "mongodb://127.0.0.1:27017/mongoose-example"
    );

    console.log(`Connected to DB: ${db.connection.name}`);
  } catch (error) {
    console.error(error);
  }
}
connectDB();

app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
