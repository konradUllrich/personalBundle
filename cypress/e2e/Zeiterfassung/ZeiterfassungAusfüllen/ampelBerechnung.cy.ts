import {
  createPersonal,
  deleteAllPersonalData,
  getPersonal,
} from "cypress/e2e/Personal/helper/Personal";
import { createArbeitzeitByUserId } from "cypress/e2e/Personal/helper/PersonalArbeitszeit";

import moment from "moment";
import { getMonthByUserId } from "../helper/Monat";
import { ampel, createTestCase } from "./helper";
import { getDate } from "../helper/Datum";

const year = "2025";

describe("Ampel auswahl", () => {
  beforeEach(() => {
    cy.visit("/");
    deleteAllPersonalData();
  });

  it("39h24m48s", () => {
    cy.visit("/");
    const beforeYellowPlus = createTestCase({
      year,
      startwert: { hh: 49, mm: 14, ss: 59 },
      alias: "beforeYellow",
      ampel: ampel.grün,
    });
    const yellowPlus = createTestCase({
      year,
      startwert: { hh: 49, mm: 15, ss: 0 },
      alias: "yellowPlus",
      ampel: ampel.gelb,
    });
    const beforeRedPlus = createTestCase({
      year,
      startwert: { hh: 78, mm: 47, ss: 59 },
      alias: "beforeRed",
      ampel: ampel.gelb,
    });
    const redPlus = createTestCase({
      year,
      startwert: { hh: 78, mm: 48, ss: 0 },
      alias: "redPlus",
      ampel: ampel.rot,
    });
    const beforeYellowMinus = createTestCase({
      year,
      startwert: { hh: 11, mm: 49, ss: 11, negative: true },
      alias: "beforeYellowMinus",
      ampel: ampel.grün,
    });
    const yellowMinus = createTestCase({
      year,
      startwert: { hh: 12, mm: 49, ss: 12, negative: true },
      alias: "yellowMinus",
      ampel: ampel.gelbMinus,
    });
    const beforeRedMinus = createTestCase({
      year,
      startwert: { hh: 23, mm: 38, ss: 23, negative: true },
      alias: "beforeRedMinus",
      ampel: ampel.gelbMinus,
    });
    const redMinus = createTestCase({
      year,
      startwert: { hh: 23, mm: 38, ss: 24, negative: true },
      alias: "redMinus",
      ampel: ampel.rotMinus,
    });

    cy.runWorkflow({
      id: "3B90AE46D592E8AE66F42EF1DF48BA31D3C211CC",
      payload: {
        timerGuid: "4FA377303D988BD8FE0A91F5522AE494AFB13BD0",
        jahrVon: year,
        jahrBis: year,
      },
    });

    cy.db<DB["ze_t_monat"][]>("select * from ze_t_monat", {
      retryUntil: ((v) => v.length > 95).toString(),
    });

    beforeYellowPlus.assume();
    yellowPlus.assume();
    beforeRedPlus.assume();
    redPlus.assume();
    beforeYellowMinus.assume();
    yellowMinus.assume();
    beforeRedMinus.assume();
    redMinus.assume();

    // cy.get("@redMinus").then((res) => {
    //   //@ts-ignore
    //   cy.login(res.login);
    //   cy.goto("zeiterfassung");
    //   cy.pause();
    // });
  });

  it("40h", () => {
    cy.visit("/");
    const beforeYellowPlus = createTestCase({
      year,
      startwert: { hh: 49, mm: 59, ss: 59 },
      alias: "beforeYellow",
      ampel: ampel.grün,
      zeiterfassungsPreset: "40h",
    });
    const yellowPlus = createTestCase({
      year,
      startwert: { hh: 50, mm: 0, ss: 0 },
      alias: "yellowPlus",
      ampel: ampel.gelb,
      zeiterfassungsPreset: "40h",
    });
    const beforeRedPlus = createTestCase({
      year,
      startwert: { hh: 79, mm: 59, ss: 59 },
      alias: "beforeRed",
      ampel: ampel.gelb,
      zeiterfassungsPreset: "40h",
    });
    const redPlus = createTestCase({
      year,
      startwert: { hh: 80, mm: 0, ss: 0 },
      alias: "redPlus",
      ampel: ampel.rot,
      zeiterfassungsPreset: "40h",
    });
    const beforeYellowMinus = createTestCase({
      year,
      startwert: { hh: 11, mm: 59, ss: 59, negative: true },
      alias: "beforeYellowMinus",
      ampel: ampel.grün,
      zeiterfassungsPreset: "40h",
    });
    const yellowMinus = createTestCase({
      year,
      startwert: { hh: 12, mm: 0, ss: 0, negative: true },
      alias: "yellowMinus",
      ampel: ampel.gelbMinus,
      zeiterfassungsPreset: "40h",
    });
    const beforeRedMinus = createTestCase({
      year,
      startwert: { hh: 23, mm: 59, ss: 59, negative: true },
      alias: "beforeRedMinus",
      ampel: ampel.gelbMinus,
      zeiterfassungsPreset: "40h",
    });
    const redMinus = createTestCase({
      year,
      startwert: { hh: 24, mm: 0, ss: 0, negative: true },
      alias: "redMinus",
      ampel: ampel.rotMinus,
      zeiterfassungsPreset: "40h",
    });

    cy.runWorkflow({
      id: "3B90AE46D592E8AE66F42EF1DF48BA31D3C211CC",
      payload: {
        timerGuid: "4FA377303D988BD8FE0A91F5522AE494AFB13BD0",
        jahrVon: year,
        jahrBis: year,
      },
    });

    cy.db<DB["ze_t_monat"][]>("select * from ze_t_monat", {
      retryUntil: ((v) => v.length > 95).toString(),
    });

    beforeYellowPlus.assume();
    yellowPlus.assume();
    beforeRedPlus.assume();
    redPlus.assume();
    beforeYellowMinus.assume();
    yellowMinus.assume();
    beforeRedMinus.assume();
    redMinus.assume();

    // cy.get("@beforeYellowMinus").then((res) => {
    //   //@ts-ignore
    //   cy.login(res.login);
    //   cy.goto("zeiterfassung");
    // });

    //cy.pause();
    // });
  });
  it("20h", () => {
    cy.visit("/");
    const beforeYellowPlus = createTestCase({
      year,
      startwert: { hh: 24, mm: 59, ss: 59 },
      alias: "beforeYellow",
      ampel: ampel.grün,
      zeiterfassungsPreset: "20h",
    });
    const yellowPlus = createTestCase({
      year,
      startwert: { hh: 25, mm: 0, ss: 0 },
      alias: "yellowPlus",
      ampel: ampel.gelb,
      zeiterfassungsPreset: "20h",
    });
    const beforeRedPlus = createTestCase({
      year,
      startwert: { hh: 39, mm: 59, ss: 59 },
      alias: "beforeRed",
      ampel: ampel.gelb,
      zeiterfassungsPreset: "20h",
    });
    const redPlus = createTestCase({
      year,
      startwert: { hh: 40, mm: 0, ss: 0 },
      alias: "redPlus",
      ampel: ampel.rot,
      zeiterfassungsPreset: "20h",
    });
    const beforeYellowMinus = createTestCase({
      year,
      startwert: { hh: 5, mm: 59, ss: 59, negative: true },
      alias: "beforeYellowMinus",
      ampel: ampel.grün,
      zeiterfassungsPreset: "20h",
    });
    const yellowMinus = createTestCase({
      year,
      startwert: { hh: 6, mm: 0, ss: 0, negative: true },
      alias: "yellowMinus",
      ampel: ampel.gelbMinus,
      zeiterfassungsPreset: "20h",
    });
    const beforeRedMinus = createTestCase({
      year,
      startwert: { hh: 11, mm: 59, ss: 59, negative: true },
      alias: "beforeRedMinus",
      ampel: ampel.gelbMinus,
      zeiterfassungsPreset: "20h",
    });
    const redMinus = createTestCase({
      year,
      startwert: { hh: 12, mm: 0, ss: 0, negative: true },
      alias: "redMinus",
      ampel: ampel.rotMinus,
      zeiterfassungsPreset: "20h",
    });

    cy.runWorkflow({
      id: "3B90AE46D592E8AE66F42EF1DF48BA31D3C211CC",
      payload: {
        timerGuid: "4FA377303D988BD8FE0A91F5522AE494AFB13BD0",
        jahrVon: year,
        jahrBis: year,
      },
    });

    cy.db<DB["ze_t_monat"][]>("select * from ze_t_monat", {
      retryUntil: ((v) => v.length > 95).toString(),
    });

    beforeYellowPlus.assume();
    yellowPlus.assume();
    beforeRedPlus.assume();
    redPlus.assume();
    beforeYellowMinus.assume();
    yellowMinus.assume();
    beforeRedMinus.assume();
    redMinus.assume();

    // cy.get("@beforeYellowMinus").then((res) => {
    //   //@ts-ignore
    //   cy.login(res.login);
    //   cy.goto("zeiterfassung");
    // });

    //cy.pause();
    // });
  });
});
