import { faker } from "@faker-js/faker";
import { users } from "../../fixtures/user";
import { DSUSER } from "cypress/db";

const USER_MANGAGEMENT_GUID = "7BFF486B0FD327DA82F905C365624870BF48C95B";

export const createUsers = ({ count = 2 }: { count: number }) => {
  const usersParameters: Parameters<typeof createUser>[0][] = Array.from({
    length: count,
  }).map(() => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    pw: "cypressdoesintrexx",
    memberOf: ["Administrator", "Personal bearbeiten"],
  }));

  const created: ReturnType<typeof createUser>[] =
    usersParameters.map(createUser);
};

export function createUser({
  firstName = faker.person.firstName().replaceAll("'", ""),
  lastName = faker.person.lastName().replaceAll("'", ""),
  memberOf = [],
}: {
  firstName?: string;
  lastName?: string;
  memberOf?: (keyof typeof users.groups)[];
}): Cypress.Chainable<{
  user: DB["dsuser"];
  login: { name: string; pw: string };
}> {
  const _firstName = firstName.toLowerCase();
  const _lastName = lastName.toLowerCase();

  cy.runWorkflow({
    id: USER_MANGAGEMENT_GUID,
    name: "User Create",
    payload: {
      firstName: _firstName,
      lastName: _lastName,
      pw: "cypressdoesintrexx",
      memberOf: memberOf.map((key) => users.groups[key]),
    },
  });

  return cy
    .db<DB["dsuser"]>(
      `SELECT * FROM dsuser WHERE strlogin = 'fake-${_firstName}.${_lastName}'`
    )
    .then((u) => ({
      user: u[0] as DB["dsuser"],
      login: {
        name: `fake-${_firstName}.${_lastName}`,
        pw: "cypressdoesintrexx",
      },
    }));
}

export const clearAllUsers = () => {
  cy.runWorkflow({
    id: USER_MANGAGEMENT_GUID,
    name: "Clear Fake Users",
    payload: {
      erase: "all",
    },
  });
  cy.db(`DELETE FROM DSUSER WHERE STRLOGIN LIKE 'fake%'`);
};
