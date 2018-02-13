'use strict';

var express = require('express');
// var app     = express();

// var start = function () {
//     app.listen(3000, () => console.info("Listening on port 3000!"));
// }


// app.get('/index', (req, res) => res.send("Hello World"));

// module.exports = start;

module.exports = function() {
  let server = express(), start;

  start = function() {
        server.listen(3000, function () {
            console.log('Express server listening on port 3000');
        });
    };

    return {
        start: start
    };
}
