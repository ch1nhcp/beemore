const tokenProvider = require('../tokenProvider');
const UserModel = require('../../users/user-model');
const HttpError = require('../../common/middlewares/httpError');

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      throw new HttpError('Not have token',401)
    }
    const identityData = tokenProvider.verify(token);

    if (!identityData.userId) {
      throw new Error('Invalid token')
    }

    const existedUser = await UserModel.findById(identityData.userId);

    if (!existedUser) {
      throw new Error('Not found user')
    }

    req.user = existedUser;
    next();

  } catch (err) {
    res.status(401).send({ success: 0, message: err.message || 'UnAuthorized' })
  }
}

module.exports = isAuth;