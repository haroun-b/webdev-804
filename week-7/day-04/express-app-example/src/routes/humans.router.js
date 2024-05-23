const mongoose = require("mongoose");
const { Router } = require("express");
const router = Router();

const Human = require("../models/Human.model");
const Pet = require("../models/Pet.model");
const { handleNotFound } = require("../utils");

router.post("/", async (req, res, next) => {
  const { name, phone } = req.body;
  const newHuman = { name, phone };

  try {
    const createdHuman = await Human.create(newHuman);
    res.status(201).json(createdHuman);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allHumans = await Human.find();
    res.json(allHumans);
  } catch (error) {
    next(error);
  }
});

// middleware to validate `humanId` on both routes: `/:humanId` and `/:humanId/pets`
router.all(["/:humanId", "/:humanId/pets"], (req, res, next) => {
  const { humanId } = req.params;

  if (!mongoose.isValidObjectId(humanId)) {
    handleNotFound(res);
    return;
  }

  next(); // only proceed if `humanId` is a valid ObjectId
});

router.get("/:humanId", async (req, res, next) => {
  const { humanId } = req.params;

  try {
    // const human = await Human.findOne({ _id: humanId });
    const human = await Human.findById(humanId);

    if (!human) {
      handleNotFound(res);
      return;
    }
    res.json(human);
  } catch (error) {
    next(error);
  }
});

router.put("/:humanId", async (req, res, next) => {
  const { humanId } = req.params;
  const { name, phone } = req.body;

  try {
    const updatedHuman = await Human.findByIdAndUpdate(
      humanId,
      {
        name,
        phone
      },
      { new: true } // to get the updated document instead of the old
    );
    if (!updatedHuman) {
      handleNotFound(res);
      return;
    }
    res.json(updatedHuman);
  } catch (error) {
    next(error);
  }
});

router.delete("/:humanId", async (req, res, next) => {
  const { humanId } = req.params;

  try {
    await Human.findByIdAndDelete(humanId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router
  .route("/:humanId/pets") // used to chain multiple HTTP methods on the same route
  .get(async (req, res, next) => {
    const { humanId } = req.params;

    try {
      const humanPets = await Pet.find({ owner: humanId }, { owner: 0 });
      res.json(humanPets);
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    const { humanId } = req.params;

    try {
      const human = await Human.findById(humanId);

      if (!human) {
        res.status(400).json({ message: "Owner does not exist" });
        return;
      }

      const newPet = await Pet.create({ ...req.body, owner: humanId });
      res.json(newPet);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
