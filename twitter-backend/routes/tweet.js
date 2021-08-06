const {Tweet}=require('../models/Schema');
const {verify_user_permissions}=require('../middlewares/authorization');
const {authorize_access_token}=require('../middlewares/authentication');
const {handle_post_tweet}=require('../controllers/tweet_controller');
const {imageFilter,storage}=require('../middlewares/file_upload');
const multer=require('multer');

const express=require('express');
const upload=multer({storage:storage,fileFilter:imageFilter}).array('tweeted_files',4);
const router=express.Router();

router.use('/post',authorize_access_token,verify_user_permissions,upload);
router.post('/post',(req,res)=>{
    handle_post_tweet(req,res);
});

module.exports=router;