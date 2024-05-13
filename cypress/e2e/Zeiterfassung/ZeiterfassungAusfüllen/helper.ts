import { createPersonal } from "cypress/e2e/Personal/helper/Personal";
import { createArbeitzeitByUserId } from "cypress/e2e/Personal/helper/PersonalArbeitszeit";
import moment from "moment";
import { getMonthByUserId } from "../helper/Monat";

export const ampel = {
  grün: "CA5AB392A1AFD1DB5834AAEB162E5D241C2B9266",
  rot: "88807FF037C8316443947FFEF5D25934F5328B72",
  gelb: "45E1D27C1DE2DA8FC3A77AC79616BF6250062338",

  rotMinus: "44D5246F5118FFA87F9E3009A4029F4A1B64A358",
  gelbMinus: "202EF69CA8762C4ECDDBDC0E48371CADEFA12ACD",
};

export const createTestCase = ({
  alias,
  startwert: { hh, mm, ss, negative = false },
  ampel,
  zeiterfassungsPreset = "39h24m48s",
  year,
}: {
  year: string;
  startwert: { hh: number; mm: number; ss: number; negative?: boolean };
  alias: string;
  ampel: string;
  zeiterfassungsPreset?: Parameters<
    typeof createArbeitzeitByUserId
  >["0"]["preset"];
}) => {
  const createData = () => {
    const startWert = (hh + mm / 60 + ss / 3600) * (negative ? -1 : 1);

    createPersonal({
      personalValues: {
        STR_VOLLERNAME: "TESTER",
        L_STARTWERTSTUNDEN: 38,
        L_STARTWERTMINUTEN: 0,
        L_STARTWERTSEKUNDEN: 0,
        L_STARTWERTARBEITSZEITKONTO: startWert * 3600,
        STR_STARTWERTPLUSMINUS: "-",
      },
      userValues: { memberOf: ["System/Benutzer", "Personal benutzen"] },
    }).then(({ user, personal, login }) => {
      cy.wrap({ user, personal, login }).as(alias);
      createArbeitzeitByUserId(
        { userId: user.LID, preset: zeiterfassungsPreset },
        {
          DT_VON: moment([year]).utc().format() as unknown as Date,
          DT_BIS: moment("04-01-9999", "MM-DD-YYYY")
            .utc()
            .format() as unknown as Date,
        }
      );
    });
  };

  const assume = () => {
    cy.get("@" + alias).then((res) => {
      //@ts-ignore
      getMonthByUserId(res.user.LID).then((m) => {
        expect(m[0].REF_SALDENKONTROLLE).to.eq(ampel);
      });
    });
  };
  createData();
  return { assume };
};
