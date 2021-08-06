const {User}=require('../models/Schema');
const jwt=require('jsonwebtoken');

let verify_user_permissions=async(req,res,next)=>{
    let user_id=req.user_id;
    let user=await User.findOne({user_id:user_id});
    req.permissions=user.permissions;
    next();
}

module.exports={
    verify_user_permissions,
};