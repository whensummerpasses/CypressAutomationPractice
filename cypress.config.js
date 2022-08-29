const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mu1km3',
  reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
    
  },
  
  defaultCommandTimeout: 8000
  
});
