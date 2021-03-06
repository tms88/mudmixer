module.exports = (main, middleware) => {
 const exports = main.exports;

 return {
  syntax: `name`,
  commands: [`${exports.config.mxCommand || ''}cc`],
  aliases: ['cc', 'connect-connection', 'reconnect-connection'],
  help: [
   `This command connects / reconnects an existing outgoing (server) connection within the current session.`,
  ],
  action: async function({ device, middleware, argstr }) {
   const server = await middleware.selectServer({ argstr });
   if (server.config.disabled) {
    server.config.disabled = false;
    device.session.save();
   }
   server.reconnect();
   device.switchServer(server);
  },
 };
};
