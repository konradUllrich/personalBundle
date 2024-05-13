describe("test db", () => {
  before(() => {});
  after(() => {
    //down();
  });

  it("test db", () => {
    cy.visit("/");
    // cy.createUser({ memberOf: ["Administrator"] })
    //   .login()
    //   .then((res) => {
    //     cy.log("user", res);
    //   });

    cy.db<DB["dsuser"][]>("SELECT * FROM DSUSER", {
      retryUntil: ((val) => val.length > 49).toString(),
      log: true,
    }).then((res) => cy.log("fax", res));
  });
});
