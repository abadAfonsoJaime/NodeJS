const EventEmmitter = require('events');
let url = 'http://mylogger.io/log';

class Logger extends EventEmmitter {

    log(message) {
        // Send HTTP Request
        console.log(message);
        // Raise an event
        this.emit('messageLogged', { id : 1, url : 'http://' });
    }
}

module.exports = Logger;