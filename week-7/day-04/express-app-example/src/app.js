const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { PORT, CORS_ORIGIN } = require("./consts");
const humansRouter = require("./routes/humans.router");
const petsRouter = require("./routes/pets.router");
const errorHandlerRouter = require("./routes/errorHandler.router");

const app = express();

app.use(logger("dev")); // logs requests to the console
app.use(express.json()); // parses JSON request body
app.use(cors({ origin: CORS_ORIGIN })); // enables CORS (Cross Origin Resource Sharing) for all requests

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
app.use("/humans", humansRouter); // use humansRouter for all routes starting with "/humans"
app.use("/pets", petsRouter); // use petsRouter for all routes starting with "/pets"

// the error handler middleware should always be the last middleware
app.use(errorHandlerRouter);

/*
const connectDB = require("./db");

`require("./db")` is equivalent to `require("./db/index.js")`
  and
`connectDB()` is equivalent to `require("./db")()`
*/
require("./db")(); // connects to database

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
