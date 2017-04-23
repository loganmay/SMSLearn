var http = require('http');
var express = require('express');
var twilio = require('twilio');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', (process.env.PORT || 5000));

app.post('/message', function(req, res) {
  var twilio = require('twilio');
  console.log(req.body.Body);
  var twiml = new twilio.TwimlResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port 1337");
});
