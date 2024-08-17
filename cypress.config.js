const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    supportFile: false,
    video: false,
    screenshotsFolder: 'cypress/screenshots',
    defaultCommandTimeout: 8000,
  },
});
