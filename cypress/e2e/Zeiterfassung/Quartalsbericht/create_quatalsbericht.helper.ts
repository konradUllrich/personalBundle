import { createMany } from "cypress/support/create";
import { monat } from "../helper/Monat";
import findkey from "lodash/findKey";
import { getQuartalberichtByYear } from "../helper/Quartalsberich";
import { createPersonal } from "cypress/e2e/Personal/helper/Personal";

const defaultJahr = 2015;
const defaultQuartal = 4;

const _ampel = {
  rotDefizit: "44D5246F5118FFA87F9E3009A4029F4A1B64A358",
  gelbDefizit: "202EF69CA8762C4ECDDBDC0E48371CADEFA12ACD",
  gelb: "45E1D27C1DE2DA8FC3A77AC79616BF6250062338",
  rot: "88807FF037C8316443947FFEF5D25934F5328B72",
  grün: "CA5AB392A1AFD1DB5834AAEB162E5D241C2B9266",
};

export const createMonth = ({
  hours,
  jahr = defaultJahr,
  quartal = defaultQuartal,
}: {
  hours: [number, number, number];
  jahr?: number;
  quartal?: number;
}) => {
  return createPersonal({ personalValues: {} }).then(({ user, personal }) => {
    createMany({
      table: "ZE_T_MONAT",
      count: 3,
      items: monat,
      values: {
        REF_BENUTZER: user.LID,
        REF_PERSONAL: personal.STRID,
        L_JAHR: jahr,
        L_MONAT: (_faker, _values, index) => index + ((quartal - 1) * 3 + 1),
        L_ZEITSALDOSEKUNDEN: (_faker, _values, index) => hours[index] * 3600,
        REF_FREIGABESTATUS: "94B68B45649FA2C2AE9C5E492775A799605CCA62",
      },
    }).up();
  });
};

export const check = ({
  created,
  ampel,
  jahr = defaultJahr,
  quartal = defaultQuartal,
  runWorkflow = true,
  recreatePreviousQuartal,
}: {
  created: boolean;
  ampel?: keyof typeof _ampel;
  jahr?: number;
  quartal?: number;
  runWorkflow?: boolean;
  recreatePreviousQuartal?: "yes" | "no";
}) => {
  if (runWorkflow) {
    cy.runWorkflow({
      id: "9A41B0DEBDCA62066A3BAFC45C1E268F8EBE2CBD",
      payload: {
        quartal,
        jahr,
        recreatePreviousQuartal,
      },
    });
  }

  getQuartalberichtByYear(jahr).then((res) => {
    assert.equal(res.length, created ? 1 : 0, "Erzeugte Berichte:");
    if (created) {
      const result = res[0];
      assert.equal(result.STR_MONAT1, monat.STR_ZEITUEBERTRAG, "Monat 1");
      assert.equal(result.STR_MONAT1, monat.STR_ZEITUEBERTRAG, "Monat 2");
      assert.equal(result.STR_MONAT1, monat.STR_ZEITUEBERTRAG, "Monat 3");
      assert.equal(result.L_JAHR, jahr, "Jahr");
      assert.equal(
        result.STR_QUARTAL,
        `${quartal}. Quartal ${jahr}`,
        "Quartal"
      );
    }
    if (ampel) {
      const foundAmpel = findkey(
        _ampel,
        (o) => o === res[0]?.REF_SALDENKONTROLLE
      );
      assert.equal(ampel, foundAmpel, " Ampel");
    }
  });
};
