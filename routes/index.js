var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.userName) {
    res.render('index', {
      userName: req.session.userName,
      sessionId: req.session.id,
      maxAge: req.session.cookie.maxAge,
    });
  } else {
    res.render('index');
  }
});

module.exports = router;
