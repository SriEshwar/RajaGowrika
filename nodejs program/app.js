var http = require('http');
var dt = require('./module.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(dt.name());
  res.end();
}).listen(8080);
