const { json } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mindSchema = new Schema({
  date: { type: String, required: true },
  mindData: {type: Schema.Types.Array}
});

const Mind = mongoose.model("Mind", mindSchema);

module.exports = Mind;
