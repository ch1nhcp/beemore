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
        const newCommentData = req.body;

        const newComment = await CommentModel.create(newCommentData);

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
        const updateCommentData = req.body;

        const updatedComment = await CommentModel.findByIdAndUpdate(commentId,updateCommentData, {new: true}); // option new: true để trả về là doc đã đc update

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
    try {
        const deletedComment = await CommentModel.findByIdAndDelete(commentId);
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