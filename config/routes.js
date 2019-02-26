const login = require('../app/controllers/login');
const alexa = require('../app/controllers/alexa');

module.exports = function (express_app) {
	// express paths for login
	express_app.use(login);
	express_app.use(alexa);
};
