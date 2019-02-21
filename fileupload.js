const express = require('express');
const app  = express();
const path = require('path');
const ejs = require('ejs');

const multer = require('multer');

// Set storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb) {
        cb(null,file.fieldname + '-' + Date.now() + 
        path.extname(file.originalname));
    }
});

// Init Upload
const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb) {
        checkFileType(file,cb);
    }
}).single('myImage');

// Check File Type
function checkFileType(file, cb) {
    // Allowed extension
    const filetypes = /jpeg|jpg|png|gif/;
    // Check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mine type
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images only!!');
    }
}

// Set up EJS
app.set('view engine', 'ejs');


// Public folder
app.use(express.static('./public'));

app.get('/', (req,res) => res.render('index'));
  

app.post('/upload' , (req,res) => {
    upload(req,res, (err) => {
        if(err) {
            res.render('index', {
                msg: err
            });
        } else {
           
            if(req.file == undefined) {
                res.render('index', {
                    msg: 'Error: No File Selected.'
                });

            } else {
                res.render('index', {
                    msg: 'File Uploaded',
                    file: `uploads/$(req.file.filename)`
                });
            }
        }
    });
});


app.listen(2000);