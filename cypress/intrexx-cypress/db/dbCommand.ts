export function dbCommant<T extends any = any>(
  query: string,
  options?: Partial<Cypress.Loggable & Cypress.Timeoutable> & {
    retryUntil?: string;
  }
) {
  return cy.task(
    "db",
    { query, options },
    { log: false, ...options }
  ) as Cypress.Chainable<T>;
}
