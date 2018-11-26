// Import events module
const events = require('events');
// Create an event emitter Object
const eventEmitter = new events.EventEmiter();
// Create an event handler
const connectHandler = () => {
	console.log('connection successful');
}
// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', () => {
	console.log('data received successfully.');
});
// Fire the conncetion event
eventEmitter.emit('conncetion');
console.log('Program Ended');
