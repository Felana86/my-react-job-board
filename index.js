require('dotenv').config();
const express = require('express');
const router = require('./app/router');
// Swagger options can be found in './app/services/swagger.js'
//const swaggerConfig = require('./app/services/swagger.js');
// Managing Cross-origin ressource sharing with node.js package CORS
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 1234;
/*app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
})*/

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());



// API documentation with node.js package express-swagger-generator 
/*const expressSwagger = require('express-swagger-generator')(app);
expressSwagger(swaggerConfig);*/

app.use(cors());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

// All data sent as json in POST methods 
app.use(express.json());
// All, but POST route requesting access token to Pôle Emploi API, which is set to be in urlencoded
app.use(express.urlencoded({
    extended: true,
}));

app.options('*', cors());



// Orientating all routes towards router
app.use(router);

// Server is listening on port as indicated in .env file
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});