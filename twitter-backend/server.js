require('dotenv').config();
const config = require('./config');
const express=require('express');
const cors=require('cors');
const compression = require('compression');
const mongoose=require('mongoose');
const user=require('./routes/user');

mongoose.connect(`mongodb+srv://raj:${process.env.CLUSTER_ADMIN_PASSWORD}@cluster0.yufrz.mongodb.net/twitterDB`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false, 
});

//Check connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  console.log(`Connected to DB`);
});

const app=express();

app.use(express.json());
app.use(cors());
app.use(compression());

app.use(`${config['BASE_API_PATH']}/user`,user);

app.listen(config.SERVER_PORT,()=>{
    console.log(`Server running on PORT:${config.SERVER_PORT}`);
});

