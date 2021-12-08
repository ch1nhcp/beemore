const LikeCmtModel = require('./likecmt-model');

const createNewData = async(req, res, next) => {
    try{
        const { user } = req;
        const newLikeData = req.body; 
        const newLike = await LikeCmtModel.create({
          ...newLikeData,
          userid: user._id
        });
    
        res.send({
          success: 1,
          data: newLike,
        });
    }
    catch(err){
        next(err)
    }
}

const isLikeComment = async (req, res, next) => {
    try{
        const { commentId } = req.params;
        const { user } = req;

        const updatedLike = await LikeCmtModel.updateOne({_commentId: commentId},{ $addToSet: { userId: user._id }}, {new: true});

        res.send({
            success: 1,
            data: updatedLike
        })
    }
    catch (err) {
        next(err);
    }
}

const isUnlikeComment = async (req, res, next) => {
    try {
        const { commentId } = req.params;
        const { user } = req;

        const updatedLike = await LikeCmtModel.updateOne({_commentId: commentId},{ $pull: { userId: user._id }}, {new: true});

        res.send({
            success: 1,
            data: updatedLike
        })
      } catch (err) {
        next(err);
      }
}

module.exports = {
    isLikeComment,
    isUnlikeComment,
    createNewData
}