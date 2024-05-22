const { Schema, model } = require("mongoose");

const petSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, maxLength: 300 },
  kind: { type: String, enum: ["cat", "dog"] },
  dateOfBirth: { type: Date, default: Date.now() },
  weight: { type: Number, min: 0, max: 15 },
  isLame: { type: Boolean, default: false },
  favFoods: [String],
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "Human"
  }
});

const Pet = model("Pet", petSchema);

module.exports = Pet;
