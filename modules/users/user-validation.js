const Joi = require('joi');

const signupSchema = Joi.object({
    username: Joi.string().require(),
    password: Joi.string().min(6)
})

const loginSchema = Joi.object({
    username: Joi.string().require(),
    password: Joi.string().min(6)
})

module.exports = {
    signupSchema,
    loginSchema
}