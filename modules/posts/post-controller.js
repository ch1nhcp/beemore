const PostModel = require('./post-model');

const getAllPosts = async (req, res, next) => {
    try{
        const posts = await PostModel.find();
        res.send({
            success: 1,
            data: posts
        })
    }
    catch (err) {
        next(err);
    }
}

const getPostById = async (req, res) => {
    try{
        const {postId} = req.params;
        const foundPosts = await PostModel.findById(postId);
        res.send({
            success: 1,
            data: foundPosts
        })
    }
    catch (err) {
        next(err);
    }
}

const createNewPost = async (req, res) => {
    try {
        const { user } = req;
        console.log('create post', user)
    
        const newPostData = req.body; 
        const newPost = await PostModel.create({
          ...newPostData,
          createdBy: user._id
        });
    
        res.send({
          success: 1,
          data: newPost,
        });
      } catch (err) {
        next(err);
      }
}

const updatePost = async (req, res) => {
    try{
        const { postId } = req.params;
        const updatePostData = req.body;

        const updatedPost = await PostModel.findByIdAndUpdate(postId,updatePostData, {new: true});

        res.send({
            success: 1,
            data: updatedPost
        })
    }
    catch (err) {
        next(err);
    }
}

const deletePost = async (req, res) => {
    const {postId} = req.params;
    try {
        const deletedPost = await PostModel.findByIdAndDelete(postId);
        res.send({
            success: 1,
            data: deletedPost
        })
    }
    catch(err) {
        next(err);
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    createNewPost,
    updatePost,
    deletePost,
}