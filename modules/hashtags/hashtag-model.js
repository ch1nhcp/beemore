const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HashTagSchema = new Schema({
    tagName: {
        type:String,
        unique:true
    }
})

module.exports = mongoose.model('HashTag',HashTagSchema)