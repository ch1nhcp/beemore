const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HashTagSchema = new Schema({
    tagName: String,
})

module.exports = mongoose.model('HashTag',HashTagSchema)