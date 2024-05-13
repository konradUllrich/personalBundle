import {
  createPersonal,
  deleteAllPersonalData,
} from "cypress/e2e/Personal/helper/Personal";
import { createArbeitzeitByUserId } from "cypress/e2e/Personal/helper/PersonalArbeitszeit";

import moment from "moment";
import { ampel } from "./helper";
import { getDate } from "../helper/Datum";
import { ZE_T_MONAT } from "cypress/db";

const year = "2025";

describe("Ampel auswahl", () => {
  beforeEach(() => {
    cy.visit("/");
    deleteAllPersonalData();
  });

  it("lower first ", () => {
    const startwert = (40 + 0 / 60 + 0 / 3600) * (false ? -1 : 1);
    createPersonal({
      personalValues: {
        STR_VOLLERNAME: "TESTER",
        L_STARTWERTSTUNDEN: 38,
        L_STARTWERTMINUTEN: 0,
        L_STARTWERTSEKUNDEN: 0,
        L_STARTWERTARBEITSZEITKONTO: startwert * 3600,
        STR_STARTWERTPLUSMINUS: "-",
      },
      userValues: { memberOf: ["System/Benutzer", "Personal benutzen"] },
    }).then(({ user, personal, login }) => {
      cy.wrap({ user, personal, login }).as("user");

      const startSecond = moment("04-15-" + year, "MM-DD-YYYY");
      createArbeitzeitByUserId(
        { userId: user.LID, preset: "39h24m48s" },
        {
          DT_VON: moment([year]).utc().format() as unknown as Date,
          DT_BIS: startSecond
            .subtract(1, "day")
            .utc()
            .format() as unknown as Date,
        }
      );
      createArbeitzeitByUserId(
        { userId: user.LID, preset: "20h" },
        {
          DT_VON: startSecond.utc().format() as unknown as Date,
          DT_BIS: moment("01-01-9999", "MM-DD-YYYY")
            .utc()
            .format() as unknown as Date,
        }
      );
    });
    cy.runWorkflow({
      id: "3B90AE46D592E8AE66F42EF1DF48BA31D3C211CC",
      payload: {
        timerGuid: "4FA377303D988BD8FE0A91F5522AE494AFB13BD0",
        jahrVon: year,
        jahrBis: year,
      },
    });

    cy.db<ZE_T_MONAT[]>("select * from ze_t_monat ORDER BY L_MONAT", {
      retryUntil: ((v) => v.length === 12).toString(),
    }).then((monate) => {
      expect(monate[3].REF_SALDENKONTROLLE).to.eq(ampel.grün);
    });

    getDate("").then((dates) => {
      cy.log(
        "dates",
        dates.reduce((acc, d) => {
          if (d.L_ARBEITSZEITSOLLSEKUNDEN === 0) {
            return acc;
          }
          acc[moment(d.DT_DATUM).format("MM/DD")] = {
            soll: d.L_ARBEITSZEITSOLLSEKUNDEN,
          };
          return acc;
        }, {})
      );
    });

    // cy.get("@user").then((res) => {
    //   //@ts-ignore
    //   cy.login(res.login);
    //   cy.goto("zeiterfassung");
    //   cy.pause();
    // });
  });
  it("higher first ", () => {
    const startwert = (40 + 0 / 60 + 0 / 3600) * (false ? -1 : 1);
    createPersonal({
      personalValues: {
        STR_VOLLERNAME: "TESTER",
        L_STARTWERTSTUNDEN: 38,
        L_STARTWERTMINUTEN: 0,
        L_STARTWERTSEKUNDEN: 0,
        L_STARTWERTARBEITSZEITKONTO: startwert * 3600,
        STR_STARTWERTPLUSMINUS: "-",
      },
      userValues: { memberOf: ["System/Benutzer", "Personal benutzen"] },
    }).then(({ user, personal, login }) => {
      cy.wrap({ user, personal, login }).as("user");

      const startSecond = moment("04-15-" + year, "MM-DD-YYYY");
      createArbeitzeitByUserId(
        { userId: user.LID, preset: "20h" },
        {
          DT_VON: moment([year]).utc().format() as unknown as Date,
          DT_BIS: startSecond
            .subtract(1, "day")
            .utc()
            .format() as unknown as Date,
        }
      );
      createArbeitzeitByUserId(
        { userId: user.LID, preset: "39h24m48s" },
        {
          DT_VON: startSecond.utc().format() as unknown as Date,
          DT_BIS: moment("01-01-9999", "MM-DD-YYYY")
            .utc()
            .format() as unknown as Date,
        }
      );
    });
    cy.runWorkflow({
      id: "3B90AE46D592E8AE66F42EF1DF48BA31D3C211CC",
      payload: {
        timerGuid: "4FA377303D988BD8FE0A91F5522AE494AFB13BD0",
        jahrVon: year,
        jahrBis: year,
      },
    });

    cy.db<ZE_T_MONAT[]>("select * from ze_t_monat ORDER BY L_MONAT", {
      retryUntil: ((v) => v.length === 12).toString(),
    }).then((monate) => {
      expect(monate[3].REF_SALDENKONTROLLE).to.eq(ampel.grün);
    });

    getDate("").then((dates) => {
      cy.log(
        "dates",
        dates.reduce((acc, d) => {
          if (d.L_ARBEITSZEITSOLLSEKUNDEN === 0) {
            return acc;
          }
          acc[moment(d.DT_DATUM).format("MM/DD")] = {
            soll: d.L_ARBEITSZEITSOLLSEKUNDEN,
          };
          return acc;
        }, {})
      );
    });

    // cy.get("@user").then((res) => {
    //   //@ts-ignore
    //   cy.login(res.login);
    //   cy.goto("zeiterfassung");
    //   cy.pause();
    // });
  });
});
