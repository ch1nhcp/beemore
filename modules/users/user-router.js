const router = require('express').Router();
const userController = require('./user-controller')
const userValid = require('./user-validation')
const validateInput = require('../common/middlewares/validationInput')

router.post('/signup',
    validateInput(userValid.signupSchema),
    userController.signUp)

router.post('/login', 
    validateInput(userValid.loginSchema),
    userController.login)

module.exports = router;