const path = require("path");
const express = require("express");
const morgan = require("morgan");

const app = express();

// #region | Extra
app.use(express.json());

app.post("/show-body", (req, res) => {
  console.log("Request Body: ", req.body);

  res.sendStatus(200);
});
// #endregion | Extra

// app.use((req, res, next) => {
//   console.log(`${req.method} | ${req.url}`);
//   next();
// });
app.use(morgan(":date[iso] > :method :url :status :response-time ms"));

app.use("/static", express.static("public"));
// app.use("/could-be-any-path-we-want", express.static("public"));

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us");
});

app.get("/json", (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  // res.send(JSON.stringify({ a: 1, b: 2 }));

  res.json({ a: 1, b: 2 });
});

app.get("/html", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <title>Inline HTML</title>
    </head>
    <body>
      <h1>Inline HTML</h1>
    </body>
  </html>
  `);
});

app.get("/html-file", (req, res) => {
  const filePath = path.join(__dirname, "views", "home.html");
  res.sendFile(filePath);
});

// app.get("*", (req, res) => {
//   res.status(404).send("Page Not Found!");
// });

app.use((req, res) => {
  res.status(404).send("Resource Not Found!");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on: http://localhost:${port}`);
});
