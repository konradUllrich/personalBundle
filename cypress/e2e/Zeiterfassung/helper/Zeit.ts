import { create } from "cypress/support/create";
import { ZE_T_M_D_ZEITEN } from "../../../db";

const select = "SELECT * FROM ZE_T_M_D_ZEITEN";

export const getTime = {
  byDayId: (dayId: string) =>
    cy.db<ZE_T_M_D_ZEITEN[]>(`${select} WHERE FKSTRID ='${dayId}'`),
  byUserId: (userId: number) =>
    cy.db<ZE_T_M_D_ZEITEN[]>(`${select} WHERE FKSTRID IN (
      SELECT STRID  FROM ZE_T_M_DATUM WHERE FKSTRID IN (SELECT STRID FROM ZE_T_MONAT
      WHERE REF_BENUTZER = ${userId})
  )`),
};

export const createTime = ({ values }: { values: Partial<typeof time> }) =>
  create<typeof time>({
    table: "ZE_T_M_D_ZEITEN",
    items: { ...time, ...values },
  });

const time = {
  DT_BIS: "1970-01-01T13:00:00.000Z",
  L_DAUERSEKUNDEN: 21600,
  DTINSERT: "2023-08-24T11:22:24.000Z",
  LUSERID: 193,
  REF_BUCHUNGSART: "34564DF98301C17B54CB091021055D1A31F6B619",
  STR_GUIDABWESENHEITSANTRAG: null,
  FKSTRID: "26F74175F68E742AEE4A7F86A9ABCE810106852A",
  DT_DAUER: null,
  STR_DAUER: "06:00:00",
  REF_KOSTENSTELLE: null,
  DT_PAUSE: "1969-12-31T23:00:00.000Z",
  STR_PAUSEMINUTEN: null,
  // STRID: "572EE7BDDC7B075D597E7226B27993351455E44B",
  DTEDIT: "2023-11-01T13:53:04.500Z",
  DT_VON: "1970-01-01T07:00:00.000Z",
  LUSERIDINSERT: 1,
  B_STANDARDEINTRAG: true,
  L_PAUSESEKUNDEN: null,
};
