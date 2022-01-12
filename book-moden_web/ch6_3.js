let http= require('http');

let server= http.createServer();

server.on('request', function(code){
    console.log('Request on');
});

server.on('connection', function (code){
    console.log('Connection on');
});

server.on('close', function (code){
    console.log('Close on');
});

server.listen(52273);