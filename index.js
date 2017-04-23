var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
	res.send("yeah we here");
})

app.post('/message', function(req,res) {
    console.log(req.body);

    res.send(`
        <Response>
            <Message>
                Hello ${msgFrom}. You said: ${msgBody}
            </Message>
        </Response>
    `);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


