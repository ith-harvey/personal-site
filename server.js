const express = require('express');
const app = express();



app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/direction', function(req, res) {
    res.render('pages/direction');
});

app.listen(8080);
console.log('8080 is the magic port');
