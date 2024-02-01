import moment from "moment";
import { getMonth } from "../helper/Monat";
import { getDate } from "../helper/Datum";

const year = "2025";
const dayCount = moment(year).isLeapYear() ? 366 : 365;

const days = Array.from({ length: dayCount }).map((_i, index) =>
  moment(year).add(index, "day").toISOString()
);

describe("desc", () => {
  it("b", () => {
    cy.visit("/");

    getMonth().then((m) => {
      cy.log("mm", m);
    });

    getDate("ORDER BY DT_DATUM").then((d) => {
      cy.log(
        "d",
        d.map((d, index) => {
          return {
            d: d.DT_DATUM,
            dd: days[index],
            //@ts-ignore
            same: days[index] === d.DT_DATUM,
            s: moment(d.DT_DATUM).isSame(days[index]),
          };
        })
      );
    });

    cy.db("Select * from DSOBJECT").then((res) => {
      cy.log("d", res);
    });
    // cy.log(
    //   "d",
    //   days.map((d) => {
    //     return { d, _d: moment(d).format() };
    //   })
    // );
  });
});
