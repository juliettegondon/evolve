const { json } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  yearWeek: { type: String, required: true },
  userID: { type: Schema.Types.ObjectId  },
  exerciseData: {type: Schema.Types.Array }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;