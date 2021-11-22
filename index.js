require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./modules/common/middlewares/errorHandler');
const log = require('./modules/common/middlewares/log');
const app = express();

app.use(errorHandler);
app.use(log);
app.use(express.json());

const postRouter = require('./modules/posts/post-router');
const commentRouter = require('./modules/comments/comment-router');
const userRouter = require('./modules/users/user-router');
const categoryRouter = require('./modules/categorys/category-router');

app.use('/api/posts',postRouter);
app.use('/api/comments',commentRouter);
app.use('/api/auth',userRouter);
app.use('/api/category',categoryRouter);

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