var express = require('express'),
  router = express.Router(),
  database = require('../controllers/database.controller');

router.get('/chores/all', database.getAllChores);
router.get('/chores/daily/:day', database.getDailyChores);

router.route('/chores')
  .post(database.saveChore)
  .delete(database.deleteChore);


module.exports = router;
