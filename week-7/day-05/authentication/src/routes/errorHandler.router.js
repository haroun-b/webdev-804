const { Router } = require("express");
const router = Router();

const { handleNotFound } = require("../utils");

// catch all route. if no route is matched, this route's handler is called
router.use("*", (_, res) => {
  console.log("helloooooooooo");
  handleNotFound(res);
});

// error handler middleware. called when `next` is called with an argument from any other middleware. e.g: `next(someError)`
router.use((err, req, res, next) => {
  // console.error(err);
  console.log(err, ">>>>>>>>>>>>>");
  // if a response has already been sent, don't send another
  if (res.headersSend) {
    return;
  }

  // if (err.name.includes("Token")) {
  //   res.status(401).json({ message: "Invalid Token" });
  // } else if (err.message.includes("validation")) {
  //   res.status(400).json({ message: err.message });
  // } else {
  //   res.status(500).json({ message: "Internal Server Error" });
  // }
});

module.exports = router;
