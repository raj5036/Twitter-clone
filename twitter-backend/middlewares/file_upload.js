const multer=require('multer');
const path=require('path');

//Setup Image storage Location & Filename
let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/uploads');
    },
    filename:function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

//Filter uploaded Images
let imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

module.exports={
    storage,
    imageFilter,
};