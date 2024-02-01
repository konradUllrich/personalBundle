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
    deleteAllPersonalData();
  });

  it("should see", () => {
    loginAs({ memberOf: ["Personal benutzen"] });
    meinePersonaldatenShould("be.visible");
    einsteunngenShould("not.exist");
    büroleitungVerwaltenShould("not.exist");
    organisationsbaumBearbeitenShould("not.exist");
    personalErfassenShould("not.exist");
  });
});
