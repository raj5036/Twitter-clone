const express = require('express'); 
const { handle_register, handle_login } = require('../controllers/user_controller');
const app = express();
const router = express.Router();

router.post('/register',(req,res)=>{
    handle_register(req,res)
});

router.post('/login',(req,res)=>{
    handle_login(req,res);
});

module.exports=router;