const express = require('express');
const router = express.Router();
const followController = require('./follow-controller');
const isAuth = require('../common/middlewares/isAuth');

/* /api/posts */
router.get('/',isAuth, followController.getFollowerById)
router.post('/:userId',isAuth,followController.createNewData)
router.put('/:userId',isAuth,followController.updateSetFollow)
router.put('/:userId',isAuth,followController.updateUnFollow)

module.exports = router;