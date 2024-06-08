// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// create web server
app.get('/', function(req, res) {
    res.send('Hello World');
});

// create post request
app.post('/comments', bodyParser.json(), function(req, res) {
    var comments = fs.readFileSync('comments.json', 'utf8');
    comments = JSON.parse(comments);
    comments.push(req.body);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.send('Comment added');
});

// create get request
app.get('/comments', function(req, res) {
    var comments = fs.readFileSync('comments.json', 'utf8');
    comments = JSON.parse(comments);
    res.json(comments);
});

// start server
app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});