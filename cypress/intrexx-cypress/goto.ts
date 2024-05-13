import { pages } from "../fixtures/user";

export const goto = (page: keyof typeof pages) => {
  const log = false;
  cy.intercept("/path/app/**", { log }).as("app");
  cy.intercept("/script/dist-legacy/**", { log }).as("script");
  cy.log("goto", page);
  cy.visit(pages[page].base, { log });

  cy.window({ log })
    .its("promises.length", { log })
    .then((r) => {
      cy.wait(Array(r).fill("@app"), { log });
    });

  cy.wait(1000);
  // if (pages[page].action) {
  //   cy.wrap(pages[page].action, { log }).each((s) => {
  //     cy.wrap(s, { log })
  //       .its("selector", { log })
  //       .then((s) => {
  //         cy.get(s).click({ force: true }).wait(1000);
  //         //cy.wait(2000);
  //       });
  //   });
  // }
};
