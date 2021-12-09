const express = require('express');
const router = express.Router();
const likeCmtController = require('./likecmt-controller');
const isAuth = require('../common/middlewares/isAuth');

/* /api/likecmt */
router.put('/:commentId',isAuth, likeCmtController.isLikeComment)
router.put('/:commentId/unlike',isAuth,likeCmtController.isUnlikeComment)

module.exports = router;