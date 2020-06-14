
// Required External Modules

const express = require("express");
// bring in join method from path
const { join } = require("path");

// App Variables 

const app = express();

require('dotenv').config()
// Bring in Handlebars
app.engine(".hbs", require("express-handlebars")({ extname: ".hbs" }));
app.set("view engine", ".hbs");

//middleware to help serve all front end
app.use(express.static(join(__dirname +'/public/')))
//to accept json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//bring in routes from controllers index
app.use(require('./controllers/index.js'))

//app to listen on port and show URL
app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))