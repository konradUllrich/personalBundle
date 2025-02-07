import { faker } from "@faker-js/faker";
import moment from "moment";
import { test, prisma, expect } from "tests/setup/db";
import Personal from "tests/setup/Ix/dataProvider/Personalx";
import Zeiterfassung from "tests/setup/Ix/dataProvider/Zeiterfassung";
import { buchungsarten } from "../Eingabeseite/Helper/buchungsarten";
import Ix from "tests/setup/Ix/ix2";

test("lösch script", async ({ page, ix }) => {
  const { p, zeiterfassung } = await createData();
  await ix.login(p.user.loginvalues);
  await page.goto(ix.getUrl("zeiterfassung"));

  const checkBefore = await checkIntegrety(p.user.data.lid);

  await ix.prisma.ze_t_monat.updateMany({
    data: {
      dt_loeschdatum: faker.date.recent({ days: 10 }),
      b_archiv: true,
    },
    where: {
      ref_benutzer: p.user.data.lid,
      l_monat: { lte: 4 },
    },
  });

  await zeiterfassung.startEraseScript(p.user.data.lid, 8);
  const checkAfter = await checkIntegrety(p.user.data.lid);

  expect(checkBefore.finalSaldo).toBe(checkAfter.finalSaldo);
  expect(checkBefore.finalAueSaldo).toBe(checkAfter.finalAueSaldo);

  await page.reload();
});

const checkIntegrety = async (ref_benutzer: number) => {
  const months = await prisma.ze_t_monat.findMany({
    where: { ref_benutzer },
    orderBy: [{ l_jahr: "asc" }, { l_monat: "asc" }],
    include: {
      ze_t_m_datum: true,
    },
  });
  const personal = await prisma.per_t_personal.findFirst({
    where: { ref_benutzer },
  });
  const aue = await prisma.ze_t_m_d_zeiten.findMany({
    where: {
      ref_buchungsart: {
        in: [buchungsarten["Aue"], buchungsarten["ZeitausgleichAue"]],
      },
      fkstrid: {
        in: months.flatMap((m) => m.ze_t_m_datum.map((d) => d.strid)),
      },
    },
  });

  const aueSum = aue.reduce((acc, item) => {
    return item.ref_buchungsart === buchungsarten["Aue"]
      ? acc + item.l_dauersekunden
      : acc - item.l_dauersekunden;
  }, 0);

  const startwertSaldoDuration = moment.duration({
    seconds: personal.l_startwertsekunden,
    minutes: personal.l_startwertminuten,
    hours: personal.l_startwertstunden,
  });
  const startwertSaldoAueDuration = moment.duration({
    seconds: personal.l_startwertauesekunden,
    minutes: personal.l_startwertaueminuten,
    hours: personal.l_startwertauestunden,
  });

  const startwertSaldoAue = startwertSaldoAueDuration.asSeconds();

  const startwertSaldo =
    startwertSaldoDuration.asSeconds() *
    (personal.str_startwertplusminus === "-" ? -1 : 1);

  let lastSaldo = startwertSaldo;
  let isFirstRun = true;
  for (let month of months) {
    if (isFirstRun && !month.l_zeituebertragsekunden) {
    } else {
      expect
        .soft(month.l_zeituebertragsekunden, `month: ${month.str_monat}`)
        .toBe(lastSaldo);
    }
    lastSaldo = month.l_zeitsaldosekunden;
    isFirstRun = false;
  }

  return {
    startwertSaldo,
    finalSaldo: lastSaldo,
    startwertSaldoAue,
    aueSum,
    finalAueSaldo: startwertSaldoAue + aueSum,
  };
};

const createData = async () => {
  const ix = new Ix();
  await ix.clear();
  const personal = new Personal();

  const zeiterfassung = new Zeiterfassung();
  const p = await personal.createPersonal({
    l_startwertauestunden: 2,
    l_startwertaueminuten: 20,
    l_startwertauesekunden: 0,
  });

  await personal.createArbeitszeiten(p.personal.strid);
  const monate = await zeiterfassung.createZeiterfassungsBögen(p.user.data.lid);
  await zeiterfassung.createDayData(p.user.data.lid);
  await zeiterfassung.rerunZeiterfassungsBögen(p.user.data.lid);
  await zeiterfassung.createTime({
    dayStrid: monate[2].ze_t_m_datum[0].strid,
    buchungsart: "Aue",
    dauer: 5000,
  });
  await zeiterfassung.createTime({
    dayStrid: monate[2].ze_t_m_datum[2].strid,
    buchungsart: "ZeitausgleichAue",
    dauer: 3000,
  });
  await zeiterfassung.createTime({
    dayStrid: monate[4].ze_t_m_datum[0].strid,
    buchungsart: "Aue",
    dauer: 5000,
  });
  await zeiterfassung.createTime({
    dayStrid: monate[4].ze_t_m_datum[2].strid,
    buchungsart: "ZeitausgleichAue",
    dauer: 3000,
  });

  return { p, zeiterfassung };
};
