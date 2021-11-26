const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikePostSchema = new Schema({
    commentId: {
        type: mongoose.Types.ObjectId,
        ref:"Comment"
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    status: Boolean
},{
    timestamps:true
});

module.exports = mongoose.model('LikePost',LikePostSchema);