const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { TOKEN_SECRET } = require("../consts");
const User = require("../models/User.model");
const protectionMiddleware = require("../middlewares/protection.middleware");

router.post("/signup", async (req, res, next) => {
  const { email, password } = req.body;

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const createdUser = await User.create({ email, password: hashedPassword });

    delete createdUser._doc.password;

    res.status(201).json(createdUser);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const authToken = jwt.sign({ email }, TOKEN_SECRET, {
      algorithm: "HS256",
      issuer: "WebDev804",
      expiresIn: "7d"
    });

    res.json({ authToken });
  } catch (err) {
    next(err);
  }
});

router.use(protectionMiddleware);
router.get("/me", (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
