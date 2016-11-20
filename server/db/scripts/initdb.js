var pg = require('pg'),
  fs = require('fs'),
  sqlDir = __dirname + '/../SQL/',
  client = new pg.Client('postgres://localhost:5432/chores'),
  dropTablesStr = fs.readFileSync(sqlDir + 'drop_tables.sql').toString(),
  createTablesStr = fs.readFileSync(sqlDir + 'create_tables.sql').toString(),
  populateDaysStr = fs.readFileSync(sqlDir + 'populate_days.sql').toString(),
  populateChoresStr = fs.readFileSync(sqlDir + 'populate_chores.sql').toString(),
  connectChoresDaysStr = fs.readFileSync(sqlDir + 'connect_chores_days.sql').toString();


function dropTables() {
  client.connect();
  client.query(dropTablesStr, createTables);
}

function createTables(err, result) {
  if (err) console.error(err);
  else {
    client.query(createTablesStr, populateDays);
  }
}

function populateDays(err, result) {
  if (err) console.error(err);
  else {
    client.query(populateDaysStr, populateChores);
  }
}

function populateChores(err, result) {
  if (err) console.error(err);
  else {
    client.query(populateChoresStr, connectChoresDays);
  }
}

function connectChoresDays(err, result) {
  if (err) console.error(err);
  else {
    client.query(connectChoresDaysStr, complete);
  }
}

function complete(err, result) {
  if (err) console.error(err);
  else {
    console.log('Complete!');
  }
  process.exit();
}

exports.dropTables = dropTables;
