type zeiterfassung = ["zeiterfassung"];
type personal = ["personal"];

type all = zeiterfassung | personal;

export const goto = (...props: all) => {
  if (props[0] === "zeiterfassung") {
    cy.get("a")
      .contains(/\bZeiterfassung\b/)
      .click({ force: true });
  }

  if (props[0] === "personal") {
    cy.get("a")
      .contains(/\bPersonal\b/)
      .click({ force: true });
  }
};
