require('dotenv').config();
const express = require('express');
const router = require('./app/router');
//const swaggerConfig = require('./app/services/swagger.js');
// Managing Cross-origin ressource sharing with node.js package CORS
const cors = require('cors');

const app = express();
// API documentation with Swagger 

//const expressSwagger = require('express-swagger-generator')(app);
const PORT = process.env.PORT || 1234;


// API documentation with Swagger 
//const expressSwagger = require('express-swagger-generator')(app);
//expressSwagger(swaggerConfig);
//const swaggerConfig = require('./app/middlewares/swagger.js');
//app.use(cors());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');


  next();
});
// dès qu'on veut utiliser une requète POST


// dès qu'on veut utiliser une requète POST
// All data sent as json in POST methods 
app.use(express.json());
// All, but POST route requesting access token to Pôle Emploi API, which is set to be in urlencoded
app.use(express.urlencoded({
    extended: true,
}));

app.options('*', cors());
// potential static route
//app.use(express.static('public'));

//app.use(authAdminMiddleware);

// Orientating all routes towards router
app.use(router);

// Server is listening on port as indicated in .env file
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});
