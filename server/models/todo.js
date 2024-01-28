const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TodoSchema = new Schema({
  data: String,
  isCompleted: { type: Boolean, default: false },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

const Todo = model("Todo", TodoSchema);

module.exports = { Todo };
