const {User}=require('../models/Schema');

let check_if_user_exists=async(req,res,next)=>{
    let {email}=req.body;
    let user=await User.findOne({email:email});

    if(user){
        next();
    }else{
        res.status(400).json({success:false,msg:'You are not authorized'});
    }
};

module.exports={
    check_if_user_exists,
};