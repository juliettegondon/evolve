const { json } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mindSchema = new Schema({
  date: { type: String},
  mood: {type: String},
  reflection: {type: String},
  email:{type: String, required: true }
});

const Mind = mongoose.model("Mind", mindSchema);

module.exports = Mind;
