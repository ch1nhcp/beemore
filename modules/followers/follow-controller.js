const FollowModel = require('./follow-model');

const getFollowerById = async (req, res) => {
    try{
        const {userId} = req.params;
        const foundData = await FollowModel.findById(userId);
        res.send({
            success: 1,
            data: foundData
        })
    }
    catch (err) {
        next(err);
    }
}

const createNewData = async (req, res) => {
    try {
        const { user } = req;
        const newFollowData = req.body; 
        const newFollow = await FollowModel.create({
          ...newFollowData,
          userid: user._id
        });
    
        res.send({
          success: 1,
          data: newFollow,
        });
      } catch (err) {
        next(err);
      }
}

const updateSetFollow = async (req, res) => {
    try{
        const { UserId } = req.params;
        const { user } = req;

        const updatedFollow = await FollowModel.updateOne({_userid: UserId},{ $addToSet: { followers: user._id }}, {new: true});

        res.send({
            success: 1,
            data: updatedFollow
        })
    }
    catch (err) {
        next(err);
    }
}

const updateUnFollow = async (req, res) => {
    try{
        const { UserId } = req.params;
        const { user } = req;

        const updatedFollow = await FollowModel.updateOne({_userid: UserId},{ $pull: { followers: user._id }}, {new: true});

        res.send({
            success: 1,
            data: updatedFollow
        })
    }
    catch (err) {
        next(err);
    }
}

module.exports = {
    getFollowerById,
    createNewData,
    updateSetFollow,
    updateUnFollow,
}