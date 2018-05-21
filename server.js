// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/get-file-size",function(request,response){
  request.session.foo = request.body;
  response.send(200);
});

app.get("/get-file-size",function(request,response){
  console.log(request.session.foo);
  response.send(request.session.foo);

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
