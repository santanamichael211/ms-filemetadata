// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require("multer");


var file = null;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(multer.array()); 


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/get-file-size",function(request,response){
  size = JSON.stringify(request.body);
  response.end();
});

app.get("/get-file-size",function(request,response){
  response.send(size);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
