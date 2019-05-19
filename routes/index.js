var express = require('express');
var router = express.Router();

let news = require('../controllers/articles');

router.get('/', news.getAPI);

module.exports = router;