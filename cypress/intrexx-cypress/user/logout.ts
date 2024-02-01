export const logout = () => {
  cy.contains("Abmelden").click();
  cy.get("#ID_LOGOUT").click();
};
