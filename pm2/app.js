// https://engineering.linecorp.com/ko/blog/pm2-nodejs/

const express= require('express');
const app= express();
const port= 3000;

app.get(`/`, function (req, res) {
    res.send(`hello world!`);
});

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});

// ready

const express = require('express')
const app = express()
const port = 3000
app.get('/', function (req, res) { 
  res.send('Hello World!')
})
app.listen(port, function () {
  process.send(‘ready’)
  console.log(`application is listening on port ${port}...`)
})