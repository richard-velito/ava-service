const path     = require('path');

const settings = {
  path    : path.normalize(path.join(__dirname, '..')),
  port    : process.env.PORT || 8088
};

module.exports = settings;
