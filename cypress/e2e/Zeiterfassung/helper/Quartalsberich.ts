import { ZE_T_QUARTALSBERICHT } from "../../../db";

export const getQuartalberichteQuery = (where?: string) =>
  `SELECT * FROM "ZE_T_QUARTALSBERICHT" ${where}`;

export const getQuartalberichte = (where?: string) =>
  cy.db<ZE_T_QUARTALSBERICHT[]>(getQuartalberichteQuery(where));

export const getQuartalberichtByYearQuery = (year: number) =>
  `SELECT * FROM "ZE_T_QUARTALSBERICHT" WHERE "L_JAHR"=${year}`;

export const getQuartalberichtByYear = (year: number) =>
  cy.db<ZE_T_QUARTALSBERICHT[]>(getQuartalberichtByYearQuery(year));

export const quatalBericht = {
  DTEDIT: "2023-08-15 11:39:19",
  REF_PERSONAL: "75EBA20D8C83D163109BFD65B1C69B989440846E",
  LUSERID: 1,
  REF_SALDENKONTROLLE: "45E1D27C1DE2DA8FC3A77AC79616BF6250062338",
  DTINSERT: "2023-08-15 11:39:19",
  L_JAHR: 2024,
  // STRID: "63061FE5D69527F1FBD873A8D2A3218D9E864412",
  LUSERIDINSERT: 1,
  STR_SALDO: null,
  STR_QUARTAL: "1. Quartal 2023",
  STR_MONAT3: "47:15:00",
  STR_ABTEILUNG: "I",
  STR_MONAT1: "61:15:00",
  STR_MONAT2: "47:15:00",
  STR_REFERAT: "I B",
};
