const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const {emit} = require('process');


setTimeout(() =>eventEmitter.emit('newEvent'), 5000 )
eventEmitter.on('newEvent', () => {
    console.log('Event has been received...');
})

setTimeout(() =>eventEmitter.emit('newEvent2', 5,6), 5000 )
eventEmitter.on('newEvent2', (a,b) => {
    console.log('Event has been received...', a, b );
})



// eventEmitter.on('start', () => {
//   console.log('started');
// });
// eventEmitter.emit('start');

