var express = require('express');   
var bodyParser = require('body-parser'); // pull reqs from HTML POST
var morgan = require('morgan');  // log requests to the console
var db = require('./config/database.js'); 



var app = express();  // create our app w/ express
var port = process.env.PORT || 3000;
var ip = "127.0.0.1";

/************************************************************/
// CONFIGURE SERVER
/************************************************************/
//placeholder for connecting to DB
// db.getConnection();
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());


/************************************************************/
// ROUTE HANDLING
/************************************************************/
app.get('/', function(req, res) {
  res.send('Hello');
});




/************************************************************/
// Authenticaton Routes
/************************************************************/




/************************************************************/
// Handle the wildcard route last - if all other routes fail
// 
// 
/************************************************************/

console.log('Knapsack is listening on port ' + port);
app.listen(3000);