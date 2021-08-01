const config = require('../config');
const {Tweet}=require('../models/Schema');

let handle_tweet=async(req,res)=>{
    console.log(req.user_id);
    console.log(req.permissions);

    let user_permissions=req.permissions;
    
    if(user_permissions===config['USER_PERMISSIONS']['READ']){
        return res.status(400).json({success:false,msg:'You are not authorized to perform this operation'});
    }
    res.end();
}

module.exports={
    handle_tweet,
}