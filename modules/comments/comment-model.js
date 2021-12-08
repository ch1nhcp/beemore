const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "Post"
    },
    content: {
        type: String,
        require: true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Comment',CommentSchema);