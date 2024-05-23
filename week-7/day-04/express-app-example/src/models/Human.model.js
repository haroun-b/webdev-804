const { Schema, model } = require("mongoose");
const Pet = require("./Pet.model");

// type `String` and `Schema.Types.String` are equivalent
const humanSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: [true, "name is required"],
    lowercase: true
  },
  phone: {
    type: String,
    maxLength: [10, "phone must not exceed 10"],
    required: [true, "phone is required"],
    match: /06\d{8}/g
  }
});

function handleDelete(deletedHuman) {
  Pet.deleteMany({ owner: deletedHuman.id });
}
humanSchema.post("findOneAndDelete", handleDelete);
humanSchema.post("deleteOne", handleDelete);

const Human = model("Human", humanSchema, "humans");

module.exports = Human;
