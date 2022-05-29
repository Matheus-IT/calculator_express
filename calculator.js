const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
	const { num1:n1, num2:n2 } = req.body;
	const result = Number(n1) + Number(n2);
	res.send(`<h1>The result is ${result}</h1>`);
});

const port = 3000;
app.listen(port, function() {
	console.log('Listening on port ' + port);
});
