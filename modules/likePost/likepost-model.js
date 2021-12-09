const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikePostSchema = new Schema({
    postId: {
        type: mongoose.Types.ObjectId,
        ref:"Comment"
    },
    userId: Array,
    status: Boolean
},{
    timestamps:true
});

module.exports = mongoose.model('LikePost',LikePostSchema);