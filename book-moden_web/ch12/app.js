let socketio= require('socket.io');
let express= require('express');
let http= require('http');
let fs= require('fs');

var seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

let app= express();
let server= http.createServer(app);

app.get('/', function (request, response, next) {
    fs,fs.readFile('index.html', function (err, data) {
        response.send(data.toString());
    });
});
app.get('/seats', function (req, resp, next) {
    resp.send(seats);
});

server.listen(52273, function() {
    console.log('server running at http://127.0.0.1:52273');
});

let io = socketio.listen(server);
io.socketio.on('connection', function (socket) {
    socket.on('reserve', function (data) {
        seats[data.y][data.x]= 2;
        io.sockets.emit('reserve', data);
    });
});