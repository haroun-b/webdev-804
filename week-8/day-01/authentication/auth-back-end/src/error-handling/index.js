const { handleNotFound } = require("../utils");

// catch all middleware function. called if no other route is matched
function catchAll(_, res) {
  handleNotFound(res);
}

// error handler middleware function. called when `next` is called with an argument from any other middleware. e.g: `next(someError)`
function errorHandler(err, req, res, next) {
  console.error("ERROR", req.method, req.path, err);

  // if a response has already been sent, don't send another
  if (res.headersSend) {
    return;
  }

  if (err.message.includes("validation")) {
    res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { catchAll, errorHandler };
