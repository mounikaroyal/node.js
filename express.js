const express = require('express')
const app = express();
// const hostname = '127.0.0.1';
// port = 3000;
app.set('view engine', 'ejs');
app.get('/', function(req , res) {
    res.sendFile(__dirname + '/basic');
})
    app.get('/index', function(req, res) {
        res.sendFile(__dirname + '/index.html');
    })
    var students = {
        1 : 'mounika',
        2 : 'matchMedia',
        3 : 'hanush'

    }
app.get('/students/:id', function(req, res) {
    res.send('you have requested to see the student name: '+ students [req.params.id]);

}).listen(8080)
 //console.log('server running at http://127.0.0.1/3000')

