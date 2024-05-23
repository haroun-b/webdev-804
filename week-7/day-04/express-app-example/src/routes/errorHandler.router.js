const { Router } = require("express");
const router = Router();

const { handleNotFound } = require("../utils");

router.use("*", (_, res) => {
  handleNotFound(res);
});

router.use((err, req, res, next) => {
  console.error(err);

  if (res.headersSend) {
    return;
  }

  if (err.message.includes("validation")) {
    res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
