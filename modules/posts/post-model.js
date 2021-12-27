const mongoose = require('mongoose');
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    postTitle: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        slug: "postTitle",
        unique: true
    },
    content: {
        type: String,
        require: true
    },
    postImg: String,
    hashtagId: {
        type:mongoose.Types.ObjectId,
        ref:"HashTag"
    },
    viewNumber: {
        type:Number,
        default: 0
    },
    status: Boolean,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    giftByPoster:{
        type:mongoose.Types.ObjectId,
        ref:"User" 
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Post', PostSchema);