import { create } from "cypress/support/create";
import { PER_T_PERS_AZK } from "../../../db";
import { getPersonalByUserId } from "./Personal";
import moment from "moment";

// GET
export const getArbeitzeitByUserIdQuery = (userId: number) =>
  `SELECT * FROM "PER_T_PERS_AZK" WHERE "FKSTRID"=ANY(SELECT "STRID" FROM "PER_T_PERSONAL" WHERE "REF_BENUTZER"=${userId})`;
export const getArbeitzeitByUserId = (userId: number) =>
  cy.db<PER_T_PERS_AZK[]>(getArbeitzeitByUserIdQuery(userId));

// CREATE

const setArbeitzeit = (zeitInSec: number, zeitInSecUW?: number) => {
  const _zeitInSecUW = zeitInSecUW || zeitInSec;
  const days = ["MO", "DI", "MI", "DO", "FR"] as const;

  const toTimeasDate = (time: number) =>
    moment("1969-12-31T23:00:00.000Z").utc().add(time, "seconds").format();
  function setTimes(
    cb: (key: (typeof days)[number]) => keyof PER_T_PERS_AZK,
    value: any
  ) {
    return days.reduce((acc, day) => {
      return { ...acc, [cb(day)]: value };
    }, {} as Partial<PER_T_PERS_AZK>);
  }
  return {
    ...setTimes((day) => `L_ARBEITSZEIT${day}INSEKUNDEN`, zeitInSec),
    ...setTimes((day) => `L_UWARBEITSZEIT${day}INSEKUNDEN`, _zeitInSecUW),
    ...setTimes((day) => `DT_ARBEITSZEIT${day}`, toTimeasDate(zeitInSec)),
    ...setTimes((day) => `DT_UWARBEITSZEIT${day}`, toTimeasDate(_zeitInSecUW)),
    L_ARBEITSZEITSUMMEINSEKUNDEN: zeitInSec * 5,
    L_UWARBEITSZEITSUMMEINSEKUNDEN: _zeitInSecUW * 5,
    B_WOCHENIDENTISCH: !zeitInSecUW,
  };
};
const h8 = 28800;
const presets = {
  "39h24m48s": { ...setArbeitzeit(28368) },
  "40h": { ...setArbeitzeit(h8) },
  "40h/20h": { ...setArbeitzeit(h8 * 2, h8) },
  "20h": { ...setArbeitzeit(h8 / 2) },
};
export const createArbeitzeitByUserId = (
  { userId, preset = "40h" }: { userId: number; preset?: keyof typeof presets },
  values?: Partial<typeof arbeitszeit>
) => {
  getPersonalByUserId(userId).then((personal) => {
    cy.db(
      create<PER_T_PERS_AZK>({
        table: "PER_T_PERS_AZK",
        items: {
          ...arbeitszeit,
          ...presets[preset],
          FKSTRID: personal.STRID,
        },
        values,
      }).upQuery
    );
  });
};

// DELETE

export const deleteArbeitzeitByUserIdQuery = (userId: number) =>
  `DELETE FROM "PER_T_PERS_AZK" WHERE "FKSTRID"=ANY(SELECT "STRID" FROM "PER_T_PERSONAL" WHERE "REF_BENUTZER"=${userId})`;
export const deleteArbeitzeitByUserId = (userId: number) =>
  cy.db(deleteArbeitzeitByUserIdQuery(userId));

const arbeitszeit = {
  DT_UWARBEITSZEITSO: "1969-12-31T23:00:00.000Z",
  STR_ARBEITSZEITSO: null,
  L_UWARBEITSZEITMIINSEKUNDEN: 14400,
  DT_UWARBEITSZEITSA: "1969-12-31T23:00:00.000Z",
  L_UWARBEITSZEITFRINSEKUNDEN: 14400,
  DT_ARBEITSZEITDO: "1970-01-01T03:00:00.000Z",
  DT_UWARBEITSZEITDO: "1970-01-01T03:00:00.000Z",
  L_UWARBEITSZEITSOINSEKUNDEN: 0,
  STR_UWARBEITSZEITSUMME: "20:00:00",
  STR_UWARBEITSZEITSO: null,
  L_UWARBEITSZEITDIINMINUTEN: null,
  L_ARBEITSZEITFRINMINUTEN: null,
  DT_ARBEITSZEITSO: "1969-12-31T23:00:00.000Z",
  L_UWARBEITSZEITSOINMINUTEN: null,
  DT_ARBEITSZEITSUMME: null,
  L_ARBEITSZEITMOINSEKUNDEN: 14400,
  DT_ARBEITSZEITMI: "1970-01-01T03:00:00.000Z",
  TXT_BEMERKUNGEN: null,
  L_UWARBEITSZEITMIINMINUTEN: null,
  DT_ARBEITSZEITFR: "1970-01-01T03:00:00.000Z",
  DT_UWARBEITSZEITSUMME: null,
  L_UWARBEITSZEITMOINMINUTEN: null,
  DT_BIS: "9999-12-30T23:00:00.000Z",
  DT_VON: "2023-06-06T22:00:00.000Z",
  L_ARBEITSZEITDOINSEKUNDEN: 14400,
  L_ARBEITSZEITFRINSEKUNDEN: 14400,
  L_ARBEITSZEITSAINSEKUNDEN: 0,
  STR_ARBEITSZEITDO: null,
  DT_UWARBEITSZEITFR: "1970-01-01T03:00:00.000Z",
  DT_UWARBEITSZEITDI: "1970-01-01T03:00:00.000Z",
  L_ARBEITSZEITDIINMINUTEN: null,
  STR_ARBEITSZEITMI: null,
  STR_UWARBEITSZEITFR: null,
  STR_UWARBEITSZEITMO: null,
  DTINSERT: "2023-11-03T16:18:59.746Z",
  STR_UWARBEITSZEITDI: null,
  L_ARBEITSZEITSAINMINUTEN: null,
  L_ARBEITZEITSUMMEINMINUTEN: null,
  L_UWARBEITSZEITSUMMEINMINUTEN: null,
  STR_ARBEITSZEITSA: null,
  STR_UWARBEITSZEITDO: null,
  DT_UWARBEITSZEITMO: "1970-01-01T03:00:00.000Z",
  L_UWARBEITSZEITFRINMINUTEN: null,
  STR_ARBEITSZEITMO: null,
  DT_UWARBEITSZEITMI: "1970-01-01T03:00:00.000Z",
  FKSTRID: "B29FBCF768169F485BC843C686FFBD0323E6F092",
  L_UWARBEITSZEITSAINSEKUNDEN: 0,
  STR_ARBEITSZEITFR: null,
  L_ARBEITSZEITSOINMINUTEN: null,
  L_ARBEITSZEITMIINMINUTEN: null,
  DT_ARBEITSZEITMO: "1970-01-01T03:00:00.000Z",
  STR_ARBEITSZEITSUMME: "20:00:00",
  DTEDIT: "2023-11-03T16:18:59.746Z",
  L_UWARBEITSZEITDOINMINUTEN: null,
  STR_UWARBEITSZEITSA: null,
  L_ARBEITSZEITSUMMEINSEKUNDEN: 72000,
  B_WOCHENIDENTISCH: true,
  L_UWARBEITSZEITDIINSEKUNDEN: 14400,
  // STRID: "3235245B81376FC3C05A09E01066CE5BCFD873E5",
  L_ARBEITSZEITDIINSEKUNDEN: 14400,
  L_UWARBEITSZEITSAINMINUTEN: null,
  STR_UWARBEITSZEITMI: null,
  L_ARBEITSZEITDOINMINUTEN: null,
  L_UWARBEITSZEITSUMMEINSEKUNDEN: 72000,
  LUSERIDINSERT: 1,
  L_UWARBEITSZEITDOINSEKUNDEN: 14400,
  STR_ARBEITSZEITDI: null,
  DT_ARBEITSZEITDI: "1970-01-01T03:00:00.000Z",
  DT_ARBEITSZEITSA: "1969-12-31T23:00:00.000Z",
  LUSERID: 1,
  L_UWARBEITSZEITMOINSEKUNDEN: 14400,
  L_ARBEITSZEITMOINMINUTEN: null,
  L_ARBEITSZEITMIINSEKUNDEN: 14400,
  L_ARBEITSZEITSOINSEKUNDEN: 0,
  B_INITIALEREINTRAG: null,
} as unknown as PER_T_PERS_AZK;
