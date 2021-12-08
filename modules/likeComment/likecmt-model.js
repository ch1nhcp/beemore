const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeCommentSchema = new Schema({
    commentId: {
        type: mongoose.Types.ObjectId,
        ref:"Comment"
    },
    userId: Array,
    status: Boolean
},{
    timestamps:true
});

module.exports = mongoose.model('LikeComment',LikeCommentSchema);