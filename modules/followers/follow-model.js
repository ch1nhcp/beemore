const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followSchema = new Schema({
    userid: {
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    followers:Array,
});

module.exports = mongoose.model('Follow', followSchema);