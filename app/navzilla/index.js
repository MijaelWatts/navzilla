'use strict';

var express = require('express');
var	app     = express();

module.exports = function() {
	var create, start;

	create = function(config) {
		var routes = require('./routes');

		app.set('hostname', config.hostname);
		app.set('port', config.port);

		routes.init(app);
	};


	start = function() {	
		var hostname = app.get('hostname');
		var port     = app.get('port');

        app.listen(port, function () {
            console.log("Express server listening on - http://" + hostname + ":" + port);
        });
    };

    return {
        create: create,
        start: start
    };
};