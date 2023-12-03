const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.opovo.com.br/',
    env: {
      hideCredentials: true,
      requestMode: true,
      snapshotOnly : true 
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
  chromeWebSecurity: false,
});