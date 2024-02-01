import { deleteAllPersonalData } from "../helper/Personal";
import {
  einsteunngenShould,
  büroleitungVerwaltenShould,
  organisationsbaumBearbeitenShould,
  personalErfassenShould,
  meinePersonaldatenShould,
} from "./helper";
import { loginAs } from "./helper";

describe("Personal verwalten:", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  after(() => {
    deleteAllPersonalData();
  });

  it("should see", () => {
    loginAs({ memberOf: ["Personal verwalten"] });
    meinePersonaldatenShould("be.visible");
    einsteunngenShould("be.visible");
    büroleitungVerwaltenShould("be.visible");
    organisationsbaumBearbeitenShould("be.visible");
    personalErfassenShould("be.visible");
  });
});
