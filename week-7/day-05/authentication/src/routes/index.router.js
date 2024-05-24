const express = require("express");
const router = express.Router();

router.get("/", function (_, res) {
  res.json({ message: "Hello World" });
});

module.exports = router;
