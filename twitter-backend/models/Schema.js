const mongoose=require('mongoose');
const {Schema,model}=require('mongoose')

let user={
    id          :  {type:String,required:true,unique:true},
    firstname   :  {type:String,required:true},
    lastname    :  {type:String,required:true},
    email       :  {type:String,required:true,unique:true},
    password    :  {type:String,required:true,unique:true},
    created_on  :  {type:Date,required:true},
    permissions :  {type:Date,required:true},
    posts       :  {type:Array,default:[]},
    likes       :  {type:Array,default:[]},
    comments    :  {type:Array,default:[]},
    retweets    :  {type:Array,default:[]}
};

let User=module.exports=model('users',new Schema(user));