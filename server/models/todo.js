const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TodoSchema = new Schema({
  data: String,
  isCompleted: Boolean,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Todo = model("Todo", TodoSchema);

module.exports = { Todo };
