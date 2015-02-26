module.exports = function setup(options, imports, register) {
    var airbrake;

    // Only enable if there is an api key.
    if (options.api_key) {
        imports.log('airbrake').info('loaded');
        airbrake = require('airbrake').createClient(options.api_key);
        airbrake.handleExceptions();
    } else {
        imports.log('airbrake').warn('disabled');
        airbrake = false;
    }

    var errorHandler = {
        notify:function(message){
            if(airbrake){
                airbrake.notify(message);
            }
        }
    }

    register(null, {
        error_handler: errorHandler
    });
}