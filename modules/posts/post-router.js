const express = require('express');
const router = express.Router();
const postController = require('./post-controller');
const postValid = require('./post-validation')
const isAuth = require('../common/middlewares/isAuth');
const validateInput = require('../common/middlewares/validationInput')

/* /api/posts */
router.get('/', postController.getPostTagAll)
router.get('/:postId',postController.getPostById)
router.get('/:postId/hashtag',postController.getPostTag)
router.post('/',isAuth,validateInput(postValid.postSchema),postController.createNewPost)
router.post('/postTag',postController.createPostTag)
router.put('/:postId',isAuth,validateInput(postValid.postSchema),postController.updatePost)
router.delete('/:postId',isAuth, postController.deletePost)

module.exports = router;