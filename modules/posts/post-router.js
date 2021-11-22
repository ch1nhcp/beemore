const express = require('express');
const router = express.Router();
const postController = require('./post-controller');
const isAuth = require('../common/middlewares/isAuth');

/* /api/posts */
router.get('/', postController.getAllPosts)
router.get('/:postId',postController.getPostById)
router.post('/',isAuth,postController.createNewPost)
router.put('/:postId',isAuth,postController.updatePost)
router.delete('/:postId',isAuth, postController.deletePost)

module.exports = router;