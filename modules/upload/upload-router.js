const router = require('express').Router();
const multer = require('multer');
const uploadController = require('./update-controller');
const storage = multer.diskStorage({
    destination: function (req, file, cb ) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb){
        cb(null, file.originalname)
    }
})

const memoryStorage = multer.memoryStorage();

const uploadWithMemory = multer({storage:memoryStorage })
const upload = multer({storage})

router.post('/disk',upload.single('file'), uploadController.uploadToDisk)

router.post('/cloud',uploadWithMemory.single('file'), uploadController.uploadToCloud);
module.exports = router;