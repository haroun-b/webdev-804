const jwt = require("jsonwebtoken");

const User = require("../models/User.model");
const { TOKEN_SECRET } = require("../consts");

async function protectionMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.sendStatus(401);
      return;
    }

    const { email } = jwt.verify(token, TOKEN_SECRET);

    const user = await User.findOne({ email: email }, { password: 0 });

    if (!user) {
      res.status(401).json({ message: "Unauthorised user" });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = protectionMiddleware;
