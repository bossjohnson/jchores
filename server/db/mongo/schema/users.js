var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  userSchema = Schema({
    name: String,
    chores: [{
      type: Schema.Types.ObjectId,
      ref: 'Chores'
    }],
    tasks: Array,
    score: Number
  }),
  User = mongoose.model('User', userSchema);

module.exports = User;
