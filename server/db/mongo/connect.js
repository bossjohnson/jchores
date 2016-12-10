var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Model = mongoose.model.bind(mongoose),
  db = mongoose.connection,
  host = process.env.DB_HOSTNAME || 'localhost',
  dbName = process.env.DB_NAME || 'chores',
  connectString = 'mongodb://' + host + '/' + dbName,
  User = require('./schema/users');

mongoose.connect(connectString);

db.on('open', function() {
  console.log('Connected to %s', connectString);
});
