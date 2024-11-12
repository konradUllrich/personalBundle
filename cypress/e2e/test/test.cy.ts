import {
  createPersonal,
  deleteAllPersonalData,
} from "../Personal/helper/Personal";
import { createArbeitzeitByUserId } from "../Personal/helper/PersonalArbeitszeit";
import { runZeiterfassungsWorkflow } from "../Zeiterfassung/ErstellungBögen/helpers/prepareData";

const open = () => {
  cy.contains("Zeiterfassung").click({ force: true });
  cy.wait(2000);
  cy.contains("Januar").click({ force: true });
  cy.wait(2000);
  cy.contains("06.01.2025").click({ force: true });
};

describe("Test", () => {
  beforeEach(() => {
    cy.visit("/");
    // deleteAllPersonalData();
  });
  after(() => {});

  it("should see", () => {
    // createPersonal({
    //   userValues: {
    //     memberOf: [
    //       "Personal bearbeiten",
    //       "Personal benutzen",
    //       "Personal verwalten",
    //       "System/Benutzer",
    //     ],
    //   },
    // }).then((r) => {
    //   cy.log("u", r);
    //   createArbeitzeitByUserId({ userId: r.user.lid });
    //   runZeiterfassungsWorkflow();

    // });
    cy.login({ name: "fake-veda.walter", pw: "cypressdoesintrexx" });
    open();
    cy.wait(1000);
    cy.get(`input[name='ANW_VON']`).type("08:00:00");
    cy.get(`input[name='ANW_BIS']`).type("18:00:00");
    cy.get(`input[name='ANW_DAUER']`).should("have.value", "10:00:00");
    cy.get(`input[name='ANW_SEKUNDEN']`).should("have.value", 36000);
    cy.get(`input[name='ZF_SOLL']`).should("have.value", "08:00:00");
    cy.get(`input[name='ZF_IST']`).should("have.value", "10:00:00");
    cy.get(`input[name='ZF_PAUSE_DT']`).should("have.value", "00:00:00");
    cy.get(`input[name='ZF_SALDO']`).should("have.value", "02:00:00");
    cy.get(`input[name='ANW_STANDARD']`).should("have.value", "16:30:00");
    cy.pause();

    // cy.db<DB["ze_t_monat"]>("SELECT * FROM dsuser").then((r) => {
    //   cy.log("u", r);
    // });
  });
});
