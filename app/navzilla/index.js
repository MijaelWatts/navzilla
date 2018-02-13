'use strict';

var express = require('express');
var server  = express();

// app.get('/index', (req, res) => res.send("Hello World"));

module.exports = function() {
  // let server = express(), start;

  var start = function() {
        server.listen(3000, function () {
            console.log('Express server listening on port 3000');
        });
    };

    return {
        start: start
    };
}
