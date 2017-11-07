const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  // console.log(tweets);
  res.render( 'index', { tweets: tweets } );
  // res.render( 'index', {title: 'Hall of Fame', people: localVars.people} ); example for rendering vs sending
  // res.reder also sends completed HTML documents as a response.
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  console.log(list);
  res.render( 'index', { tweets: list, showForm: true } );
});

// router.get('/public/stylesheets/style.css', function(req, res) {
//   res.sendFile('/public/stylesheets');
//   next();
// });

module.exports = router;
