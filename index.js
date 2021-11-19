require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
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