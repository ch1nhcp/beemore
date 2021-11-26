const express = require('express');
const router = express.Router();
const likeCmtController = require('./likecmt-controller');
const isAuth = require('../common/middlewares/isAuth');

/* /api/likecmt */
router.post('/',isAuth, likeCmtController.isLikeComment)
router.put('/',isAuth,likeCmtController.isUnlikeComment)

module.exports = router;