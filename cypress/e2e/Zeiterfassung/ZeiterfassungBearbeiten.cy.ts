import { goto } from "./helper/goTo";
import {
  createPersonal,
  deleteAllPersonalData,
} from "../Personal/helper/Personal";
import { runZeiterfassungsWorkflow } from "./ErstellungBögen/helpers/prepareData";
import { createArbeitzeitByUserId } from "../Personal/helper/PersonalArbeitszeit";
import { getTable } from "cypress/intrexx-cypress/tabe/getTable";
import { ZE_T_MONAT } from "cypress/db";
import { createUsers } from "cypress/intrexx-cypress/user/createUser";

describe("template spec", () => {
  before(() => {
    cy.visit("/");
    deleteAllPersonalData();
  });

  it("Zeiterfassung bearbeiten", () => {
    createUsers({ count: 10 });
    createPersonal({
      userValues: { memberOf: ["System/Benutzer", "Personal benutzen"] },
      // personalValues: { REF_ART: 2 },
    }).then(({ personal, login, user }) => {
      cy.log("login", login);
      createArbeitzeitByUserId({ userId: user.LID, preset: "40h/20h" });
      cy.login(login);
    });

    runZeiterfassungsWorkflow();
    cy.db<ZE_T_MONAT[]>("select * from ze_t_monat ORDER BY L_MONAT", {
      retryUntil: ((v) => v.length === 12).toString(),
    });

    goto("zeiterfassung");
    cy.wait(1000);
    // cy.get("td:contains(Januar)").click({ force: true });

    cy.pause();

    getTable("#ID_tablecontrolEC647E21").then(({ rows, rowsElements }) => {
      //cy.wrap(rowsElements[0][0]).should("contain", "Januar").click();
      // cy.wrap(rowsElements).each((rowsElement) => {
      //   cy.wrap(rowsElement[0]).as("btn");
      //   cy.wait(2000);
      //   cy.get("@btn").click();
      //   goto("zeiterfassung");
      //   cy.wait(2000);
      // });
    });

    // cy.get("td:contains(04/01/2024)").click({ force: true });
    // cy.get("select[title='Buchungsart']").select("Dienstgebäude");
    // cy.get("input[title='von']").clear().type("8").blur();
    // cy.get("input[title='bis']").clear().type("14").blur();
    // cy.get("input[title='Speichern']").click();
    //cy.pause();
  });
});
