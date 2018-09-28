const puppeteer = require('puppeteer');

module.exports = class PuppeteerDomProvider {
  constructor({ width, height, webpackBundle }) {
    this.viewport = { width, height };
    this.webpackBundle = webpackBundle;
  }

  async init() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
    this.page.on('console', msg => console.log(msg.text()));
    await this.page.setViewport(this.viewport);
    await this.page.addScriptTag({ path: this.webpackBundle });
  }

  next() {
    return this.page.evaluate('window.happoProcessor.next()');
  }

  processCurrent() {
    return this.page.evaluate('window.happoProcessor.processCurrent()');
  }

  extractCSS() {
    return this.page.evaluate('window.happoProcessor.extractCSS()');
  }

  close() {
    return this.browser.close();
  }
}
