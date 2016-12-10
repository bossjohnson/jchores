var express = require('express'),
  router = express.Router(),
  database = require('../controllers/database.controller');

router.get('/chores/daily/:day', database.getDailyChores);

router.get('/chores/all', database.getAllChores);

router.post('/chores/daily/:day/finish/:chore', database.finishChore);

router.post('/chores/:chore/toggle/:day', database.toggleChoreDay);


module.exports = router;
