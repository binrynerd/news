const express = require('express');
// const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();
const app = express();




// static files
app.use(express.static(__dirname + '/public'));

// body parser
app.use(express.urlencoded({extended: true}))

// view engine
app.set('view engine', 'ejs')

// routes
app.use('/', require('./routes/index'));

const port = process.env.port;
app.listen(port, console.log(`server is up on ${port}`));
