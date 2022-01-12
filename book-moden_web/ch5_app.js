let rint= require('.ch5_rint');

rint.timer.on('tick', function (code){
    console.log("init event");
});