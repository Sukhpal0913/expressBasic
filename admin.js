const express = require('express');

const router = express.Router();


router.get('/add-product',(req,res,next) => {
    // console.log('In another middlewear');
    // send allows us to send the response
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});  
 
router.post('/product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports  = router;