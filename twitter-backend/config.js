let config={
    'SERVER_PORT' : 3001 || process.env.PORT,
    'BASE_API_PATH':'/twitter',
    'USER_PERMISSIONS':{
        READ_WRITE:'Read and Write',
        READ:'Read Only',
        DIRECT_MESSAGE_ACCESS:'Read, Write and Access Direct Messages',
    }
};

module.exports=config;