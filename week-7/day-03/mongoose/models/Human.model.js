const { Schema, model } = require("mongoose");

const humanSchema = new Schema({
  name: Schema.Types.String,
  phone: { type: String, maxLength: 10 }
});

const Human = model("Human", humanSchema, "humans");

module.exports = Human;
