import { test, expect } from "tests/setup/db";
import Personal from "tests/setup/Ix/dataProvider/Personalx";
import Zeiterfassung from "tests/setup/Ix/dataProvider/Zeiterfassung";
import { Eingabeseite } from "./Eingabeseite";
import { Page } from "@playwright/test";
import Ix from "tests/setup/Ix/ix";

test.beforeAll(async ({ ix }) => {
  await ix.clear();
});

const prepareTestCase = async ({
  beschäftignunsart,
  arbeitszeitenpreset,
  ix,
  page,
  date,
}: {
  beschäftignunsart?: number;
  arbeitszeitenpreset?: Parameters<typeof _personal.createArbeitszeiten>[1];
  date?: string;
  ix: Ix;
  page: Page;
}) => {
  const _personal = new Personal();
  const _zeiterfassung = new Zeiterfassung();
  const personalData = await _personal.createPersonal({
    ref_art: beschäftignunsart,
  });
  await _personal.createArbeitszeiten(
    personalData.personal.strid,
    arbeitszeitenpreset
  );
  await _zeiterfassung.createZeiterfassungsBögen(personalData.user.data.lid);
  await ix.login(personalData.user.loginvalues);
  const eingabeseite = new Eingabeseite(page);
  await eingabeseite.gotoEingabeseite(date);
  return { eingabeseite, personalData };
};

test("azv Tag Vollzeit", async ({ page, ix }) => {
  const { eingabeseite } = await prepareTestCase({
    arbeitszeitenpreset: "40h",
    beschäftignunsart: 1,
    page,
    ix,
  });
  await eingabeseite.setAnwesenheit({ buchungsart: "AZV-tag" });
  await eingabeseite.expectAnwesenheit({
    item: 0,
    dauer: null,
    inputEnabled: false,
  });
  await eingabeseite.expectSummary({
    ZF_IST: "08:00:00",
    ZF_SALDO: "00:00:00",
    ZF_PAUSE: "00:00:00",
    ZF_PAUSE_DT: "",
  });
});

test("azv Tag Teilzeit", async ({ page, ix }) => {
  const { eingabeseite } = await prepareTestCase({
    arbeitszeitenpreset: "teilzeit",
    beschäftignunsart: 1,
    page,
    ix,
  });
  await eingabeseite.setAnwesenheit({ buchungsart: "AZV-tag" });
  await eingabeseite.expectAnwesenheit({
    item: 0,
    dauer: null,
    inputEnabled: false,
  });
  await eingabeseite.expectSummary({
    ZF_IST: "08:00:00",
    ZF_SALDO: "-01:52:00",
    ZF_PAUSE: "00:00:00",
    ZF_PAUSE_DT: "",
  });

  await eingabeseite.cancle();
  await eingabeseite.gotoEingabeseite("08.01.2026");
  await eingabeseite.setAnwesenheit({ buchungsart: "AZV-tag" });

  await eingabeseite.expectSummary({
    ZF_IST: "02:40:00",
    ZF_SALDO: "00:00:00",
    ZF_PAUSE: "00:00:00",
    ZF_PAUSE_DT: "",
  });
});
