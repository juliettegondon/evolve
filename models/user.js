const { json } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  key: {type: String},
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true, minlength: 5},
  displayName: {type: String},
  enrollDate: {type: String},
  userID: {type: String},
  date: {type: Date, default: Date.now}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
