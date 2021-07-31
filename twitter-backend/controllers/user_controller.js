const bcrypt = require('bcrypt');
const User = require('../models/Schema');
const uuid = require('uuid');

let handle_register = async (req, res) => {
  console.log('register route');
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

  user.save((err,result)=>{
      if(err){
          res.status(500).json({success:false,msg:'Internal server error'});
      }else{
          res.status(201).json({success:true,msg:'profile created'});
      }
  });

};

module.exports = {
  handle_register,
};
