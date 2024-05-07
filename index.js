// Import Express
const express = require('express');

// Create an instance of Express
const app = express();
const PORT = 3000;
// Added to support access to file system paths
const path = require('path');
const { title } = require('process');
const jsonIcecreamTypeData = require(path.join(__dirname, 'data/icecreamtypes'));
const jsonCommentData = require(path.join(__dirname, 'data/comments'));
const jsonUserData = require(path.join(__dirname, 'data/users'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('index', { title: 'Ice Cream Review' });
});

app.get('/users', (req, res, next) => {
    res.json(jsonUserData);
});

app.get('/icecreamtypes', (req, res, next) => {
    res.json(jsonIcecreamTypeData);
});

app.get('/comments', (req, res, next) => {
    res.json(jsonCommentData);
});

app.get('/feedback', (req, res, next) => {
    res.render('list', {
        title: 'User Feedback',
        types: jsonIcecreamTypeData.icecreamtypes,
        comments: jsonCommentData.comments,
        users: jsonUserData.users
    });
});

// Set the server to listen on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
