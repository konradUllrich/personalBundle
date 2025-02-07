import { test, expect } from "tests/setup/db";
import { Eingabeseite } from "./Eingabeseite";

import {
  nope,
  beamte,
  arbeitnehmer,
  arbeitnehmerMinderjährig,
  praktikanten,
} from "./sollMinusIst";
import TestBuilder from "./Helper/TestBuilder";
import { ix } from "tests/setup/Ix/ix2";

// let eingabeseite: Eingabeseite;
let preparedCases: (Awaited<
  ReturnType<typeof Eingabeseite.prepareCases>
>[number] &
  casesType)[] = [];

type casesType = Parameters<typeof Eingabeseite.prepareCases>[0][number] & {
  sollMinusIst?: Parameters<TestBuilder["build"]>[0];
  azvTag?: Parameters<TestBuilder["expectSummary"]>[0];
  testSaldo0?: boolean;
  testSaldoMinusSoll?: boolean;
  testDienstabbruch?: boolean;
  plausi?: boolean;
};

const cases: casesType[] = [
  {
    name: "Keine Beschäftigungsart",
    sollMinusIst: nope,
    testSaldo0: true,
    testSaldoMinusSoll: true,
    testDienstabbruch: true,
    plausi: true,
  },
  {
    name: "Beamter/Beamtin",
    beschäftignunsart: 1,
    sollMinusIst: beamte,
    azvTag: {
      ZF_IST: "08:00:00",
      ZF_IST_MIN: "480",
      ZF_SALDO: "00:00:00",
      ZF_SALDO_MIN: "0",
      ZF_PAUSE: "00:00:00",
      ZF_PAUSE_DT: "",
    },
  },
  {
    name: "Arbeitnehmer/Arbeitnehmerin",
    beschäftignunsart: 2,
    sollMinusIst: arbeitnehmer,
  },
  {
    name: "Arbeitnehmer/Arbeitnehmerin (minderjährig)",
    beschäftignunsart: 3,
    sollMinusIst: arbeitnehmerMinderjährig,
  },
  {
    name: "Praktikant/in",
    beschäftignunsart: 4,
    sollMinusIst: praktikanten,
  },
  {
    name: "Beamter/Beamtin TZ-Kraft",
    beschäftignunsart: 1,
    arbeitszeitenpreset: "teilzeit",
    azvTag: {
      ZF_IST: "08:00:00",
      ZF_IST_MIN: "480",
      ZF_SALDO: "-01:52:00",
      ZF_SALDO_MIN: "-112",
      ZF_PAUSE: "00:00:00",
      ZF_PAUSE_DT: "",
    },
    plausi: true,
  },
];

test.beforeAll(async () => {
  await ix.clear();
  preparedCases = await Eingabeseite.prepareCases(cases);
});

// test.afterAll(async ({ ix, page }) => {
//   await ix.clear();
// });

// cases
//   .filter((i) => !!i.sollMinusIst)
//   .forEach((caseItem, index) => {
//     const { name, sollMinusIst } = caseItem;
//     const testName = `Saldo = Soll - Ist : ${name}`;
//     test(testName, async ({ page, ix }) => {
//       const eingabeseite = new Eingabeseite(page);
//       await ix.login(
//         preparedCases.find((i) => i.name === caseItem.name).user.loginvalues
//       );
//       await eingabeseite.gotoEingabeseite();
//       const testBuilder = new TestBuilder(eingabeseite);
//       await testBuilder.build(sollMinusIst);
//     });
//   });

// cases
//   .filter((i) => i.testDienstabbruch)
//   .forEach((caseItem, index) => {
//     test(`Dienstabbruch: ${caseItem.name}`, async ({ page, ix }) => {
//       const eingabeseite = new Eingabeseite(page);

//       await ix.login(
//         preparedCases.find((i) => i.name === caseItem.name).user.loginvalues
//       );
//       await eingabeseite.gotoEingabeseite();
//       const testBuilder = new TestBuilder(eingabeseite);
//       await testBuilder.build({
//         name: "Dienstabbruch",
//         items: {
//           dienstabbruch: {
//             buchungsart: "Dienstabbruch",
//             expectAnwesenheit: {
//               dauerInseconds: 0,
//               dauer: "00:00:00",
//               inputEnabled: true,
//             },
//             expect: {
//               ZF_IST: "08:00:00",
//               ZF_IST_MIN: "480",
//               ZF_SALDO: "00:00:00",
//               ZF_SALDO_MIN: "0",
//               ZF_PAUSE: "00:00:00",
//               ZF_PAUSE_DT: "",
//             },
//           },
//         },
//       });
//     });
//   });

cases
  .filter((i) => i.azvTag)
  .forEach((caseItem, index) => {
    test(`AZV Tag ${caseItem.name}`, async ({ page, ix }) => {
      const eingabeseite = new Eingabeseite(page);
      await ix.login(
        preparedCases.find((i) => i.name === caseItem.name).user.loginvalues
      );

      await eingabeseite.gotoEingabeseite();
      const testBuilder = new TestBuilder(eingabeseite);

      await eingabeseite.setAnwesenheit({
        buchungsart: "AZV-tag",
      });
      await testBuilder.expectAnwesenheit({
        dauerInseconds: 0,
        dauer: "",
        inputEnabled: false,
      });
      await testBuilder.expectSummary(caseItem.azvTag);
      await eingabeseite.expectCanAddMore(false);
    });
  });

// cases
//   .filter((i) => i.testSaldo0)
//   .forEach((caseItem, index) => {
//     test(`Saldo = 0 : ${caseItem.name}`, async ({ page, ix }) => {
//       const eingabeseite = new Eingabeseite(page);
//       await ix.login(
//         preparedCases.find((i) => i.name === caseItem.name).user.loginvalues
//       );
//       await eingabeseite.gotoEingabeseite();
//       const testBuilder = new TestBuilder(eingabeseite);
//       await eingabeseite.setAnwesenheit({
//         buchungsart: "Krank",
//       });
//       await testBuilder.expectAnwesenheit({
//         dauerInseconds: 0,
//         dauer: "",
//         inputEnabled: false,
//       });
//       await testBuilder.expectSummary({
//         ZF_IST: "08:00:00",
//         ZF_IST_MIN: "480",
//         ZF_SALDO: "00:00:00",
//         ZF_SALDO_MIN: "0",
//         ZF_PAUSE: "00:00:00",
//         ZF_PAUSE_DT: "",
//         ANW_STANDARD: "",
//       });
//       await eingabeseite.expectCanAddMore(false);
//     });
//   });

// cases
//   .filter((i) => i.testSaldoMinusSoll)
//   .forEach((caseItem, index) => {
//     test(`Saldo = -Soll : ${caseItem.name}`, async ({ page, ix }) => {
//       const eingabeseite = new Eingabeseite(page);
//       await ix.login(
//         preparedCases.find((i) => i.name === caseItem.name).user.loginvalues
//       );
//       await eingabeseite.gotoEingabeseite();
//       const testBuilder = new TestBuilder(eingabeseite);
//       await eingabeseite.setAnwesenheit({
//         buchungsart: "Zeitausgleich",
//       });
//       await testBuilder.expectAnwesenheit({
//         dauerInseconds: 0,
//         dauer: "00:00:00",
//         inputEnabled: false,
//       });
//       await testBuilder.expectSummary({
//         ZF_IST: "00:00:00",
//         ZF_IST_MIN: "0",
//         ZF_SALDO: "-08:00:00",
//         ZF_SALDO_MIN: "-480",
//         ZF_SALDO_DT: "00:00",
//         ZF_PAUSE: "00:00:00",
//         ANW_STANDARD: "",
//       });
//       await eingabeseite.expectCanAddMore(false);
//     });
//   });

// cases
//   .filter((i) => i.plausi)
//   .forEach((caseItem, index) => {
//     test(`plausi ${caseItem.name}`, async ({ page, ix }) => {
//       const eingabeseite = new Eingabeseite(page);
//       await ix.login(
//         preparedCases.find((i) => i.name === caseItem.name).user.loginvalues
//       );
//       await eingabeseite.gotoEingabeseite();

//       await eingabeseite.setAnwesenheit({
//         buchungsart: "Dienstgebäude",
//         von: "08",
//         bis: "14",
//       });

//       await eingabeseite.addUnterbrechung();

//       await eingabeseite.setUnterbrechung({
//         von: "10",
//         bis: "14:01",
//       });
//       await expect(page.getByText("Eine oder mehrere")).toBeInViewport();
//       await eingabeseite.Save();

//       await eingabeseite.setUnterbrechung({
//         von: "08:01",
//         bis: "13:30",
//       });
//       await expect(page.getByText("Eine oder mehrere")).not.toBeInViewport();
//       // await eingabeseite.Save();
//     });
//   });

// cases
//   .filter((i) => i.plausi)
//   .forEach((caseItem, index) => {
//     test(`buchungsarten ${caseItem.name}`, async ({ page, ix }) => {
//       const eingabeseite = new Eingabeseite(page);
//       await ix.login(
//         preparedCases.find((i) => i.name === caseItem.name).user.loginvalues
//       );
//       await eingabeseite.gotoEingabeseite();

//       await eingabeseite.setAnwesenheit({
//         buchungsart: "Dienstgebäude",
//         von: "08",
//         bis: "14",
//       });

//       await eingabeseite.addAnwesenheit();
//       await eingabeseite.setAnwesenheit({
//         buchungsart: "Dienstgebäude",
//         von: "08",
//         bis: "14",
//         item: 1,
//       });

//       const options = await page.$$eval('select[name="ANW_ART"]', (els) => {
//         return (els) => els;
//       });

//       console.log(options);

//       await eingabeseite.Save();
//       await expect(page.getByText("Eine oder mehrere")).toBeHidden();
//     });
//   });
