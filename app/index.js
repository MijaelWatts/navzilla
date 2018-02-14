'use strict';

var config = require('./config');
var server = require('./navzilla')();

server.create(config);
server.start();
