const mongoose=require('mongoose');
const config=require('../config');
const {Schema,model}=require('mongoose');

let user={
    id          :  {type:String,required:false,unique:true},
    firstname   :  {type:String,required:true},
    lastname    :  {type:String,required:true},
    email       :  {type:String,required:true,unique:true},
    password    :  {type:String,required:true,unique:true},
    avatar      :  {type:String,required:false,default:''},
    created_on  :  {type:Date,required:false,default:Date.now},
    permissions :  {type:String,required:false,default:config['USER_PERMISSIONS']['READ_WRITE']},
    tweets      :  {type:Array,required:false,default:[]},
    likes       :  {type:Array,required:false,default:[]},
    comments    :  {type:Array,required:false,default:[]},
    retweets    :  {type:Array,required:false,default:[]}
};

let tweet={
    id          :  {type:String,required:true,unique:true},
    content     :  {type:String,required:true},
    media       :  {type:Array,required:true,default:[]}, //Array of Media IDs
    created_on  :  {type:Date,required:false,default:Date.now},
    likes       :  {type:Array,default:[]},
    comments    :  {type:Array,default:[]},
    retweets    :  {type:Array,default:[]},
    user_id     :  {type:String,required:false}
};

let media={
    media_id    :  {type:String,required:true,unique:true},
    user_id     :  {type:String,required:true},
    created_on  :  {type:Date,required:true,default:Date.now},
    filename    :  {type:String,required:true}
};

let User=model('users',new Schema(user));
let Tweet=model('tweets',new Schema(tweet));
let Media=model('medias',new Schema(media));

module.exports={
    User,
    Tweet,
    Media,
}