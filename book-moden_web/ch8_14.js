let express= require('express');
let app= express();

app.get('/index', function ( request, response ){
    response.send('<h1></h1>');
});

app.all('*', function (request, response ){
    response.status(404).send('<h1> ERROR </h1>');
});

app.listen(52273, function () {
    console.log('Server running');
})