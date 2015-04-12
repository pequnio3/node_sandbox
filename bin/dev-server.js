
require("babel/register")

var app = require('../src/app');
var server = app.listen(process.env.PORT || 3001, function() {
  // log.debug('Server listening on port ' + server.address().port);
  console.error('Server listening on port ' + server.address().port);
});
