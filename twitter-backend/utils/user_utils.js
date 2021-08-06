const {User}=require('../models/Schema');

let find_one_user_with_condition=async(search_query)=>{
    try{
        let found_user=await User.findOne(search_query);
        return found_user;
    }catch(err){
        console.log(`Error -> find_one_user_with_condition\n`,err);
        return {success:false};
    }
}

let update_user_in_db=async(search_query,update_query)=>{
    try{
        await User.updateOne(search_query,update_query,(err,docs)=>{
            if(err){
                console.log(`Error while updating\n`,err);
            }else{
                console.log(`user record updated`);
            }
        });
    }catch(err){
        console.log(`Error -> update_user_in_db\n`,err);
        return {success:false};
    }   
}

module.exports={
    find_one_user_with_condition,
    update_user_in_db,
}