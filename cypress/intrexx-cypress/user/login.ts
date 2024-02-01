import { loginUser } from "../types";
import { createUser } from "./createUser";

const UserNameSelector = "#ID_USERNAME";
const passwordSelector = "#ID_PASSWORD";
const domainSelector = "#ID_LOGINDOMAIN";
const loginSelector = "#ID_LOGIN";

function waitForIntrexxIsReady() {
  return new Cypress.Promise((resolve, reject) => {
    requestIdleCallback(resolve);
  });
}

const defaultUser = {
  name: "Administrator",
  pw: "S3r3n!ty6<6",
};
export const login = (
  user?: loginUser | ReturnType<typeof createUser>,
  options?: { log?: boolean }
) => {
  const log = options?.log || false;
  const _user = { ...defaultUser, ...user };
  cy.visit("/").then(waitForIntrexxIsReady);
  cy.get(UserNameSelector, { log }).type(_user.name, { force: true, log });
  if (_user.pw) {
    cy.get(passwordSelector, { log }).type(_user.pw, { log });
  }
  // if (_user.domain) {
  //   cy.get(domainSelector, { log }).select(_user.domain, { log });
  // }
  return cy
    .get(loginSelector, { log })
    .click({ log })
    .then(() => {
      return _user;
    }) as unknown as Cypress.Chainable<typeof user>;
};
