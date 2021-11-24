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
        const newUserData = req.body; 
        const newReport = await FollowModel.create({
          ...newUserData,
          createdBy: user._id
        });
    
        res.send({
          success: 1,
          data: newReport,
        });
      } catch (err) {
        next(err);
      }
}

const updateSetFollow = async (req, res) => {
    try{
        
    }
    catch (err) {
        next(err);
    }
}

const updateUnFollow = async (req, res) => {
    try{
        
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