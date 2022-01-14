let express= require('express');
let session= require('express-session');

let app= express();

app.use(session({
    secret: 'secret key',
    resave: false,
    seave: true,
}));

app.use(function(req, res) {});