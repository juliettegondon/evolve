const { json } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  key: { type: String  },
  yearWeek: { type: String, required: true },
  userID: { type: String  },
  exerciseData: {type: Schema.Types.Array }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
