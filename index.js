const PuppeteerDomProvider = require('./PuppeteerDomProvider');

module.exports = function happoPluginPuppeteer() {
  return {
    DomProvider: PuppeteerDomProvider,
  }
};
