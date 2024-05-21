const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use(cors({ origin: ["http://127.0.0.1:6000"] }));

app.get("/", (_, res) => {
  res.json({ message: "Hello World!" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
