var express = require('express'),
  router = express.Router(),
  database = require('../controllers/database.controller');

router.get('/chores/all', database.getAllChores);
router.get('/chores/daily/:day', database.getDailyChores);

router.route('/chores')
  .get(database.getDailyChores)
  .post(database.saveChore)
  .delete(database.deleteChore);

router.route('/tasks')
  .get(database.getTasks)
  .post(database.saveTask);


module.exports = router;
