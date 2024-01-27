const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: String,
  username: String,
  password: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", UserSchema);

module.exports = { User };
