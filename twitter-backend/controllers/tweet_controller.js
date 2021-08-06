const config = require('../config');
const {Tweet,Media, User}=require('../models/Schema');
const uuid=require('uuid');
const { find_one_user_with_condition, update_user_in_db } = require('../utils/user_utils');

let handle_post_tweet=async(req,res)=>{

    let user_permissions=req.permissions;
    
    if(user_permissions===config['USER_PERMISSIONS']['READ']){
        return res.status(400).json({success:false,msg:'You are not authorized to perform this operation'});
    }

    let {content}=req.body;
    console.log(content);

    console.log(req.files);

    let files=req.files;
    let tweet_id=uuid.v4();
    let tweeted_files_ids=[]; 

    for(let index=0;index<files.length;index++){
        let media=new Media({
            media_id    :  uuid.v4(),
            user_id     :  req.user_id,
            tweet_id    :  tweet_id,
            filename    :  files[index].path
        });
        tweeted_files_ids.push(media.media_id); 

        await media.save(); 
    } 

    console.log('Media saved');

    let tweet=new Tweet({
        tweet_id    :  tweet_id,
        content     :  content,
        media       :  tweeted_files_ids, //Array of Media IDs
        user_id     :  req.user_id
    });

    await tweet.save();

    console.log('Tweet saved');

    //Update Tweet count of user
    let search_query={user_id:req.user_id}
    let found_user=await find_one_user_with_condition(search_query)
    // console.log(found_user);
    if(!found_user){
        res.json({success:false,msg:`Something went wrong`});
    }

    let user_tweets=found_user.tweets; //current tweet array for that user
    let updated_user_tweets=user_tweets.concat(tweet_id); //updated tweet array for that user

    let update_query={ tweets : updated_user_tweets};

    let response=await update_user_in_db(search_query,update_query);

    if(response && response['success']){
        res.status(500).json({success:false,msg:`error while updating user's record`});
    }else{
        res.status(200).json({success:true,msg:`Tweet posted`});
    }


    res.end();
}

module.exports={
    handle_post_tweet,
}