var fs =require('fs')
var data =("this is my first node.js script");

var readerStream = fs.createReadStream('basic');    
readerStream.setEncoding('UTF8');  

readerStream.on('data', function(chunk) {  
    data += chunk;  
 });  
 readerStream.on('end',function(){  
    console.log(data);  
 });  
 readerStream.on('error', function(err){  
    console.log(err.stack);  
 });  
 console.log("Program Ended");  