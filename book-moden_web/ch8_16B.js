let express= require('express');
let app= express();

app.use('/a', require(".ch08_16A").router);
app.use('/b', require(".ch08_16A").router);
app.use('/c', require(".ch08_16A").router);

app.listen(52273, function(){
    console.log("server runnging");
});