var express = require('express'),
  path = require('path'),
  api = require('./routes/api'),
  bodyParser = require('body-parser'),
  favicon = require('serve-favicon'),
  app = express(),
  server = app.listen(3000);


app.use(express.static(path.join(__dirname + './../client')));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(favicon(__dirname + '/../client/favicon.ico'));
app.use(bodyParser.json());
app.use('/api', api);
