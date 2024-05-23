const { Schema, model } = require("mongoose");
const Pet = require("./Pet.model");

// type `String` and `Schema.Types.String` are equivalent
const humanSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: [true, "name is required"], // [`value`, `errorMessage`]
    lowercase: true
  },
  phone: {
    type: String,
    maxLength: [10, "phone must not exceed 10"],
    required: [true, "phone is required"],
    match: /06\d{8}/g // `match` uses a regex to validate the value
  }
});

// when a `Human` is deleted, delete all `Pet`s that belong to that `Human`
function handleDelete(deletedHuman) {
  Pet.deleteMany({ owner: deletedHuman.id });
}
humanSchema.post("findOneAndDelete", handleDelete); // mongoose middleware that runs after `findOneAndDelete` of a `Human`
humanSchema.post("deleteOne", handleDelete); // mongoose middleware that runs after `deleteOne` of a `Human`

const Human = model("Human", humanSchema, "humans");

module.exports = Human;
