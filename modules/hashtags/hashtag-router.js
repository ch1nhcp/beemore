const express = require('express');
const router = express.Router();
const hashtagController = require('./hashtag-controller');


router.get('/', hashtagController.getAllHashTag)
router.get('/:categoryId', hashtagController.getHashTagById)
router.post('/', hashtagController.createHashTag)

module.exports = router;