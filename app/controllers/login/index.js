const express 	= require('express');
const app 		= module.exports = express();

const BASE_URL = '';

app.set('views', __dirname + '/views/');

// login FORM
app.get( BASE_URL || BASE_URL + '/', function(req, res) {

	let redirect_uri 	= req.query.redirect_uri;
	let client_id 		= req.query.client_id;
	let state 			= req.query.state; 

	res.render('login.html', { 
			redirect_uri: redirect_uri,
			client_id: client_id,
			state: state
		});
});

// AUTH action
app.post( BASE_URL + '/auth', function(req, res) {

	let redirect_uri 	= req.body.redirect_uri;
	let client_id 		= req.body.client_id;
	let state 			= req.body.state; 
	let username 		= req.body.username; 
	let password 		= req.body.password; 
	
	res.redirect(redirect_uri + "?state=" + state + "&code=TOKEN12345");
});

// token
app.get( BASE_URL + '/token', function(req, res) {
	res.json('TOKEN12345');
});
