const mongoose = require("mongoose");
const { Router } = require("express");
const router = Router();

const Pet = require("../models/Pet.model");

router.get("/", async (req, res, next) => {
  try {
    const allPets = await Pet.find();
    res.json(allPets);
  } catch (error) {
    next(error);
  }
});

router.all("/:petId", (req, res, next) => {
  const { petId } = req.params;

  if (!mongoose.isValidObjectId(petId)) {
    handleNotFound(res);
    return;
  }

  next();
});

router.get("/:petId", async (req, res, next) => {
  const { petId } = req.params;

  try {
    const pet = await Pet.findById(petId).populate("owner");
    if (!pet) {
      handleNotFound(res);
      return;
    }

    res.json(pet);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
