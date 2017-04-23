var http = require('http');
var express = require('express');
var twilio = require('twilio');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', (process.env.PORT || 5000));

app.post('/message', function(req, res) {
  var twilio = require('twilio');
  if(req.body.Body == 'Algebra') {
	  var twiml = new twilio.TwimlResponse();
	  twiml.message("Welcome to SMSLearn - Algebra! Let's get started!  What's 4 + 4? (Please respond in the form 4+4=?)");
	  res.writeHead(200, {'Content-Type': 'text/xml'});
	  res.end(twiml.toString());
	} else if(req.body.Body == '4+4=8') {
	  var twiml = new twilio.TwimlResponse();
	  twiml.message("Nice work! Here's another. What's 4 * 9? (Please respond in the form 4*9=?)");
	  res.writeHead(200, {'Content-Type': 'text/xml'});
	  res.end(twiml.toString());
	} else if(req.body.Body == '4*9=36') {
	  var twiml = new twilio.TwimlResponse();
	  twiml.message("Owwiee! You hot! What's 14 / 2? (Please respond in the form 14/2=?)");
	  res.writeHead(200, {'Content-Type': 'text/xml'});
	  res.end(twiml.toString());
	} else if(req.body.Body == '14/2=7') {
	  var twiml = new twilio.TwimlResponse();
	  twiml.message("Get.. get.. get it poppin'! What's 104 / 2? (Please respond in the form 104/2=?)");
	  res.writeHead(200, {'Content-Type': 'text/xml'});
	  res.end(twiml.toString());
	} else if(req.body.Body == '104/2=52') {
	  var twiml = new twilio.TwimlResponse();
	  twiml.message("Oh my good golly! You are ready to move on! Nice job ;)");
	  res.writeHead(200, {'Content-Type': 'text/xml'});
	  res.end(twiml.toString());
	}
});

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port 1337");
});
