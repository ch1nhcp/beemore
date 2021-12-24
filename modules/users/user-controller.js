const UserModel = require('./user-model');
const bcrypt = require('bcrypt');
const tokenProvider = require('../common/tokenProvider')
const HttpError = require('../common/middlewares/httpError');

const signUp = async (req, res, next) => {
    try {
        const {username, password, email } = req.body;
        if(!username){
            throw new HttpError('username required',422);
        }
        if(password && password.length <=6){
            throw new HttpError('password length',422);
        }

        const existedUser = await UserModel.findOne({username});
        if(existedUser) {
            throw new HttpError('Đăng ký thất bại',400);
        }

        const SALT = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, SALT)
        const newUser = await UserModel.create({
            "username":username,
            "password":hashPassword,
            "email":email,
        });

        res.send({
            success:1,
            data:newUser
        });
    }
    catch(err){
        next(err);
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // validate user input
        const existedUser = await UserModel.findOne({ username });
        
        if (!existedUser) {
          throw new Error('đăng nhập thất bại (không có username)')
        }
    
        const hastPassword = existedUser.password;
    
        const matchedPassword = await bcrypt.compare(password, hastPassword);
    
        if (!matchedPassword) {
          throw new Error('đăng nhập thất bại (password ko đúng)')
        }
        // Là ai, được làm gì
    
        const token = tokenProvider.sign(existedUser._id);
    
        res.send({ 
          success: 1, 
          data: {
            _id: existedUser._id,
            username: existedUser.username,
            token,
          }}
        );
    } catch (err) {
        next(err);
    }
}

const getUserInfo = async (req, res) => {
    const { user } = req;
    const userInfo = user ? {
      username: user.username,
      _id: user._id
    } : null;
  
    res.send({ success: 1, data: userInfo });
  }

module.exports = {
    signUp,
    login,
    getUserInfo
}