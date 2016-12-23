var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  choreSchema = Schema({
    name: String,
    finished: Date,
    days: {
      type: [String],
      default: []
    }
  }),
  Chore = mongoose.model('Chore', choreSchema);

module.exports = Chore;
