const puppeteer = require('puppeteer');

module.exports = class PuppeteerDomProvider {
  constructor({ launchOptions }, { width, height, webpackBundle }) {
    this.viewport = { width, height };
    this.webpackBundle = webpackBundle;
    this.launchOptions = launchOptions;
  }

  init({ targetName } = {}) {
    return puppeteer
      .launch(this.launchOptions)
      .then(browser => {
        this.browser = browser;
      })
      .then(() => this.browser.newPage())
      .then(page => {
        this.page = page;
        this.page.on('console', msg => console.log(msg.text()));
      })
      .then(() => this.page.setViewport(this.viewport))
      .then(() => this.page.addScriptTag({ path: this.webpackBundle }))
      .then(() =>
        this.page.evaluate(
          `window.happoProcessor.init({ targetName: "${targetName}" })`,
        ),
      );
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
