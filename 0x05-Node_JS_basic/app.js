const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Create a server object
const server = http.createServer((req, res) => {
  // Write a response to the client
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

// Start the server on port 3000
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
