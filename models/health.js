const { json } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const healthSchema = new Schema({
  key: { type: String  },
  yearWeek: { type: String, required: true },
  userID: { type: String  },
  healthData: {type: Schema.Types.Array }
});

const Health = mongoose.model("Health", healthSchema);

module.exports = Health;
