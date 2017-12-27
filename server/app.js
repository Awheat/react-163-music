let express = require('express');
let app = express();
let data = require('./data.js');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/api/getSongs', function (req, res) {
    res.send(data.songs)
});

app.get('/api/getSongSheets', function (req, res) {
    res.send(data.songSheets)
});

app.post('/api/getPlayInfo', function (req, res) {
    res.send(data.play)
});

app.listen(9000, function () {
    console.log('app started listening at 9000 ~');
});
