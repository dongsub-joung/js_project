let fs= require('fs');
let http= require('http');

http.createServer(function (request, response) {
    fs.readFile('6-8.html', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});