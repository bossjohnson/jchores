var mongoose = require('mongoose'),
  User = require('../db/mongo/schema/users'),
  Task = require('../db/mongo/schema/tasks'),
  Chore = require('../db/mongo/schema/chores');

exports.getDailyChores = function(req, res) {
  var day = req.query.day,
    today = new Date(),
    yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);

  Chore.find({
      days: {
        $in: [day]
      },
      finished: {
        $lt: yesterday
      }
    },
    function(err, chores) {
      if (err) {
        res.status(500).send(err);
        console.error(err);
      } else res.status(200).send(chores);
    });
};

exports.getAllChores = function(req, res) {
  Chore.find(function(err, chores) {
    if (err) res.status(500).send(err);
    else res.status(200).send(chores);
  });
};

exports.saveChore = function(req, res) {
  var chore = req.body;

  Chore.findById(chore._id, function(err, _chore) {
    for (var key in chore) {
      if (key === '__v') continue;
      _chore[key] = chore[key];
    }
    if (!_chore) _chore = new Chore();
    _chore.save(function(err) {
      if (err) console.error(err);
    });
    res.status(200).send(_chore);
  });
};

exports.deleteChore = function(req, res) {
  Chore.findByIdAndRemove(req.query.choreId, function(err, deleted) {
    if (err) {
      console.error(err);
      res.status(500).send();
    } else res.status(200).send();
  });
};
