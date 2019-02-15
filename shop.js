// Importing express
const express = require('express');


const router = express.Router();


router.get('/',(req,res,next) => {
    // console.log('In another middlewear');
    // send allows us to send the response
    res.send('<h1>Hello welcome to express</h1>')
});

module.exports = router;