const puppeteer = require('puppeteer');

module.exports = class PuppeteerDomProvider {
  constructor({ width, height, webpackBundle }) {
    this.viewport = { width, height };
    this.webpackBundle = webpackBundle;
  }

  init() {
    return puppeteer
      .launch()
      .then(browser => {
        this.browser = browser;
      })
      .then(() => this.browser.newPage())
      .then(page => {
        this.page = page;
        this.page.on('console', msg => console.log(msg.text()));
      })
      .then(() => this.page.setViewport(this.viewport))
      .then(() => this.page.addScriptTag({ path: this.webpackBundle }));
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
};
