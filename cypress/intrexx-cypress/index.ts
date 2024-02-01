import { createUser } from "./user/createUser";
import { login as __login } from "./user/login";
import { logout } from "./user/logout";
import { runWorkflow } from "./runworkflow";
import { dbCommant } from "./db/dbCommand";
import { tables } from "dbschema";

export default () => {
  Cypress.Commands.add("createUser", createUser);
  Cypress.Commands.add("login", __login);
  Cypress.Commands.add("logout", logout);
  Cypress.Commands.add("runWorkflow", runWorkflow);
  Cypress.Commands.add("db", dbCommant);
};

declare global {
  namespace Cypress {
    interface Chainable {
      db: typeof dbCommant;
      login: typeof __login;
      logout: typeof logout;
      createUser: typeof createUser;
      runWorkflow: typeof runWorkflow;
    }
  }
}

type tableType = typeof tables;
declare global {
  type DB = { [K in keyof tableType]: tableType[K]["$input"] };
}
