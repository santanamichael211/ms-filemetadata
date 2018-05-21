// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var formidable = require('formidable');
var util = require("util");


var file = null;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/get-file-size", function(request,response){
  file = new formidable.IncomingForm();
  
    file.parse(request, function(err,fields,files){
      console.log(util.inspect({fields: fields, files: files}));
    
    })
  
  response.end();
});

app.get("/get-file-size",function(request,response){
  response.send(file);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
