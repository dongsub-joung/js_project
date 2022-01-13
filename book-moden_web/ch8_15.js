let express= require('express');
let app= express();

let routerA= express.Router();
let routerB= express.Router();

routerA.get('/index', function (req, res){
    res.send('<h1> INdex </h1>');
});

routerB.get('/index', function (req, res){
    res.send('<h1>Index</h1>');
})

app.use('/a', routerA);
app.use('/b', routerB);

app.listen(52273, function(){
    console.log("SERver running");
});