var http = require('http');

var options = {
  timeout: 2000,
  host: 'localhost',
  port: process.env.PORT || 8081,
  path: '/status'
};

var request = http.request(options, function(res) {
  console.info('STATUS: ' + res.statusCode);
  process.exitCode = (res.statusCode === 200) ? 0 : 1;
  process.exit();
});

request.on('error', function(err) {
  console.error('ERROR', err);
  process.exit(1);
});

request.end();
