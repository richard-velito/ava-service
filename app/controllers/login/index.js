const express 	= require('express');
const app 		  = module.exports = express();

const BASE_URL = '';

app.set('views', __dirname + '/views/');

// login FORM
app.get( BASE_URL || BASE_URL + '/', function(req, res) {
		res.render('login.html');
});

// AUTH action
app.post( BASE_URL + '/auth', function(req, res) {
		res.json('Uncaught Exception!');
});
