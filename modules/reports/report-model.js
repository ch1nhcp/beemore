const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReportSchema = new Schema({
    content: {
        type: String,
        require: true
    },
    status: {
        type: String,
        enum: ["Chưa xử lý","Đang xử lý","Đã xử lý"],
        default:"Chưa xử lý"
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "Post"
    },
    reportBy:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Report', ReportSchema);