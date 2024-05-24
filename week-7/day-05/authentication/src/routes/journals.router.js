const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");

const Journal = require("../models/Journal.model");
const User = require("../models/User.model");
const { TOKEN_SECRET } = require("../consts");
const { default: mongoose } = require("mongoose");
const { handleNotFound } = require("../utils");
const protectionMiddleware = require("../middlewares/protection.middleware");

// protect middleware
router.use(protectionMiddleware);

router.post("/", async (req, res, next) => {
  try {
    const { title, content } = req.body;

    const createdJournal = await Journal.create({
      title,
      content,
      author: req.user.id
    });

    res.json(createdJournal);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const allJournals = await Journal.find();
      res.json(allJournals);
    } else {
      const userJournals = await Journal.find({ author: req.user.id });
      res.json(userJournals);
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:journalId", async (req, res, next) => {
  const { journalId } = req.params;

  if (!mongoose.isValidObjectId(journalId)) {
    handleNotFound(res);
    return;
  }

  try {
    if (req.user.isAdmin) {
      await Journal.findByIdAndDelete(journalId);
    } else {
      await Journal.findOneAndDelete({ _id: journalId, author: req.user.id });
    }

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
