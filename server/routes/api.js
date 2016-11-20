var express = require('express'),
  router = express.Router(),
  fs = require('fs'),
  pg = require('pg'),
  client = new pg.Client('postgres://localhost:5432/chores'),
  queriesDir = __dirname + '/../db/query-strings/';

client.connect();

router.get('/chores/daily/:day', function(req, res) {
  var query = fs.readFileSync(queriesDir + 'get-daily-chores.sql').toString();

  client.query(query, [req.params.day], function(err, result) {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result.rows);
    }
  });
});

router.post('/chores/daily/:day/finish/:chore', function(req, res) {
  var query = fs.readFileSync(queriesDir + 'finish-chore.sql').toString(),
    day = req.params.day,
    chore = req.params.chore;

  client.query(query, [day, chore], function(err, result) {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;
