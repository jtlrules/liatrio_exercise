var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/


router.get('/', function(req, res, next) {
	
  const name = "Josh";
  const timestamp = Date.now();
  const ret_val =
  {
	  message: "My name is " + name,
	  timestamp: timestamp
  }
  return res.json(ret_val);
})

module.exports = router;
