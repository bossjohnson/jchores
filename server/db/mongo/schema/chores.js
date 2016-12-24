var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  choreSchema = Schema({
    name: String,
    finished: {
      type: Date,
      default: new Date(0)
    },
    days: {
      type: [String],
      default: []
    }
  }),
  Chore = mongoose.model('Chore', choreSchema);

module.exports = Chore;
