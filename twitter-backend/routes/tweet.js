const {Tweet}=require('../models/Schema');
const {verify_user_permissions}=require('../middlewares/authorization');
const {authorize_access_token}=require('../middlewares/authentication');
const {handle_tweet}=require('../controllers/tweet_controller');
const express=require('express');

const router=express.Router();

router.use('/post',authorize_access_token,verify_user_permissions);
router.post('/post',(req,res)=>{
    handle_tweet(req,res);
});

module.exports=router;