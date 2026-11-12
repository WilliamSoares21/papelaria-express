import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5500",
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(_on, _config) {},
  },
});
