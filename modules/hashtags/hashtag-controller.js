const HashTagModel = require('./hashtag-model');
const PostModel = require('../posts/post-model');

const getAllHashTag = async (req, res, next) => {
    try{
        const HashTags = await HashTagModel.find();
        res.send({
            success: 1,
            data: HashTags
        })
    }
    catch (err) {
        next(err);
    }
}

const getHashTagById = async (req, res, next) => {
    const { HashTagId } = req.params;
    try{
        const HashTagData = await HashTagModel.findById(HashTagId)
        res.send({
            success:1,
            data: HashTagData
        })
    }catch(err){
        next(err);
    }
}

const createHashTag = async (req, res, next) => {
    //Check tagName xem đã tồn tại hay chưa. nếu chưa thì tạo mới ( chưa làm )
    try{
        const newHashTagData = req.body; 
        const newHashTag = await HashTagModel.create({
          ...newHashTagData
        });
    
        res.send({
          success: 1,
          data: newHashTag,
        });
    }
    catch(err){
        next(err);
    }
}


module.exports = {
    getAllHashTag,
    createHashTag,
    getHashTagById,
}