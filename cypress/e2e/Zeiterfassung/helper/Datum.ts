import { ZE_T_M_DATUM } from "output-models";

import { create } from "cypress/support/create";

export const getDateByMonthIdQuery = (monthId: string) =>
  `SELECT * FROM "ZE_T_M_DATUM" WHERE "FKSTRID"='${monthId}' ORDER BY DT_DATUM `;

export const getDateByMonthId = (monthId: string) =>
  cy.db<ZE_T_M_DATUM[]>(getDateByMonthIdQuery(monthId));

export const getDateQuery = (condition: string = "") =>
  `SELECT * FROM "ZE_T_M_DATUM" ${condition}`;

export const getDate = (condition: string) =>
  cy.db<ZE_T_M_DATUM[]>(getDateQuery(condition));

export const createDay = ({ values }: { values: Partial<typeof day> }) =>
  create<typeof day>({ table: "ZE_T_M_DATUM", items: { ...day, ...values } });

const day = {
  DTEDIT: "2023-11-01T09:52:51.483Z",
  L_ARBEITSZEITSOLLSEKUNDEN: 0,
  STR_ZUSATZDATEN: ", Unterbrechungen (1)  ",
  REF_BUCHUNGSART: null,
  FKSTRID: "E774612F533FBD17A0666C1E5D91A211A55F2391",
  STRID: "26F74175F68E742AEE4A7F86A9ABCE810106852A",
  L_ARBEITSZEITSOLLMINUTEN: null,
  DT_VON: "1970-01-01T07:00:00.000Z",
  STR_UNTERBRECHUNG: null,
  STR_WOCHENTAG: "DO",
  DT_DATUM: "2024-01-03T23:00:00.000Z",
  DT_PAUSE: "1969-12-31T23:00:00.000Z",
  LUSERID: 193,
  L_ARBEITSZEITISTSEKUNDEN: 21600,
  STR_ARBEITSZEITSALDO: "06:00:00",
  DTINSERT: "2023-08-24T11:22:24.000Z",
  L_ARBEITSZEITISTMINUTEN: null,
  STR_GUIDABWESENHEITSANTRAG: null,
  TXT_BEMERKUNGEN: null,
  DT_ARBEITSZEITIST: "1970-01-01T05:00:00.000Z",
  STR_ARBEITSZEITIST: "06:00:00",
  L_ARBEITSZEITSALDOSEKUNDEN: 0,
  REF_ZEITTYP: null,
  DT_ARBEITSZEITSALDO: "1970-01-01T05:00:00.000Z",
  DT_BIS: "1970-01-01T13:00:00.000Z",
  L_ARBEITSZEITSALDOMINUTEN: null,
  STR_HINWEIS: null,
  L_KW: 1,
  STR_PAUSE: "00:00:00",
  LUSERIDINSERT: 1,
  STR_ARBEITSZEITSOLL: "00:00:00",
  TXT_BUCHUNGSARTEN: "Dienstgebäude",
};
