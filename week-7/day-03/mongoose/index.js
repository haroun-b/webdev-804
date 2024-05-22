const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const Human = require("./models/Human.model");
const Pet = require("./models/Pet.model");

const serverErrorMsg = { message: "Internal Server Error" };

const port = 3000;
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/humans", async (req, res) => {
  const { name, phone } = req.body;
  const newHuman = { name, phone };

  try {
    const createdHuman = await Human.create(newHuman);
    res.status(201).json(createdHuman);
  } catch (error) {
    if (error.message.includes("validation")) {
      res.status(400).json({ message: "Invalid input" });
    } else {
      res.status(500).json(serverErrorMsg);
    }
  }
});

app.get("/humans", async (req, res) => {
  try {
    const allHumans = await Human.find();
    res.json(allHumans);
  } catch (error) {
    res.status(500).json(serverErrorMsg);
  }
});

app.get("/humans/:humanId", async (req, res) => {
  const { humanId } = req.params;
  const notFoundMsg = { message: `No such human with id: ${humanId}` };

  if (!mongoose.isValidObjectId(humanId)) {
    res.status(404).json(notFoundMsg);
    return;
  }

  try {
    // const human = await Human.findOne({ _id: humanId });
    const human = await Human.findById(humanId);

    if (!human) {
      res.status(404).json(notFoundMsg);
      return;
    }
    res.json(human);
  } catch (error) {
    res.status(500).json(serverErrorMsg);
  }
});

app.get("/humans/:humanId/pets", async (req, res) => {
  const { humanId } = req.params;

  const notFoundMsg = { message: `No such human with id: ${humanId}` };
  if (!mongoose.isValidObjectId(humanId)) {
    res.status(404).json(notFoundMsg);
    return;
  }

  try {
    const humanPets = await Pet.find({ owner: humanId }, { owner: 0 });
    res.json(humanPets);
  } catch (error) {
    res.status(500).json(serverErrorMsg);
  }
});

app.post("/humans/:humanId/pets", async (req, res) => {
  const { humanId } = req.params;

  const notFoundMsg = { message: `No such human with id: ${humanId}` };
  if (!mongoose.isValidObjectId(humanId)) {
    res.status(404).json(notFoundMsg);
    return;
  }

  try {
    const human = await Human.findById(humanId);

    if (!human) {
      res.status(400).json(notFoundMsg);
      return;
    }

    const newPet = await Pet.create({ ...req.body, owner: humanId });
    res.json(newPet);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Invalid Input" });
  }
});

app.get("/pets", async (req, res) => {
  try {
    const allPets = await Pet.find();
    res.json(allPets);
  } catch (error) {
    res.status(500).json(serverErrorMsg);
  }
});

app.put("/humans/:humanId", async (req, res) => {
  const { humanId } = req.params;
  const { name, phone } = req.body;
  const notFoundMsg = { message: `No such human with id: ${humanId}` };

  if (!mongoose.isValidObjectId(humanId)) {
    res.status(404).json(notFoundMsg);
    return;
  }

  try {
    const updatedHuman = await Human.findByIdAndUpdate(
      humanId,
      {
        name,
        phone
      },
      { new: true } // to get the updated document instead of the old
    );

    res.json(updatedHuman);
  } catch (error) {
    res.status(400).json({ message: "Invalid Input" });
  }
});

app.get("/pets/:petId", async (req, res) => {
  const { petId } = req.params;

  const notFoundMsg = { message: `No such pet with id: ${petId}` };
  if (!mongoose.isValidObjectId(petId)) {
    res.status(404).json(notFoundMsg);
    return;
  }
  try {
    const pet = await Pet.findById(petId).populate("owner");
    if (!pet) {
      res.status(404).json(notFoundMsg);
      return;
    }

    res.json(pet);
  } catch (error) {
    console.log(error);
    res.status(500).json(serverErrorMsg);
  }
});

app.delete("/humans/:humanId", async (req, res) => {
  const { humanId } = req.params;

  if (!mongoose.isValidObjectId(humanId)) {
    res.status(404).json({ message: `No such human with id: ${humanId}` });
    return;
  }

  try {
    await Human.findByIdAndDelete(humanId);
    await Pet.deleteMany({ owner: humanId });
  } catch (_) {}

  res.sendStatus(204);
});

async function connectDB() {
  try {
    const db = await mongoose.connect(
      "mongodb://127.0.0.1:27017/mongoose-example"
    );

    console.log(`Connected to DB: ${db.connection.name}`);
  } catch (error) {
    console.log(`Could not connect to DB: ${error}`);
  }
}
connectDB();

app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
