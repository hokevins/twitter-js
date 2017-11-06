const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.listen(3000, function() {
  console.log('server listening on Port 3000');
});

app.get('/', function(req, res) {
  res.send('Welcome to our faux-Twitter!');
});

