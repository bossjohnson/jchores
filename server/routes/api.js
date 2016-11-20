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

// router.get('/chores/by/day', function(req, res) {
//     var qs = queryStrings.getChoresByDay;
//     client.query(qs, function(err, result) {
//         if (err) console.error(err);
//         else {
//             console.log(result);
//             res.status(200).send(result);
//         }
//     });
// });

router.get('/chores/daily/:day', function(req, res) {
    var queryString = queryStrings.getChoresByDay;
    client.query();
});

module.exports = router;
