var express = require('express');
var router = express.Router();
const { jwtGeneration, authenticateToken } =  require('../jwtAuhtorization');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({ 
    accessToken: jwtGeneration({ userName: req.body.userName })
  })
});

router.get('/check', authenticateToken, function(req, res, next) {
  res.json({ req })
})

module.exports = router;
