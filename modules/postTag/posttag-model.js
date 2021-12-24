const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostTagSchema = new Schema({
    postId:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref:"Post"
    },
    tagId:[{
        type:mongoose.Types.ObjectId,
        ref:"HashTag"
    }]
})

module.exports = mongoose.model('PostTag',PostTagSchema)