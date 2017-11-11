const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  // console.log(tweets);
  res.render( 'index', { tweets: tweets, showForm: true } );
  // res.render( 'index', {title: 'Hall of Fame', people: localVars.people} ); example for rendering vs sending
  // res.reder also sends completed HTML documents as a response.
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  // console.log(list);
  tweetBank.add(name, "");
  res.render( 'index', { tweets: list, showForm: true, username: req.params.name } );
});

router.get('/tweets/:id', function (req, res, next) {
  var tweetsId = tweetBank.find({ id: Number(req.params.id) });
  res.render('index', { title: 'Twitter.js', tweets: tweetsId });
});

// doesn't work?? Cannot access req.body.[value] here, why?
router.post('/tweets', function(req, res, next) {
  // console.log(req.body.name);
  // tweetBank.add('testName', 'testText');
  tweetBank.add(req.body.name, req.body.text);
  // next();
  // res.send('done');
  res.redirect('/'); // required to not hang, need to send a response but not next();
});

// router.get('/public/stylesheets/style.css', function(req, res) {
//   res.sendFile('/public/stylesheets');
//   next();
// });

module.exports = router;
