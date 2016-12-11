var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  taskSchema = Schema({
    name: String,
    date: Date
  }),
  Task = mongoose.model('Task', taskSchema);

module.exports = Task;
