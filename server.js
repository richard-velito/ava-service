const express     	= require('express');
const settings    	= require('./config/settings');
const environment 	= require('./config/environment');
const routes 	  	= require('./config/routes');

module.exports.start = function () {

	const express_app = express();
	
	environment(express_app);
	routes(express_app);

	express_app.listen(settings.port, function () {
		console.log( ("Listening on port " + settings.port) );
	}).on('error', function (e) {
		if (e.code == 'EADDRINUSE') {
	   		console.log('Address in use. Is the server already running?');
		}
	});
}

module.exports.start();
