const bcrypt = require('bcrypt');
const User = require('../models/Schema');
const uuid = require('uuid');
const jwt=require('jsonwebtoken');

let handle_register = async (req, res) => {

  let { firstname, lastname, email, password } = req.body;

  //Encrypt user entered password
  let salt = await bcrypt.genSalt();
  let hashed_password = await bcrypt.hash(password, salt);

  let user = new User({
    id: uuid.v4(),
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: hashed_password,
  });

  await user.save((err,result)=>{
      if(err){
        res.status(500).json({success:false,msg:'Internal server error'});
      }else{
        res.status(201).json({success:true,msg:'profile created'}); 
      }
  });
  
};

let handle_login=async(req,res)=>{
    let {email,password}=req.body;

    let user=await User.findOne({email:email});
    console.log(user);

    if(!user){
        res.status(400).json({success:false,msg:'wrong email or password'});
    }

    let password_check_flag=await bcrypt.compare(password,user.password);
    
    if(!password_check_flag){
        res.status(400).json({success:false,msg:'wrong email or password'});
    }

    let {id}=user; 

    let payload={id:id};
    let access_token=jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET);
    
    res.status(200).json({success:false,msg:'login successful',access_token:access_token});
}

module.exports = {
  handle_register,
  handle_login,
};
