const {Media}=require('../models/Schema');

// let find_one_media_with_condition=async(search_query)=>{
//     try{
//         let found_tweet=await Tweet.findOne(search_query);
//         return found_tweet;
//     }catch(err){
//         console.log(`Error -> find_one_tweet_with_condition\n`,err);
//         return {success:false};
//     }
// }

// let update_media_in_db=async(search_query,update_query)=>{
//     try{
//         await Tweet.updateOne(search_query,update_query,(err,docs)=>{
//             if(err){
//                 console.log(`Error while updating\n`,err);
//             }else{
//                 console.log(`tweet record updated`);
//             }
//         });
//     }catch(err){
//         console.log(`Error -> update_tweet_in_db\n`,err);
//         return {success:false};
//     }   
// }

let delete_one_media_from_db=async(search_query)=>{
    try{
        await Media.deleteOne(search_query,(err,docs)=>{
            if(err){
                console.log(`Error while deleting\n`,err);
            }else{
                console.log(`media deleted`);
            }
        });
    }catch(err){
        console.log(`Error -> delete_tweet_from_db\n`,err);
        return {success:false};
    }
}

let delete_many_media_from_db=async(search_query)=>{
    try{
        await Media.deleteMany(search_query,(err,docs)=>{
            if(err){
                console.log(`Error while deleting\n`,err);
            }else{
                console.log(`media deleted`);
            }
        });
    }catch(err){
        console.log(`Error -> delete_tweet_from_db\n`,err);
        return {success:false};
    }
}

module.exports={
    delete_one_media_from_db,
    delete_many_media_from_db,
}