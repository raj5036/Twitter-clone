const {User}=require('../models/Schema');
const jwt=require('jsonwebtoken');

let check_if_user_exists=async(req,res,next)=>{
    let {email}=req.body;
    let user=await User.findOne({email:email});

    if(user){
        next();
    }else{
        return res.status(400).json({success:false,msg:'Signup first'});
    }
};

let authorize_access_token=async(req,res,next)=>{
    const authHeader=req.headers['authorization']; 

    const token=authHeader/* && authHeader.split(' ')[1];*/

    if(token==null){
        return res.sendStatus(401).json({success:false,msg:'Unauthorized'}); //Unauthorized 
    }

    //Verify token
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,payload)=>{
        if(err){
            return res.sendStatus(403).json({success:false,msg:'Forbidden'});
        }
        req.user_id=payload.id;
        console.log(`req.user_id is `, req.user_id);
        next();
    });
}

module.exports={
    check_if_user_exists,
    authorize_access_token,
};