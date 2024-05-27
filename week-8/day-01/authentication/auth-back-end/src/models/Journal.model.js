const { Schema, model } = require("mongoose");

const journalSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
    minLength: [5, "title must be at least 5 characters long"],
    maxLength: [50, "title must not exceed 50 characters"]
  },
  content: {
    type: String,
    required: [true, "content is required"],
    maxLength: [300, "content must not exceed 300 characters"]
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "author is required"]
  }
});

const Journal = model("Journal", journalSchema);

module.exports = Journal;
