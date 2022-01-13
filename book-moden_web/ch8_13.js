let express= require('express');
let app= express();

app.get('/page/:id', function( request, response ){
    let name= request.params.id;
    response.send('<h1>' + name + '</h1>');
});

app.listen(52273, function () {
    console.log('http://127.0.0.1:52273');
});