import multer from 'multer';

// Set up multer for file uploads

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
})

const upload = multer({storage})// Set up multer for file uploads

export default upload