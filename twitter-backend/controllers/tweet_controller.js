const config = require('../config');
const {Tweet}=require('../models/Schema');

let handle_post_tweet=async(req,res)=>{

    let user_permissions=req.permissions;
    
    if(user_permissions===config['USER_PERMISSIONS']['READ']){
        return res.status(400).json({success:false,msg:'You are not authorized to perform this operation'});
    }

    let {content}=req.body;
    console.log(content);

    console.log(req.files); 
    res.end();
}

module.exports={
    handle_post_tweet,
}