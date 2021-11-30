const express = require('express');
const router = express.Router();
const followController = require('./follow-controller');
const isAuth = require('../common/middlewares/isAuth');

/* /api/posts */
router.get('/:userId',isAuth, followController.getFollowerById)
router.post('/:userId',isAuth,followController.createNewData)
router.put('/set/:userId',isAuth,followController.updateSetFollow)
router.put('/unset/:userId',isAuth,followController.updateUnFollow)

module.exports = router;