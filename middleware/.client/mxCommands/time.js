module.exports = (main, middleware) => {
 const exports = main.exports;

 return {
  sessionRequired: false,
  syntax: ``,
  commands: [`${exports.config.mxCommand || 'mx'}t`],
  aliases: ['t'],
  help: [
   `Shows your computer's current local time of the day (in 24 hours format).`,
  ],
  action: function({ device }) {
   device.tell(exports.utils.formatTime());
  },
 };
};
