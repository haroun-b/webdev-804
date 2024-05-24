const express = require("express");
const path = require("path");
const logger = require("morgan");
const { PORT } = require("./consts");

const indexRouter = require("./routes/index.router");
const usersRouter = require("./routes/users.router");
const journalsRouter = require("./routes/journals.router");
const errorHandlerRouter = require("./routes/errorHandler.router");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/journals", journalsRouter);

app.use(errorHandlerRouter);

require("./db")();

app.listen(PORT, () => {
  console.log("Server is listening...");
});
