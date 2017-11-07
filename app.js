const express = require('express');
const app = express(); // creates an instance of an express application
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const chalk = require('chalk');

// SIDE NOTE: notice how our app.js script depends on numerous modules (Express, Morgan, Nunjucks, etc.) but tweetBank.js only depends on one (Lodash). Connecting dependencies together with a module system makes it much easier to grasp the overall structure and complexity of an application.

// Connecting nunjucks to express so Express can send completed HTML rendered by Nunjucks as a response to Browser request.

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

// Middleware, has to come first:
app.use(function (req, res, next) { // app.use will handle all HTTP verbs, get, post, delete, and put
    console.log(chalk.red('Request Type: ' + req.method + ' ' + req.originalUrl + ' ' + res.statusCode));
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next(); // next tell Express to find the next route and move on once function runs or else will stall the page.  You must either call next or send a response back and the route is over.
})

app.get('/', function(req, res) {
  res.render( 'index', {title: 'Hall of Fame', people: localVars.people} );
  // res.reder also sends completed HTML documents as a response.
});

app.get('/news', function(req, res) {
  res.send('Here\'s the news.');
});

app.listen(3000, function() {
  console.log('server listening on Port 3000');
});

// if (err) throw err; for all types of Node-style callback function.  Known as "errbacks", to prevent silent errors which are difficult to debug.

var localVars = {
  title: 'An Example',
  people: [
    { name: 'Gandalf'},
    { name: 'Frodo'},
    { name: 'Hermione'},
  ]
};

nunjucks.configure('views', {noCache: true}); // noCache (default: false) never use a cache and recompile templates each time (server-side)
nunjucks.render('index.html', localVars, function(err, output) {
  if (err) throw err;
  console.log(output);
});
