const CategoryModel = require('./category-model');
const PostModel = require('../posts/post-model');

const getAllCategory = async (req, res, next) => {
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

const getCategoryById = async (req, res, next) => {
    const { categoryId } = req.params;
    try{
        const categoryData = await CategoryModel.findById(categoryId)
        res.send({
            success:1,
            data: categoryData
        })
    }catch(err){
        next(err);
    }
}

const createCategory = async (req, res, next) => {
    try{
        const newCategoryData = req.body; 
        const newCategory = await CategoryModel.create({
          ...newCategoryData
        });
    
        res.send({
          success: 1,
          data: newCategory,
        });
    }
    catch(err){
        next(err);
    }
}

const updateCategory = async (req, res) => {
    try{
        const { categoryId } = req.params;
        const updateData = req.body;

        const updatedCategory = await CategoryModel.findByIdAndUpdate(categoryId,updateData, {new: true});

        res.send({
            success: 1,
            data: updatedCategory
        })
    }
    catch (err) {
        next(err);
    }
}

const deleteCategory = async (req, res) => {
    //Nếu còn bài post trong danh mục => Không được xóa
    const { categoryId } = req.params;
    try{
        const checkPostData = await PostModel.count({postId: categoryId});
        if(checkPostData>0){
            res.send({
                success:0,
                message: `Move every posts before remove the category`,
                post_qty: checkPostData
            })
        }else{
            const deletedCategory = await CategoryModel.findOneAndDelete({ _id: categoryId });
            res.send({
                success:1,
                data: deletedCategory
            })
        }
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    getAllCategory,
    createCategory,
    updateCategory,
    getCategoryById,
    deleteCategory
}