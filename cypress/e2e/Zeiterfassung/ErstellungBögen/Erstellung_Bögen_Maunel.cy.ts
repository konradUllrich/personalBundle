import {
  createPersonal,
  deleteAllPersonalData,
} from "cypress/e2e/Personal/helper/Personal";
import { getMonth } from "../helper/Monat";
import { runZeiterfassungsWorkflow } from "./helpers/prepareData";
import { goto } from "../helper/goTo";

describe("Zeiterfassungsbögen Erstellen ", () => {
  before(() => {
    cy.visit("/");
    deleteAllPersonalData();
  });
  it("bla", () => {
    cy.visit("/");

    // createPersonal({
    //   personalValues: {
    //     REF_BENUTZER: null,
    //   },
    //   userValues: { memberOf: ["Personal benutzen", "System/Benutzer"] },
    // });
    // createPersonal({
    //   personalValues: {
    //     REF_BENUTZER: null,
    //   },
    //   userValues: { memberOf: ["Personal benutzen", "System/Benutzer"] },
    // });

    createPersonal({
      personalValues: {},
      userValues: { memberOf: ["Personal benutzen", "System/Benutzer"] },
    }).then(({ login }) => {
      cy.login(login);
    });

    runZeiterfassungsWorkflow();

    cy.pause();

    goto("zeiterfassung");
    getMonth().then((res) => {
      cy.log("months", res);
    });
  });
});
