const LikePostModel = require('./likepost-model');

const isLikePost = async (req, res, next) => {
    try{
        const { postId } = req.params;
        const { user } = req;

        const updatedLike = await LikePostModel.updateOne({_postId: postId},{ $addToSet: { userId: user._id }}, {new: true});

        res.send({
            success: 1,
            data: updatedLike
        })
    }
    catch (err) {
        next(err);
    }
}

const isUnlikePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const { user } = req;

        const updatedLike = await LikeCmtModel.updateOne({_postId: postId},{ $pull: { userId: user._id }}, {new: true});

        res.send({
            success: 1,
            data: updatedLike
        })
      } catch (err) {
        next(err);
      }
}

module.exports = {
    isLikePost,
    isUnlikePost,
}