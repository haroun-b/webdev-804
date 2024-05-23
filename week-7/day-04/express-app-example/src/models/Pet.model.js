const { Schema, model } = require("mongoose");

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    set: (name) => {
      return name[0].toUpperCase() + name.slice(1);
    }
  },
  description: { type: String, maxLength: 300, trim: true },
  kind: { type: String, enum: ["cat", "dog"], required: true },
  dateOfBirth: { type: Date, default: Date.now() },
  weight: { type: Number, min: 0, max: 15, required: true },
  isLame: { type: Boolean, default: false },
  favFoods: {
    type: [String],
    validate: {
      validator: (foods) => {
        return !foods.includes("cheese");
      },
      message: "Cheese is gross"
    }
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Human"
  }
});

const Pet = model("Pet", petSchema);

module.exports = Pet;
