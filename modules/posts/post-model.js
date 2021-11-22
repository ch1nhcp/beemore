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
    postImg: String,
    categoryId: {
        type:mongoose.Types.ObjectId,
        ref:"Category"
    },
    viewNumber: {
        type:Number,
        default: 0
    },
    status: Boolean,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Post', PostSchema);