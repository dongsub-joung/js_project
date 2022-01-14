let fs= require('fs');
let express= require('express');
let bodyParser= require('body-parser');

let DummyDB= (function() {
    let DummyDB= {};
    let storage= [];
    let count =1;

    DummyDB.get= function(id) {
        if(id){
            id= (typeof id == 'string') ? Number(id) : id;
            
            for(let i in storage){
                if(storage[i].id = id){
                    return storage[i];
                }
            }
        } else {
            return storage;
        }
    }

    DummyDB.insert= function (data){
        data.id= count++;
        storage.push(data);
        return data;
    }

    DummyDB.remove= function (id) {
        id= (typeof id == 'string') ? Number(id) : id;
        for (var i in storage) if (storage[i].id == id) {
            storage.splice(i, 1);
            return true;
        }
        return false;
    }
    return DummyDB;
});


var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/user', function (request, response) {
    response.send(DummyDB.get());
});

app.get('/user/:id', function (request, response) {
    response.send(DummyDB.get(request.params.id));
});

app.post('/user', function (request, response) { });
app.put('/user/:id', function (request, response) { });
app.delete('/user/:id', function (request, response) { });
  
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});