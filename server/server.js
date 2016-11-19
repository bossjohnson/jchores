var express = require('express');
var path = require('path');
var api = require('./routes/api');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var app = express();
app.use(express.static(path.join(__dirname + './../client')));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(favicon(__dirname + '/../client/favicon.ico'));
app.use(bodyParser.json());
app.use('/api', api);
app.listen(3000);
