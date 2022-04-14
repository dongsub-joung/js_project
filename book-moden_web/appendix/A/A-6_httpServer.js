let net= require(`net`);

net.createServer(function (socket) {
    socket.write(`HTTP/1.1 200 OK\n`);
    socket.write(`Server: RintIanTta NOde.js custom server\n`);
    socket.write(`Content-Type: text/html`);
}).listen(52273, connection());

function connection(){
    console.log(`TCO server running at 127.0.0.1:52273`);
}