const express = require('express'); 
const { handle_register } = require('../controllers/user_controller');
const app = express();
const router = express.Router();

router.post('/register',(req,res)=>{
    handle_register(req,res)
});

module.exports=router;