const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

// Create a app object
const app = http.createServer((req, res) => {
  // Write a response to the client
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});

// Start the app on port 1245
app.listen(port, hostname, () => {
  console.log(`app running at http://${hostname}:${port}/`);
});
