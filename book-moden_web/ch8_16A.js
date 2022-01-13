let express = require('express');
let router = express.Router();

router.get('/index', function (request, response) {
  response.send('<h1>Index Page</h1>');
});

exports.router = router