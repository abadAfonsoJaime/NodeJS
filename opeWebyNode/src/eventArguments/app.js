const EventEmmitter = require('events');
const Logger = require('./Logger');
const logger = new Logger();

// Register a Listener
logger.on('messageLogged', (arg) => {
    console.log( "Listener called", arg );
})


/*
 * node src/eventArguments/app.js
 */


/*
 * If we want to raise events in our application to signal that something has happened,
 * create a class that extends all functionality, defined in the 'events' module class
 * along with your additional code. Inside that class, whenever you gonna raise an event
 * use the this keyword to reference the class itself: this.emit('xx', {event arguments})
 * Finally, in the app module, instead of using an instance of the 'events' module class,
 * use an instance of the defined customed class
 */