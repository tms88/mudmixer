module.exports = async (main, middleware) => {
 const exports = main.exports;
 const device = middleware.device;
 if (device.isClient()) throw new Error(`This middleware is designed for server connections only.`);

 // Miriani always sends proper EOL, so no need for buffer TTL.
 device.config.bufferTTL = 0;

 require('./reconnecting.js')(main, middleware);
 require('./registerSoundpack.js')(main, middleware);

 // Commands
 require('./secho.js')(main, middleware);
};
