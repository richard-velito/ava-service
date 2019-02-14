const login = require('../app/controllers/login');

module.exports = function (app) {
	app.use(login);
};
