import { getFeiertage } from "./helper";
import moment from "moment-feiertage";
import { FT_T_FEIERTAGE } from "../../db";

describe("createFeiertage", () => {
  const self: { feiertage: FT_T_FEIERTAGE[] } = { feiertage: [] };

  before(() => {
    getFeiertage().then((feiertage) => {
      self.feiertage = feiertage;
    });
  });

  it("should be correct", () => {
    cy.log("f", self.feiertage);

    self.feiertage
      .filter(
        (ft) =>
          !["Silvester", "Internationaler Frauentag", "Heiligabend"].includes(
            ft.STR_FEIERTAG
          )
      )
      .forEach((ft) => {
        console.log({
          date: moment(ft.DT_DATUM).format("DD-MM-yyyy"),
          is: moment(ft.DT_DATUM).isHoliday(),
          ft: ft.STR_FEIERTAG,
          info: moment(ft.DT_DATUM).isHoliday([]),
        });
      });

    cy.log("fe", moment.getHolidaysByYear(2000));
  });
});
