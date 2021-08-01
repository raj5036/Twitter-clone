const express = require('express'); 
const { handle_register, handle_login, handle_logout } = require('../controllers/user_controller');
const {check_if_user_exists,authorize_access_token}=require('../middlewares/authentication');

const router = express.Router();


router.post('/register',(req,res)=>{
    handle_register(req,res);
});

router.use('/login',check_if_user_exists);
router.post('/login',(req,res)=>{
    handle_login(req,res);
});

router.use('/logout',check_if_user_exists,authorize_access_token);
router.post('/logout',(req,res)=>{
    handle_logout(req,res);
});

module.exports=router;