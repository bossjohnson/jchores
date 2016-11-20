var express = require('express');
var router = express.Router();

var pg = require('pg');
var client = new pg.Client('postgres://localhost:5432/chores');

var queryStrings = require('./../db/query-strings/query-strings');

client.connect();

router.get('/chores/all', function(req, res) {
  client.query('SELECT * FROM chores', function(err, result) {
    if (err) console.error(err);
    else {
      res.status(200).send(result);
    }
  });
});

router.get('/chores/daily/:day', function(req, res) {
  var queryString = queryStrings.getDailyChores;
  // client.query(queryString, [req.params.day], function(err, result) {
  client.query(queryString, ['monday'], function(err, result) {
    if (err) console.error(err);
    else {
      res.status(200).send(result.rows);
    }
  });
});

router.post('/chores/daily/:day/finish/:chore', function(req, res) {
  var queryString = '',
    day = req.params.day,
    chore = req.params.chore;
  client.query(queryString, [day, chore], function(err, result) {
    if (err) console.error(err);
    else {
      console.log('ok');
    }
  });
  res.status(200).send();
});

module.exports = router;
