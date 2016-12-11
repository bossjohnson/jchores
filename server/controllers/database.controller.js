var mongoose = require('mongoose'),
  User = require('../db/mongo/schema/users'),
  Task = require('../db/mongo/schema/tasks'),
  Chore = require('../db/mongo/schema/chores');

exports.getDailyChores = function(req, res) {
  var day = req.params.day;

  Chore.find({
    days: {
      $in: [day]
    }
  }, function(err, chores) {
    if (err) res.status(500).send(err);
    else res.status(200).send(chores);
  });

};

exports.getAllChores = function(req, res) {

};

exports.finishChore = function(req, res) {

};

exports.toggleChoreDay = function(req, res) {

};
