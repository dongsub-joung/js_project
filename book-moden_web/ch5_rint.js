let Eimtter= require('event');
exports.timer= new Eimtter();

setInterval(function(){
    exports.timer.emit('tick');
}, 1000);