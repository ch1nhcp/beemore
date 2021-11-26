const express = require('express');
const router = express.Router();
const likePostController = require('./likepost-controller');
const isAuth = require('../common/middlewares/isAuth');

/* /api/likepost */
router.post('/',isAuth, likePostController.isLikePost)
router.put('/',isAuth,likePostController.isUnlikePost)

module.exports = router;