import { clearAllUsers } from "cypress/intrexx-cypress/user/createUser";
import {
  deleteAllPersonalData,
  deletePersonal,
} from "./Personal/helper/Personal";

export function retries<
  T extends () => Cypress.Chainable = () => Cypress.Chainable,
>(
  options: {
    cb: T;
    check: (c: ReturnType<T>) => boolean;
    log?: string;
    maxTime?: number;
  },
  timer?: { count?: number; startTime?: number }
) {
  const { cb, check, log, maxTime = 10 } = options;
  const startTime = timer?.startTime ? timer.startTime : Date.now();

  if (!timer?.count && log) cy.log(log);

  return new Promise((resolve, reject) => {
    expect((Date.now() - startTime) / 1000, "time").to.be.lte(
      maxTime,
      "maxtime"
    );
    cb().then((res) => {
      if (check(res)) {
        cy.log("time :", (Date.now() - startTime) / 1000);
        resolve(res);
      } else {
        retries(options, {
          count: timer?.count ? timer.count + 1 : 1,
          startTime,
        });
      }
    });
  });
}

export const clearDatabase = () => {
  clearAllUsers();
  deleteAllPersonalData();
};
