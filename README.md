# happo-plugin-puppeteer

A Happo plugin that will replace the default JSDOM pre-rendering with a
Puppeteer (which uses Chrome). This plugin can come in handy if you for
instance need proper DOM measurements in your Happo examples.

## Usage

Make sure to first install the plugin:

```sh
npm install --save-dev happo-plugin-puppeteer
```

Then, add this to your plugins section of your `.happo.js` config file:

```js
const happoPluginPuppeteer = require('happo-plugin-puppeteer');

module.exports = {
  plugins: [
    happoPluginPuppeteer(),
  ],
}
```
