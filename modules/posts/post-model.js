const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    postTitle: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    postImg: Array,
    categoryId: {
        type:mongoose.Types.ObjectId,
        ref:"Category"
    },
    viewNumber: Number,
    status: Boolean
},{
    timestamps:true
})

module.exports = mongoose.model('Post', PostSchema);