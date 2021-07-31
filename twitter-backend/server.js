const express=require('express');
const cors=require('cors');
const config = require('./config');


const app=express();

app.use(cors());

app.listen(config.SERVER_PORT,()=>{
    console.log(`Server running on PORT:${config.SERVER_PORT}`);
});

