var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { appUrl: 'https://gachnblog.herokuapp.com/' });
});

module.exports = router;
