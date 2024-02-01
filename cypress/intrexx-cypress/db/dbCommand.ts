export function dbCommant<T extends any = any>(
  query: string,
  options?: Partial<Cypress.Loggable & Cypress.Timeoutable>
) {
  return cy.task(
    "db",
    { query },
    { log: true, ...options }
  ) as Cypress.Chainable<T>;
}
