const { json } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mindSchema = new Schema({
  yearWeek: { type: String, required: true },
  userID: { type: String  },
  mindData: {type: Schema.Types.Array }
});

const Mind = mongoose.model("Mind", mindSchema);

module.exports = Mind;
