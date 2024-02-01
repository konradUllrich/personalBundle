import { clearDatabase } from "../../helper";
import { check } from "./einrichten_Ldap.helper";

const ORGAEBENE0_Landesfinanzservice =
  "AA6FEB24F018AF0F422FAD49C73023466DC6FC7B"; // start with  'LHK',"HKR","LFS"
const ORGAEBENE0_Senfin = "C9AAA71D1D9A6D4B6D65481D96AEDB97D24788FC";

describe("Personal Import", () => {
  before(() => {
    cy.visit("/");
    clearDatabase();
  });
  beforeEach(() => {
    cy.visit("/");
  });
  after(() => {
    cy.visit("/");
    clearDatabase();
  });
  it("Position Code LHK ,HKR ,LFS should result in Orgaebene0 = Landesfinanzservice", () => {
    check(
      { STRPOSCODE: "LHK s" },
      { STR_ORGAEBENE0: ORGAEBENE0_Landesfinanzservice }
    );
    check(
      { STRPOSCODE: "HKR s" },
      { STR_ORGAEBENE0: ORGAEBENE0_Landesfinanzservice }
    );
    check(
      { STRPOSCODE: "LFS s" },
      { STR_ORGAEBENE0: ORGAEBENE0_Landesfinanzservice }
    );
  });
  it("Position Code other than LHK ,HKR ,LFS should result in Orgaebene0 = Senfin", () => {
    const stellenzeichen = "MOCK";
    check(
      { STRPOSCODE: stellenzeichen },
      { STR_ORGAEBENE0: ORGAEBENE0_Senfin, STR_STELLENZEICHEN: stellenzeichen }
    );
  });
});
