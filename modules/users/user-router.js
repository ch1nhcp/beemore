const router = require('express').Router();
const userController = require('./auth-controller')
const authValid = require('./auth.validation')
const validateInput = require('../common/middlewares/validationInput')

router.post('/signup',
    validateInput(authValid.signupSchema),
    userController.signUp)
router.post('/login', userController.login)

module.exports = router;