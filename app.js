const express = require('express');
const morgan = require('morgan');
const app = express(); // creates an instance of an express application

const chalk = require('chalk');

app.use(function (req, res, next) {
    // do your logging here
    console.log(chalk.red('Request Type: ' + req.method + ' ' + req.originalUrl + ' ' + res.statusCode));
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next();
})

app.get('/', function(req, res) {
  res.send('Welcome to our faux-Twitter!');
});

app.get('/news', function(req, res) {
  res.send('Here\'s the news.');
});

app.listen(3000, function() {
  console.log('server listening on Port 3000');
});

// if (err) throw err; for all types of Node-style callback function.  Known as "errbacks", to prevent silent errors which are difficult to debug.
