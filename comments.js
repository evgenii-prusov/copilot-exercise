// create web server
// start server
// create a route for comments
// create a route for comments/:id
// create a route for comments/:id/delete
// create a route for comments/:id/edit

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
    res.send('Comments Index');
});

app.get('/comments/:id', (req, res) => {
    res.send(`Comment Show Page for id: ${req.params.id}`);
});

app.get('/comments/:id/delete', (req, res) => {
    res.send(`Comment Delete Page for id: ${req.params.id}`);
});

app.get('/comments/:id/edit', (req, res) => {
    res.send(`Comment Edit Page for id: ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 
// run server: node comments.js
// open browser: http://localhost:3000/comments
// open browser: http://localhost:3000/comments/1
// open browser: http://localhost:3000/comments/1/delete
// open browser: http://localhost:3000/comments/1/edit

// Path: comments.js
// create web server
// start server
// create a route for comments
// create a route for comments/:id
// create a route for comments/:id/delete
// create a route for comments/:id/edit

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
    res.send('Comments Index');
});

app.get('/comments/:id', (req, res) => {
    res.send(`Comment Show Page for id: ${req.params.id}`);
});

app.get('/comments/:id/delete', (req, res) => {
    res.send(`Comment Delete Page for id: ${req.params.id}`);
});

app.get('/comments/:id/edit', (req, res) => {
    res.send(`Comment Edit Page for id: ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 
// run server: node comments.js
// open browser: http://localhost:3000/comments
// open browser: http://localhost:3000/comments/1
// open