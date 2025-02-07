import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { prisma } from "tests/setup/db";
import moment from "moment";
import { buchungsarten } from "tests/Zeiterfassung/Eingabeseite/Helper/buchungsarten";
import { ix } from "../ix2";
import type { Prisma } from "@prisma/client";

export default class Zeiterfassung {
  monthNames: string[] = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  getDaysOfMonth(year: number, month: number) {
    const _month = month.toLocaleString("de-DE", { minimumIntegerDigits: 2 });
    var monthDate = moment(year + "-" + _month, "YYYY-MM");
    var arrDays = Array.from({ length: monthDate.daysInMonth() });
    return arrDays.map((_d, index) => {
      return moment(
        `${year}-${_month}-${(index + 1).toLocaleString("de-DE", {
          minimumIntegerDigits: 2,
        })}`
      );
    });
  }

  async createZeiterfassungsBögenVirtual({
    ref_benutzer,
  }: {
    ref_benutzer: number;
  }) {
    const monatsData = this.monthNames.map(
      (str_monat, index) =>
        ({
          strid: faker.string.uuid(),
          l_monat: index + 1,
          str_monat,
          ref_benutzer,
          ref_freigabestatus: "658925F796F357D357FA00539623A90B555BED35",
          l_zeitistsekunden: 0,
          str_zeitsaldo: "00:00:00",
          l_jahr: 2020,
        }) as Prisma.ze_t_monatCreateManyInput
    );
    await prisma.ze_t_monat.createMany({
      data: monatsData,
    });

    const dayData = monatsData.map((monat, index) => {
      return this.getDaysOfMonth(2020, index + 1).map((day) => {
        return {
          strid: faker.string.uuid(),
          fkstrid: monat.strid,
          dt_datum: day.toISOString(),

          l_arbeitszeitsaldosekunden: 500,
          str_arbeitszeitist: "00:00:00",
          str_arbeitszeitsoll: "00:00:00",
          str_arbeitszeitsaldo: "00:00:00",
        } as Prisma.ze_t_m_datumCreateManyInput;
      });
    });

    await prisma.ze_t_m_datum.createMany({
      data: dayData.flat(),
    });
  }

  async createZeiterfassungsBögen(userId: number) {
    await ix.runWorkflow({
      id: "3B90AE46D592E8AE66F42EF1DF48BA31D3C211CC",
      payload: { timerGuid: "4FA377303D988BD8FE0A91F5522AE494AFB13BD0" },
    });

    await expect(async () => {
      const b = await prisma.ze_t_monat.findMany({
        where: { ref_benutzer: userId },
      });
      await expect(b.length).toBe(12);
    }).toPass({ intervals: [300], timeout: 30000 });

    return await prisma.ze_t_monat.findMany({
      where: { ref_benutzer: userId },
      orderBy: [{ l_jahr: "asc" }, { l_monat: "asc" }],
      include: {
        ze_t_m_datum: { orderBy: { dt_datum: "asc" } },
      },
    });
  }

  async createTime({
    dayStrid,
    buchungsart,
    dauer,
  }: {
    dayStrid: string;
    buchungsart: keyof typeof buchungsarten;
    dauer: number;
  }) {
    // const dauer = faker.number.int({ min: 300, max: 3000 });
    const von = moment("1970-01-01 07:00:00");
    await prisma.ze_t_m_d_zeiten.create({
      data: {
        b_standardeintrag: true,
        fkstrid: dayStrid,
        strid: faker.string.uuid(),
        l_dauersekunden: dauer,
        ref_buchungsart: buchungsarten[buchungsart],
        str_dauer: this.secondsToHHMMSS(dauer),
        dt_von: von.toISOString(),
        dt_bis: von.clone().add(dauer, "seconds").toISOString(),
      },
    });
  }

  async rerunZeiterfassungsBögen(
    ref_benutzer: number,
    expectedMonthCount = 12
  ) {
    await this.createZeiterfassungsBögen(ref_benutzer);
    await expect(async () => {
      const b = await prisma.ze_t_monat.findMany({
        where: { ref_benutzer, l_zeitsaldosekunden: { not: 0 } },
      });
      await expect(b.length).toBe(expectedMonthCount);
    }).toPass({ intervals: [300], timeout: 30000 });
  }

  async startEraseScript(userId: number, expectedMonthCount = 12) {
    await ix.runTimer("C7B17A29CF2CE4D32626BE38E718F6FD364BE4C1");
    await expect(async () => {
      const b = await prisma.ze_t_monat.findMany({
        where: { ref_benutzer: userId, l_zeitsaldosekunden: { not: 0 } },
      });
      await expect(b.length).toBe(expectedMonthCount);
    }).toPass({ intervals: [300], timeout: 30000 });
  }

  async getMonth(userId: number) {
    return await prisma.ze_t_monat.findMany({
      where: { ref_benutzer: userId },
    });
  }
  async getDays(userId: number) {
    return await prisma.ze_t_m_datum.findMany({
      where: { ze_t_monat: { ref_benutzer: userId } },
    });
  }

  async createDayData(userId: number) {
    const days = await this.getDays(userId);

    for (let day of days) {
      if (day.l_arbeitszeitsollsekunden === 0) continue;

      const nextSoll =
        day.l_arbeitszeitsollsekunden -
        faker.number.int({ min: -3000, max: 3000 });
      const nextSaldo = day.l_arbeitszeitsollsekunden - nextSoll;

      await prisma.ze_t_m_datum.update({
        data: {
          l_arbeitszeitistsekunden: nextSoll,
          str_arbeitszeitist: this.secondsToHHMMSS(nextSoll),
          l_arbeitszeitsaldosekunden: nextSaldo,
          str_arbeitszeitsaldo: this.secondsToHHMMSS(nextSaldo),
        },
        where: { strid: day.strid },
      });
      const dumytime = await prisma.ze_t_m_d_zeiten.findFirst({
        where: { fkstrid: day.strid },
      });

      const von = moment("1970-01-01 07:00:00");
      await prisma.ze_t_m_d_zeiten.update({
        data: {
          b_standardeintrag: true,
          fkstrid: day.strid,
          strid: faker.string.uuid(),
          l_dauersekunden: nextSoll,
          ref_buchungsart: "34564DF98301C17B54CB091021055D1A31F6B619",
          str_dauer: this.secondsToHHMMSS(nextSoll),
          dt_von: von.toISOString(),
          dt_bis: von.clone().add(nextSoll, "seconds").toISOString(),
        },
        where: {
          strid: dumytime.strid,
        },
      });
    }
  }

  async createZeiterfassungsBögenDB(userId: number) {
    let saldo = 0;
    await prisma.ze_t_monat.createMany({
      data: this.monthNames.map((monthName, index) => {
        const monatSumme = faker.number.int({ min: -200000, max: 200000 });
        const _saldo = faker.number.int({ min: -20000, max: 20000 });
        const übertrag = saldo;
        saldo = _saldo > 0 ? saldo + _saldo : saldo - Math.abs(_saldo);
        return {
          ...month,
          strid: faker.string.uuid(),
          ref_benutzer: userId,
          str_monat: monthName,
          l_monat: index + 1,
          l_zeitistsekunden: monatSumme,
          str_zeitist: this.secondsToHHMMSS(monatSumme),
          l_zeituebertragsekunden: übertrag,
          str_zeituebertrag: this.secondsToHHMMSS(übertrag),
          l_zeitsaldosekunden: saldo,
          str_zeitsaldo: this.secondsToHHMMSS(saldo),
          dt_loeschdatum: faker.date.past(),
        };
      }),
    });
  }

  async createZeiten(userId: number) {
    const times = await prisma.ze_t_monat.findMany({
      where: { ref_benutzer: userId },
    });

    for (let time of times) {
      const monatSumme = faker.number.int({ min: -20000, max: 20000 });
      await prisma.ze_t_monat.update({
        data: {
          // l_zeitsaldosekunden: t,
          // str_zeitsaldo: this.secondsToHHMMSS(t),
          // str_zeituebertrag:
        },
        where: { strid: time.strid },
      });
    }
  }

  async getMonate(userId: number) {
    return await prisma.ze_t_monat.findMany({
      where: { ref_benutzer: userId },
    });
  }

  static parseHhMmSs(timeString: string, to: "min" | "sec" = "sec") {
    const isNegative = timeString.startsWith("-");
    const time = timeString.replace("-", "");
    const [hours, minutes, seconds] = time.split(":").map(Number);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    totalSeconds = isNegative ? -totalSeconds : totalSeconds;
    if (to === "min") {
      return (totalSeconds / 60).toString();
    }
    return totalSeconds.toString();
  }
  secondsToHHMMSS(totalSeconds: number): string {
    const isNegative = totalSeconds < 0;
    totalSeconds = Math.abs(totalSeconds);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const hoursString = hours.toString().padStart(2, "0");
    const minutesString = minutes.toString().padStart(2, "0");
    const secondsString = seconds.toString().padStart(2, "0");

    const formattedTime = `${hoursString}:${minutesString}:${secondsString}`;
    return isNegative ? `-${formattedTime}` : formattedTime;
  }
}

const month = {
  l_jahr: 2023,
  str_zeitist: "00:00:00",
  ref_freigabestatus: "658925F796F357D357FA00539623A90B555BED35",
  l_zeitsaldosekunden: 0,
  l_zeitistsekunden: 0,
  str_monat: "Oktober",
  l_zeituebertragsekunden: null,
  dtinsert: new Date(),
  strid: "0104DCCA1897FB7A49B2843541C254D0ABB46DEF",
  ref_benutzer: 191,
  str_mitarbeiterin: "Ullrich, Konrad",
  ref_personal: "D0859E7BB6C22428C7E832552455CF8C0655B18C",
  str_fuehrungskraft: "Krone, Marcel",
  l_kappungsgrenze: null,
  luserid: 192,
  l_monat: 10,
  str_zeituebertrag: null,
  luseridinsert: 1,
  b_kappungsgrenzeein: null,
  str_zeitsaldo: "00:00:00",
  ref_fk_benutzer: 175,
  str_ampel: null,
  ref_status: "B68431A77C505B33906668653F1B117A8EE3A508",
  ref_bl: "836111FFACEB06852D1780B0F3260FE0404E48C5",
  dtedit: new Date(),
  ref_fk_personal: "E60C9A495BD548F58C5D7C754DBACA27CF8DF8E8",
  b_archiv: null,
  ref_saldenkontrolle: "C6615C2A16F63EDE3BF5957E41D2588D81ECA261",
  str_stellenzeichen: null,
  str_referat: null,
  txt_begruendungbeiablehnung: null,
  dt_loeschdatum: null,
  b_geloescht: null,
  str_zeitraumbuchungsart: null,
  dt_zeitraumvon: null,
  dt_zeitraumbis: null,
  l_stellverfreigabe: null,
  str_stellverfreigabe: null,
  l_fileinformation: null,
};
