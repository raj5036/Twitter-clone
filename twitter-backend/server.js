const config = require('./config');
const express=require('express');
const cors=require('cors');
const compression = require('compression');


const app=express();

app.use(cors());
app.use(compression());

app.listen(config.SERVER_PORT,()=>{
    console.log(`Server running on PORT:${config.SERVER_PORT}`);
});

