var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  choreSchema = Schema({
    name: String,
    finished: Boolean,
    days: Array
  }),
  Chore = mongoose.model('Chore', choreSchema);

module.exports = Chore;
