import { create } from "cypress/support/create";
import { ZE_T_MONAT } from "../../../db";
import { deleteAllZEDataByUserIdQuery } from "./util";

export const getMonthByUserIdQuery = (userId: number) =>
  `SELECT * FROM "ZE_T_MONAT" WHERE "REF_BENUTZER"=${userId} ORDER BY L_MONAT`;

export const getMonthByUserId = (userId: number) =>
  cy.db<ZE_T_MONAT[]>(getMonthByUserIdQuery(userId));

export const getMonthQuery = () =>
  `SELECT * FROM "ZE_T_MONAT" ORDER BY L_MONAT`;

export const getMonth = () => cy.db<ZE_T_MONAT[]>(getMonthQuery());

export const createMonth = ({ values }: { values: Partial<typeof monat> }) =>
  create<typeof monat>({ table: "ZE_T_MONAT", items: { ...monat, ...values } });

export const deleteAllZEDataByUserId = (userID) =>
  cy.db(deleteAllZEDataByUserIdQuery(userID));

export const monat = {
  L_JAHR: 2024,
  STR_ZEITIST: "00:00:00",
  REF_FREIGABESTATUS: "F37B21636DD5B867A83DB53E7B6C941496871973",
  L_ZEITSALDOSEKUNDEN: 0,
  L_ZEITISTSEKUNDEN: 0,
  STR_MONAT: "Juni",
  L_ZEITUEBERTRAGSEKUNDEN: 0,
  DTINSERT: "2023-08-24T11:22:23.000Z",
  // STRID: "1999B9670D2A62D5146B130E393044EA26959B02",
  REF_BENUTZER: 193,
  STR_MITARBEITERIN: "zt_Bearbeiten mock",
  REF_PERSONAL: "B29FBCF768169F485BC843C686FFBD0323E6F092",
  STR_FUEHRUNGSKRAFT: null,
  L_KAPPUNGSGRENZE: null,
  LUSERID: 1,
  L_MONAT: 6,
  STR_ZEITUEBERTRAG: "18:00:00",
  LUSERIDINSERT: 1,
  B_KAPPUNGSGRENZEEIN: null,
  STR_ZEITSALDO: "18:00:00",
  REF_FK_BENUTZER: null,
  STR_AMPEL: null,
  REF_STATUS: "0E8FBB174F319DEA83629BACDC1B0ABD9B877096",
  REF_BL: null,
  DTEDIT: "2023-08-24T11:22:23.000Z",
  REF_FK_PERSONAL: null,
  B_ARCHIV: false,
  REF_SALDENKONTROLLE: "CA5AB392A1AFD1DB5834AAEB162E5D241C2B9266",
  STR_STELLENZEICHEN: null,
  STR_REFERAT: null,
  TXT_BEGRUENDUNGBEIABLEHNUNG: null,
  DT_LOESCHDATUM: null,
  B_GELOESCHT: null,
  STR_ZEITRAUMBUCHUNGSART: null,
  DT_ZEITRAUMVON: null,
  DT_ZEITRAUMBIS: null,
};
