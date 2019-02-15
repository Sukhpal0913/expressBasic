// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);


app.use((req,res,next) => {
res.status(404).send('<h1>Page not found');

});
// Use allows us to add new middle wear function
// app.use( (req,res, next) => {
//     console.log('In the middlewear');
//     next();  // Allows the request to continue to the next middleware in line

// }); 

// app.use('/',(req, res, next) => {
//     console.log('This always works');
//     next();
// });





// const server = http.createServer(app);
// server.listen(3000);

// We can write the above code in below shown code also

app.listen(3000);