import { deleteAllPersonalData } from "../helper/Personal";
import {
  einsteunngenShould,
  büroleitungVerwaltenShould,
  organisationsbaumBearbeitenShould,
  personalErfassenShould,
  meinePersonaldatenShould,
} from "./helper";
import { loginAs } from "./helper";

describe("Personal benutzen:", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  after(() => {
    // deleteAllPersonalData();
  });

  it("should see", () => {
    cy.log("bla", "ffff");
    loginAs({ memberOf: ["Personal benutzen"] });

    cy.db("select * from per_t_personal").then((res) => {
      cy.log(res);
    });
    //
    // meinePersonaldatenShould("be.visible");
    // einsteunngenShould("not.exist");
    // büroleitungVerwaltenShould("not.exist");
    // organisationsbaumBearbeitenShould("not.exist");
    // personalErfassenShould("not.exist");
  });
});
