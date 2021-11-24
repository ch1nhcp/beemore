const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followSchema = new Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    followers:Array,
    following:Array,
},{
    timestamps:true
});

module.exports = mongoose.model('Follow', followSchema);