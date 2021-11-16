var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.query.userName) {
    req.session.userName = req.query.userName
    res.redirect('/')
    return
  }

  if (req.session.userName) {
    res.redirect('/')
    return
  }

  res.render('login');
});

module.exports = router;
