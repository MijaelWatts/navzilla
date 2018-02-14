'use strict';

function init(app) {

	app.get('/modules', (req, res) => res.send("Hello World"));

};

module.exports = {
	init: init
};