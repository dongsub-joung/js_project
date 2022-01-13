let express= require('express');

let app= express();

app.use(function (request, response){
    let agent= request.header('User-Agent');

    if(agent.toLowerCase().match(/chrome/)){
        response.send('<h1>chrome</h1>')
    } else {
        response.send('<h1></h1>')
    }
});

app.listen(52273, function () {
    console.log(" http://127.0.0.1:52273 ");
});