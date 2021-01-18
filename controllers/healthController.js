const db = require("../models");

// Defining methods for the healthController
module.exports = {
  findAll: function(req, res) {
    db.Health
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByYearWeek: function(req, res) {
    db.Health
      .findOne({yearWeek:req.params.yearWeek})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Health
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
console.log(req.params.yearWeek)

    db.Health
      .findOneAndUpdate({yearWeek:req.params.yearWeek}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Health
      .findOne({yearWeek:req.params.yearWeek})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
