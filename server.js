const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const path = require('path');
const PORT = process.env.PORT || 4000

// app.set('public', path.join(__dirname, 'public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('pages/index.ejs');
});

app.get('/direction', function(req, res) {
    res.render('pages/direction.ejs');
});

app.listen(PORT);
console.log(`${PORT}is the magic port`);
