const PuppeteerDomProvider = require('./PuppeteerDomProvider');

module.exports = function happoPluginPuppeteer({ launchOptions = {} } = {}) {
  return {
    DomProvider: PuppeteerDomProvider.bind(PuppeteerDomProvider, { launchOptions }),
  }
};
