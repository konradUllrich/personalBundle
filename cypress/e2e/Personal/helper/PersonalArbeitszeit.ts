import { create } from "cypress/support/create";

import { getPersonalByUserId } from "./Personal";
import moment from "moment";

// GET
export const getArbeitzeitByUserIdQuery = (userId: number) =>
  `SELECT * FROM PER_T_PERS_AZK WHERE FKSTRID=ANY(SELECT "STRID" FROM PER_T_PERSONAL WHERE REF_BENUTZER=${userId})`;
export const getArbeitzeitByUserId = (userId: number) =>
  cy.db<DB["per_t_pers_azk"][]>(getArbeitzeitByUserIdQuery(userId));

// CREATE

const setArbeitzeit = (zeitInSec: number, zeitInSecUW?: number) => {
  const _zeitInSecUW = zeitInSecUW || zeitInSec;
  const days = ["mo", "di", "mi", "do", "fr"] as const;

  const toTimeasDate = (time: number) =>
    moment("1969-12-31T23:00:00.000Z").utc().add(time, "seconds").format();
  function setTimes(
    cb: (key: (typeof days)[number]) => keyof DB["per_t_pers_azk"],
    value: any
  ) {
    return days.reduce(
      (acc, day) => {
        return { ...acc, [cb(day)]: value };
      },
      {} as Partial<DB["per_t_pers_azk"]>
    );
  }
  return {
    ...setTimes((day) => `l_arbeitszeit${day}insekunden`, zeitInSec),
    ...setTimes((day) => `l_uwarbeitszeit${day}insekunden`, _zeitInSecUW),
    ...setTimes((day) => `dt_arbeitszeit${day}`, toTimeasDate(zeitInSec)),
    ...setTimes((day) => `dt_uwarbeitszeit${day}`, toTimeasDate(_zeitInSecUW)),
    l_arbeitszeitsummeinsekunden: zeitInSec * 5,
    l_uwarbeitszeitsummeinsekunden: _zeitInSecUW * 5,
    b_wochenidentisch: !zeitInSecUW,
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
  values?: Partial<DB["per_t_pers_azk"]>
) => {
  getPersonalByUserId(userId).then((personal) => {
    cy.log("", personal);

    create<DB["per_t_pers_azk"]>({
      table: "PER_T_PERS_AZK",
      items: {
        ...arbeitszeit,
        ...presets[preset],
        fkstrid: personal.strid,
      },
      values,
    })
      .up()
      .then((r) => {
        cy.log("azk", r);
      });
  });
};

// DELETE

export const deleteArbeitzeitByUserIdQuery = (userId: number) =>
  `DELETE FROM "PER_T_PERS_AZK" WHERE "FKSTRID"=ANY(SELECT "STRID" FROM "PER_T_PERSONAL" WHERE "REF_BENUTZER"=${userId})`;
export const deleteArbeitzeitByUserId = (userId: number) =>
  cy.db(deleteArbeitzeitByUserIdQuery(userId));

const arbeitszeit: DB["per_t_pers_azk"] = {
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
