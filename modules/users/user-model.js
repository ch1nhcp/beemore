const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ["admin","member"],
        default:"member"
    },
    countVote: {
        type:String,
        default:0
    },
    avatar: {
        type: String,
        default:"defaultAvt.jpg"
    }
},{
    timestamps:true
})

const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;