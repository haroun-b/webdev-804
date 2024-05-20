const http = require("http");

const path = require("node:path");
const { readFile } = require("node:fs/promises");

const server = http.createServer(async (req, res) => {
  /*
  Request: METHOD | Path | Headers | Body
  Response: Status | Headers | Body
  */

  console.log(`${req.method} | ${req.url}`);

  switch (req.url) {
    case "/":
      res.write("Home");
      break;
    case "/contact":
      res.write("Contact Us");
      break;
    case "/about":
      res.write("About Us");
      break;
    case "/json":
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify({ a: 1, b: 2 }));
      break;
    case "/html":
      res.setHeader("Content-Type", "text/html");
      res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello</title>
      </head>
      <body>
        <h1>Hello World</h1>
      </body>
      </html>
      `);
      break;
    case "/html-file":
      const filePath = path.join(__dirname, "html-file.html");
      const file = await readFile(filePath);

      res.setHeader("Content-Type", "text/html");
      res.write(file);
      break;
    default:
      res.statusCode = 404;
      res.write("Page Not Found!");
      break;
  }

  res.end();
});

server.listen(5000, () => {
  console.log("Server is listening...");
});
