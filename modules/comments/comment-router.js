const express = require('express');
const router = express.Router();
const commentController = require('./comment-controller');
const isAuth = require('../common/middlewares/isAuth');

router.get('/', commentController.getAllComments )
router.post('/',isAuth, commentController.postComments)
router.put('/:commentId',isAuth, commentController.editComment)
router.delete('/:commentId',isAuth, commentController.deleteComment)

module.exports = router;