require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./modules/common/middlewares/errorHandler');
const log = require('./modules/common/middlewares/log');
const app = express();
const cors = require('cors')

app.use(errorHandler);
app.use(cors());
app.use(log);
app.use(express.json());

app.use('uploads',express.static('uploads'));

const postRouter = require('./modules/posts/post-router');
const commentRouter = require('./modules/comments/comment-router');
const userRouter = require('./modules/users/user-router');
const hashtagRouter = require('./modules/hashtags/hashtag-router');
const reportRouter = require('./modules/reports/report-router');
const followRouter = require('./modules/followers/follow-router');
const likeCommentRouter = require('./modules/likeComment/likecmt-router');
const likePostRouter = require('./modules/likePost/likepost-router');
const uploadRouter = require('./modules/upload/upload-router');

app.use('/api/posts',postRouter);
app.use('/api/comments',commentRouter);
app.use('/api/user',userRouter);
app.use('/api/hashtag',hashtagRouter);
app.use('/api/report',reportRouter);
app.use('/api/follow',followRouter);
app.use('/api/likecomment',likeCommentRouter);
app.use('/api/likepost',likePostRouter);
app.use('/api/upload',uploadRouter)

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`Server running on port ${process.env.PORT}`);
});

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    }).then(()=>{
        console.log("MongoDB Connected");
    }).catch(err => console.log(err))