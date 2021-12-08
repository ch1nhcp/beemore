const Joi = require('joi');

const postSchema = Joi.object({
    postTitle: Joi.string().required(),
    content: Joi.string().required(),
    postImg: Joi.string(),
    categoryId: Joi.required(),
    viewNumber: Joi.number(),
    status: Joi.boolean(),
    createdBy: Joi.required(),
})


module.exports = {
    postSchema
}

