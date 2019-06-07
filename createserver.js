const http = require('http')
const fs = require('fs')

fs.readFile('basic', (err, res) => {
    if(err) {
        throw err;
    }
});
const hostname = '127.0.0.1';
port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200 ;
    res.setHeader('content-type' , 'text/plain');
    res.end("hello world")
})
server.listen(port ,hostname , () => {
    console.log('server started on port' +port)
})