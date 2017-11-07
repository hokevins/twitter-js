const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
  // res.render( 'index', {title: 'Hall of Fame', people: localVars.people} ); example for rendering vs sending
  // res.reder also sends completed HTML documents as a response.
});

router.get('/news', function(req, res) {
  res.send('Here\'s the news.');
});

// router.get('/public/stylesheets/style.css', function(req, res) {
//   res.sendFile('/public/stylesheets');
//   next();
// });

module.exports = router;
