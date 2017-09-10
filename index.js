// write your code here
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
})
.listen(8080);

console.log('Server running at http://localhost:8080/');