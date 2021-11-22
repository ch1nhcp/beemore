const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    categoryName:{
        type: String,
        required: true
    },
    description: String
})

module.exports = mongoose.model('Category',CategorySchema)