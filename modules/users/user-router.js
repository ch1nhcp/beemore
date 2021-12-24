const router = require('express').Router();
const userController = require('./user-controller')
const userValid = require('./user-validation')
const getUser = require('../../modules/common/middlewares/getUser')
const validateInput = require('../common/middlewares/validationInput')

router.post('/signup',
    validateInput(userValid.signupSchema),
    userController.signUp)

router.post('/login', 
    validateInput(userValid.loginSchema),
    userController.login)

router.get('/me',
    getUser,
    userController.getUserInfo,
    );    
module.exports = router;