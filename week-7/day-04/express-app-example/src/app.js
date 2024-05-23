const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { PORT } = require("./consts");
const humansRouter = require("./routes/humans.router");
const petsRouter = require("./routes/pets.router");
const errorHandlerRouter = require("./routes/errorHandler.router");

const app = express();

app.use(express.json());
app.use(logger("dev"));
app.use(cors({ origin: ["http://localhost:7153"] }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
app.use("/humans", humansRouter);
app.use("/pets", petsRouter);

app.use(errorHandlerRouter);

/*
const connectDB = require("./db");
connectDB() === require("./db")()
*/
require("./db")();

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
