import IX from "../intrexx-cypress";

IX();

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

chai.config.truncateThreshold = 0;
