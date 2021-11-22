const CategoryModel = require('./category-model');

const getALlCategory = async (req, res, next) => {
    try{
        const categorys = await CategoryModel.find();
        res.send({
            success: 1,
            data: categorys
        })
    }
    catch (err) {
        next(err);
    }
}

module.exports = {
    getALlCategory
}