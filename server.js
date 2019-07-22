var express = require('express');
var bodyParser = require('body-parser');
const router = require('./routers/beers')
var app = express();

app.use(function( req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use('/', router);

var port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
