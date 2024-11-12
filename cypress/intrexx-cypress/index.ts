import { createUser } from "./user/createUser";
import { login as loginFn } from "./user/login";
import { logout } from "./user/logout";
import { runWorkflow } from "./runworkflow";
import { dbCommant } from "./db/dbCommand";
import { tables } from "dbschema";
import { goto } from "./goto";

import type { DB2 } from "output";

export default () => {
  Cypress.Commands.add("createUser", createUser);
  Cypress.Commands.add("login", loginFn);
  Cypress.Commands.add("logout", logout);
  Cypress.Commands.add("runWorkflow", runWorkflow);
  Cypress.Commands.add("db", dbCommant);
  Cypress.Commands.add("goto", goto);
};

declare global {
  namespace Cypress {
    interface Chainable {
      db: typeof dbCommant;
      //@ts-ignore
      login: typeof loginFn;
      logout: typeof logout;
      createUser: typeof createUser;
      runWorkflow: typeof runWorkflow;
      goto: typeof goto;
    }
  }
}

type tableType = typeof tables;
declare global {
  type DB = { [K in keyof tableType]: tableType[K]["$input"] };
}

declare global {
  type DBB = DB2;
  type DBBB = { [K in keyof DB2]: Partial<DB2[K]> };
}
