const path            = require('path');
const express         = require('express');
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');

const settings        = require('./settings');

module.exports = function (app) {

  app.engine('html', require('ejs').renderFile);

  app.use(express.static(path.join(settings.path, 'public'))); // set the static files location /public/img will be /img for users
  app.use(morgan('dev')); // log every request to the console
  app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); // parse application/json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
  app.use(methodOverride());
};
