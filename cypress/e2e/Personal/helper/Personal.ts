import { create } from "cypress/support/create";
import { PER_T_PERSONAL, DSUSER } from "../../../db";
import {
  createUser,
  clearAllUsers,
} from "cypress/intrexx-cypress/user/createUser";
import { deleteAllZEDataQuery } from "cypress/e2e/Zeiterfassung/helper/util";
import { clearABWDataQuery } from "cypress/e2e/AbwesenheitsAntrag/helper/clear";
import { clearUrlaubsPlanungsDataQuery } from "cypress/e2e/Urlaubsplanung/helper/clear";

export const getPersonalQuery = (where: string = "") =>
  `SELECT * FROM "PER_T_PERSONAL" ${where}`;

export const getPersonal = (where: string = "") =>
  cy.db<PER_T_PERSONAL[]>(getPersonalQuery(where));

export const getPersonalByUserIdQuery = (userId: number) =>
  `SELECT * FROM "PER_T_PERSONAL" WHERE "REF_BENUTZER"=${userId}`;

export const getPersonalByUserId = (userId: number) =>
  cy
    .db<PER_T_PERSONAL>(getPersonalByUserIdQuery(userId))
    .then((r) => r[0]) as Cypress.Chainable<PER_T_PERSONAL>;

export const deletePersonalQuery = (where: string = "") =>
  `        
  DELETE FROM "PER_T_PERS_UK";
  DELETE FROM "PER_T_PERS_JOURNAL";
  DELETE FROM "PER_T_PERS_AZK"; 
  DELETE FROM "PER_T_PERSONAL";  
  `;

export const deletePersonal = (where: string = "") =>
  cy.db(deletePersonalQuery(where));

export const deleteAllPersonalData = () => {
  cy.db(clearUrlaubsPlanungsDataQuery());
  cy.db(clearABWDataQuery());
  cy.db(deleteAllZEDataQuery());
  cy.db(deletePersonalQuery());
  clearAllUsers();
};

export const createPersonal = (
  {
    personalValues,
    userValues,
  }: {
    personalValues?: Partial<typeof personal>;
    userValues?: Parameters<typeof createUser>[0];
  } = { personalValues: {}, userValues: {} }
) => {
  return createUser({ ...userValues }).then(({ user, login }) => {
    create<typeof personal>({
      table: "PER_T_PERSONAL",
      items: {
        ...personal,
        REF_BENUTZER: user.LID,
        STR_NACHNAME: user.STRLASTNAME,
        STR_VORNAME: user.STRFIRSTNAME,
        STR_VOLLERNAME: user.STRFULLNAME,
        ...personalValues,
      },
    })
      .up()
      .then((personal) => ({
        user,
        personal,
        login,
      }));
  }) as Cypress.Chainable<{
    user: DSUSER;
    personal: PER_T_PERSONAL;
    login: { name: string; pw: string };
  }>;
};

const personal = {
  STR_FUEHRUNGSKRAFT: null,
  B_EXTERNESPERSONAL: null,
  STR_ORGAEBENE1: "45C9E0D84329214D0CF91ACC428A6CC0ED9F1623",
  L_FILEINFORMATION: null,
  L_IDBENUTZERFUEHRUNGSKRAFT: 1,
  STR_STELLENZEICHEN: "MOCK",
  STR_IDFUNKTIONLOKAL: null,
  L_STARTWERTARBEITSZEITKONTO: 0,
  DTEDIT: "2023-11-03T22:28:31.922Z",
  STR_EMAIL: null,
  L_FUEHRUNGSKRAFTID: 1,
  STR_TELEFONNUMMER: null,
  B_KAPPUNGSGRENZEEIN: null,
  DTINSERT: "2023-08-18T13:23:10.000Z",
  DT_BEFRISTUNGBIS: null,
  STR_ORGAEBENE3: null,
  STR_VOLLERNAME: "zt_Benutzen mock",
  STR_BUERO: null,
  //STRID: "339A648031C66CCD53478B2B3AE7F370318E0D44",
  TXT_AUFGABENBESCHREIBUNG: null,
  STR_ORGAEBENE0: "C9AAA71D1D9A6D4B6D65481D96AEDB97D24788FC",
  L_IDFUEHRUNGSKRAFT: null,
  REF_FUNKTION: null,
  STR_TITEL: null,
  STR_ANREDE: null,
  STR_EXTERNEBUEROLEITUNG: null,
  STR_GESCHLECHT: null,
  STR_NACHNAME: "mock",
  TXT_ZUSATZFUNKTIONEN: null,
  TXT_BETEILIGUNGSFUNKTION: null,
  LUSERIDINSERT: 1,
  TXT_BEMERKUNG: null,
  L_IDBENUTZER: null,
  STR_ZUSTAENDIGEBUEROLEITUNG: null,
  REF_ART: null,
  STR_PERSONALNUMMER: null,
  REF_STANDORT: null,
  STR_ORGAEBENE4: null,
  REF_FK_PERSONAL: null,
  STR_STARTWERTARBEITSZEITKONTO: "0:0:0",
  STR_VORNAME: "zt_Benutzen",
  STR_MOBILNUMMER: null,
  DT_AUSTRITTSDATUM: null,
  STR_FUNKTION: null,
  REF_FK_BENUTZER: 1,
  REF_BENUTZER: 194,
  STR_ORGAEBENE2: null,
  LUSERID: 1,
  REF_BL: "BD9DADF7D4A8D13554FF76B54E2E6792E3A26B2A",
  DT_EINTRITTSDATUM: null,
  STR_ARBEITSZEITENVALIDIERUNG: null,
  L_KAPPUNGSGRENZE: null,
  L_ZEITERFASSUNGBEGINNJAHR: 2024,
  L_ZEITERFASSUNGBEGINNMONAT: 1,
  B_ZEITERFASSUNG: null,
  STR_MOBILRUFNUMMER: null,
  L_STARTWERTSTUNDEN: 0,
  L_STARTWERTMINUTEN: 0,
  L_STARTWERTSEKUNDEN: 0,
  B_EINGERICHTET: true,
  STR_STARTWERTPLUSMINUS: "+",
};
