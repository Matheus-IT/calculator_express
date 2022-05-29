const express = require('express');

const app = express();


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

const port = 3000;
app.listen(port, function() {
	console.log('Listening on port ' + port);
});
