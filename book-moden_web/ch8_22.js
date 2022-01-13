let express= require('express');
let cookieParser= require('cookie-parser');
let app= express();

app.use(cookieParser());

app.get('/getCookie', function (req, res){
    res.send(req.cookies);
});

app.get('/setCookie', function (req, res){
    res.cookies('string', 'cookie');
    res.cookies('json', {
        name: 'cookie',
        property: 'delicious'
    });

    res.redirect('/getCookie');
});

app.listen(52273, function() {
    console.log("running");
});