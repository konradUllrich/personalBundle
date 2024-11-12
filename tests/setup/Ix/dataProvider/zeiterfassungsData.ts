import { PrismaClient, Prisma } from "@prisma/client";
import moment from "moment";

export const arbeitszeitDefault = {
  dt_uwarbeitszeitso: "1969-12-31T23:00:00.000Z",
  str_arbeitszeitso: null,
  l_uwarbeitszeitmiinsekunden: 14400,
  dt_uwarbeitszeitsa: "1969-12-31T23:00:00.000Z",
  l_uwarbeitszeitfrinsekunden: 14400,
  dt_arbeitszeitdo: "1970-01-01T03:00:00.000Z",
  dt_uwarbeitszeitdo: "1970-01-01T03:00:00.000Z",
  l_uwarbeitszeitsoinsekunden: 0,
  str_uwarbeitszeitsumme: "20:00:00",
  str_uwarbeitszeitso: null,
  l_uwarbeitszeitdiinminuten: null,
  l_arbeitszeitfrinminuten: null,
  dt_arbeitszeitso: "1969-12-31T23:00:00.000Z",
  l_uwarbeitszeitsoinminuten: null,
  dt_arbeitszeitsumme: null,
  l_arbeitszeitmoinsekunden: 14400,
  dt_arbeitszeitmi: "1970-01-01T03:00:00.000Z",
  txt_bemerkungen: null,
  l_uwarbeitszeitmiinminuten: null,
  dt_arbeitszeitfr: "1970-01-01T03:00:00.000Z",
  dt_uwarbeitszeitsumme: null,
  l_uwarbeitszeitmoinminuten: null,
  dt_bis: "9999-12-30T23:00:00.000Z",
  dt_von: "2023-06-06T22:00:00.000Z",
  l_arbeitszeitdoinsekunden: 14400,
  l_arbeitszeitfrinsekunden: 14400,
  l_arbeitszeitsainsekunden: 0,
  str_arbeitszeitdo: null,
  dt_uwarbeitszeitfr: "1970-01-01T03:00:00.000Z",
  dt_uwarbeitszeitdi: "1970-01-01T03:00:00.000Z",
  l_arbeitszeitdiinminuten: null,
  str_arbeitszeitmi: null,
  str_uwarbeitszeitfr: null,
  str_uwarbeitszeitmo: null,
  dtinsert: "2023-11-03T16:18:59.746Z",
  str_uwarbeitszeitdi: null,
  l_arbeitszeitsainminuten: null,
  l_arbeitzeitsummeinminuten: null,
  l_uwarbeitszeitsummeinminuten: null,
  str_arbeitszeitsa: null,
  str_uwarbeitszeitdo: null,
  dt_uwarbeitszeitmo: "1970-01-01T03:00:00.000Z",
  l_uwarbeitszeitfrinminuten: null,
  str_arbeitszeitmo: null,
  dt_uwarbeitszeitmi: "1970-01-01T03:00:00.000Z",
  fkstrid: "B29FBCF768169F485BC843C686FFBD0323E6F092",
  l_uwarbeitszeitsainsekunden: 0,
  str_arbeitszeitfr: null,
  l_arbeitszeitsoinminuten: null,
  l_arbeitszeitmiinminuten: null,
  dt_arbeitszeitmo: "1970-01-01T03:00:00.000Z",
  str_arbeitszeitsumme: "20:00:00",
  dtedit: "2023-11-03T16:18:59.746Z",
  l_uwarbeitszeitdoinminuten: null,
  str_uwarbeitszeitsa: null,
  l_arbeitszeitsummeinsekunden: 72000,
  b_wochenidentisch: true,
  l_uwarbeitszeitdiinsekunden: 14400,
  strid: "3235245B81376FC3C05A09E01066CE5BCFD873E5",
  l_arbeitszeitdiinsekunden: 14400,
  l_uwarbeitszeitsainminuten: null,
  str_uwarbeitszeitmi: null,
  l_arbeitszeitdoinminuten: null,
  l_uwarbeitszeitsummeinsekunden: 72000,
  luseridinsert: 1,
  l_uwarbeitszeitdoinsekunden: 14400,
  str_arbeitszeitdi: null,
  dt_arbeitszeitdi: "1970-01-01T03:00:00.000Z",
  dt_arbeitszeitsa: "1969-12-31T23:00:00.000Z",
  luserid: 1,
  l_uwarbeitszeitmoinsekunden: 14400,
  l_arbeitszeitmoinminuten: null,
  l_arbeitszeitmiinsekunden: 14400,
  l_arbeitszeitsoinsekunden: 0,
  b_initialereintrag: null,
};

type per_t_pers_azk = Prisma.per_t_pers_azkCreateArgs["data"];

export const setArbeitzeit = (zeitInSec: number, zeitInSecUW?: number) => {
  const _zeitInSecUW = zeitInSecUW || zeitInSec;
  const days = ["mo", "di", "mi", "do", "fr"] as const;

  const toTimeasDate = (time: number) =>
    moment("1969-12-31T23:00:00.000Z").utc().add(time, "seconds").format();
  function setTimes(
    cb: (key: (typeof days)[number]) => keyof per_t_pers_azk,
    value: any
  ) {
    return days.reduce((acc, day) => {
      return { ...acc, [cb(day)]: value };
    }, {} as Partial<per_t_pers_azk>);
  }
  return {
    ...arbeitszeitDefault,
    ...setTimes((day) => `l_arbeitszeit${day}insekunden`, zeitInSec),
    ...setTimes((day) => `l_uwarbeitszeit${day}insekunden`, _zeitInSecUW),
    ...setTimes((day) => `dt_arbeitszeit${day}`, toTimeasDate(zeitInSec)),
    ...setTimes((day) => `dt_uwarbeitszeit${day}`, toTimeasDate(_zeitInSecUW)),
    l_arbeitszeitsummeinsekunden: zeitInSec * 5,
    l_uwarbeitszeitsummeinsekunden: _zeitInSecUW * 5,
    b_wochenidentisch: !zeitInSecUW,
  };
};

export const setArbeitzeit2 = (
  zeitInSec: number | Partial<Record<(typeof days)[number], number>>, // Allow number or object/array for each day
  zeitInSecUW:
    | number
    | Partial<Record<(typeof days)[number], number>> = zeitInSec
) => {
  const days = ["mo", "di", "mi", "do", "fr"] as const;

  // Helper to convert seconds to ISO date string using Moment.js
  const secondsToIsoDate = (seconds: number) =>
    moment.utc("1969-12-31T23:00:00.000Z").add(seconds, "seconds").format();

  // Function to get the time value for a specific day from a number, array, or object
  const getDayValue = (
    value: number | Partial<Record<(typeof days)[number], number>>,
    day: (typeof days)[number]
  ): number => {
    if (typeof value === "number") {
      return value; // If it's a single number, return that value for all days
    } else if (value[day] !== undefined) {
      return value[day] as number; // If it's an object/array, return the specific value for the day
    }
    throw new Error(`No value provided for ${day}`);
  };

  // Initialize the result object with default values
  const result: Partial<per_t_pers_azk> = { ...arbeitszeitDefault };

  // Iterate over the days array and assign values directly
  for (const day of days) {
    const arbeitzeit = getDayValue(zeitInSec, day);
    const uwArbeitzeit = getDayValue(zeitInSecUW, day);

    result[`l_arbeitszeit${day}insekunden`] = arbeitzeit;
    result[`l_uwarbeitszeit${day}insekunden`] = uwArbeitzeit;
    result[`dt_arbeitszeit${day}`] = secondsToIsoDate(arbeitzeit);
    result[`dt_uwarbeitszeit${day}`] = secondsToIsoDate(uwArbeitzeit);
  }
  // Add additional fields to the result object
  const totalArbeitzeit = days.reduce(
    (sum, day) => sum + getDayValue(zeitInSec, day),
    0
  );
  const totalUwArbeitzeit = days.reduce(
    (sum, day) => sum + getDayValue(zeitInSecUW, day),
    0
  );

  result.l_arbeitszeitsummeinsekunden = totalArbeitzeit;
  result.l_uwarbeitszeitsummeinsekunden = totalUwArbeitzeit;
  result.b_wochenidentisch = zeitInSec === zeitInSecUW;

  return result;
};

const h8 = 28800;
export const getArbeitszeitPreset = {
  "39h24m48s": { ...setArbeitzeit2(28368) },
  "40h": { ...setArbeitzeit2(h8) },
  "40h/20h": { ...setArbeitzeit2(h8 * 2, h8) },
  "20h": { ...setArbeitzeit2(h8 / 2) },
  teilzeit: {
    ...setArbeitzeit2({ mo: h8, di: h8, mi: h8, do: h8 / 3, fr: h8 / 2 }),
  },
};
