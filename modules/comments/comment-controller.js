const CommentModel = require('./comment-model');


const getAllComments = async (req, res, next) => {
    try{
        const comments = await CommentModel.find();
        res.send({
            success: 1,
            data: comments
        })
    }
    catch (err) {
        next(err);
    }
}

const postComments = async (req, res, next) => {
    try{
        
        const { user } = req;
        
        const newCommentData = req.body;
        const newComment = await CommentModel.create({
            ...newCommentData,
            createdBy: user._id
        });

        res.send({
            success: 1,
            data: newComment
        })
    }
    catch (err) {
        next(err);
    }
}

const editComment = async (req, res, next) => {
    try{
        const { commentId } = req.params;
        const { user } = req;
        const updateCommentData = req.body;
        
        const updatedComment = await CommentModel.findOneAndUpdate({$and:[{createdBy:user._id},{_id:commentId}]},updateCommentData, {new: true});
        console.log(updatedComment);
        res.send({
            success: 1,
            data: updatedComment
        })
    }
    catch (err) {
        next(err);
    }
}

const deleteComment = async(req, res, next) => {
    const {commentId} = req.params;
    const { user } = req;
    try {
        const deletedComment = await CommentModel.findOneAndRemove({createdBy:user._id,_id:commentId});
        res.send({
            success: 1,
            data: deletedComment
        })
    }
    catch(err) {
        next(err);
    }
}

module.exports = {
    getAllComments,
    postComments,
    editComment,
    deleteComment
}