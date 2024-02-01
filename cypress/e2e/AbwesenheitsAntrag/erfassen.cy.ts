import { createPersonal } from "../Personal/helper/Personal";
import { clearDatabase } from "../helper";

describe("erfassung Abwesenheitsantrag", () => {
  let userLogin;
  before(() => {
    cy.visit("/");
    clearDatabase();
    createPersonal({
      personalValues: {},
      userValues: { memberOf: ["System/Benutzer"] },
    }).then(({ login }) => {
      userLogin = login;
    });
  });

  it("finds Abwesenheitsantrag", () => {
    cy.visit("/");
    cy.login(userLogin);
    cy.contains("Abwesenheitsantrag").click({ force: true });
  });

  // it("Abwesenheitsantrag erfassen", () => {
  //   cy.visit("/");
  //   cy.login(userLogin);
  //   cy.wait(1000);
  //   cy.contains("Abwesenheitsantrag erfassen").click();
  //   cy.intercept(/urlaubstage_berechnen.groovy/, { result: 1 }).as("groovy");
  //   cy.get('input[title="von"]').type("06/10/2023");
  //   cy.get('input[title="bis"]').type("07/10/2023");
  //   cy.get('select[title="Abwesenheitsart"]').select("Jahresurlaub");
  //   cy.get('input[title="Stellvertreter/in"]').type("a");
  //   cy.contains("Anne Bieber").click();
  //   cy.get('input[title="Vorgesetzte/r"]').type("a");
  //   cy.contains("Maria").click();
  //   cy.get('textarea[name="textareacontrol3A5A4A51"]').type(
  //     "Ich muss mal raus"
  //   );
  //   cy.get('input[title="Speichern"]').click();
  //   cy.get('input[title="Abbrechen"]').click();

  //   cy.get(".guid-B1D269ECCBCAE378F3DEFC42923752B13C6B906F")
  //     .children()
  //     .contains("06/10/2023");

  //   cy.contains("Administration").click();
  // });
});

describe("test", () => {
  it("", () => {});
});
