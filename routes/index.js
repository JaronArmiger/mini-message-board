var express = require('express');
var router = express.Router();

const messages = [
  {
  	text: "what's poopin",
  	user: "jean",
  	added: new Date()
  },
  {
  	text: "sozbaybee",
  	user: "sosa",
  	added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mini message board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {title: 'New Message'});
});

router.post('/new', function(req, res, next) {
  const formData = req.body;
  messages.push({text: formData.messageText, 
  	user: formData.messageUser,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
