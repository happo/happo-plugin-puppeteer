const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,

  targets: {
    chrome: new RemoteBrowserTarget('chrome', { viewport: '1000x760' }),
  },
  type: 'plain',
  plugins: [require('./')()],
};
