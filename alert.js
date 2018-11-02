var events = require ('events');

var myEmit = new events.EventEmitter();

myEmit.on('some_event', function(){
    console.log(text)
})

myEmit.emit('some_event', 'Обработчик событий сработал!');