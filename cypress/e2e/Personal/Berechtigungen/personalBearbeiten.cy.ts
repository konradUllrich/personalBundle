import { deleteAllPersonalData } from "../helper/Personal";
import {
  einsteunngenShould,
  büroleitungVerwaltenShould,
  organisationsbaumBearbeitenShould,
  personalErfassenShould,
  meinePersonaldatenShould,
} from "./helper";
import { loginAs } from "./helper";

describe("Personal bearbeiten", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  after(() => {
    deleteAllPersonalData();
  });

  it("should see", () => {
    loginAs({ memberOf: ["Personal bearbeiten"] });
    meinePersonaldatenShould("be.visible");
    einsteunngenShould("not.exist");
    büroleitungVerwaltenShould("be.visible");
    organisationsbaumBearbeitenShould("not.exist");
    personalErfassenShould("be.visible");
  });
});
