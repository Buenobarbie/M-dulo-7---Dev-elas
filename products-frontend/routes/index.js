var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve("public/list.html"));
});

router.get('/register', function(req, res, next) {
  res.sendFile(path.resolve("public/register.html"));
});

module.exports = router;
