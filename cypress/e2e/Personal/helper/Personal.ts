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
  `SELECT * FROM PER_T_PERSONAL WHERE REF_BENUTZER=${userId}`;

export const getPersonalByUserId = (userId: number) =>
  cy
    .db<DB["per_t_personal"]>(getPersonalByUserIdQuery(userId))
    .then((r) => r[0]) as Cypress.Chainable<DB["per_t_personal"]>;

export const deletePersonalQuery = (where: string = "") =>
  `        
  DELETE FROM PER_T_PERS_UK;
  DELETE FROM PER_T_PERS_JOURNAL;
  DELETE FROM PER_T_PERS_AZK; 
  DELETE FROM PER_T_PERSONAL;  
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
    personalValues?: Partial<DB["per_t_personal"]>;
    userValues?: Parameters<typeof createUser>[0];
  } = { personalValues: {}, userValues: {} }
) => {
  return createUser({ ...userValues }).then(({ user, login }) => {
    create<DB["per_t_personal"]>({
      table: "PER_T_PERSONAL",
      items: {
        ...personal,
        ref_benutzer: user.lid,
        str_nachname: user.strlastname,
        str_vorname: user.strfirstname,
        str_vollername: user.strfullname,
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
    user: DB["dsuser"];
    personal: DB["per_t_personal"];
    login: { name: string; pw: string };
  }>;
};

const personal: DB["per_t_personal"] = {
  str_fuehrungskraft: null,
  b_externespersonal: null,
  str_orgaebene1: "45C9E0D84329214D0CF91ACC428A6CC0ED9F1623",
  l_fileinformation: null,
  l_idbenutzerfuehrungskraft: 1,
  str_stellenzeichen: "MOCK",
  str_idfunktionlokal: null,
  l_startwertarbeitszeitkonto: 0,
  dtedit: "2023-11-03T22:28:31.922Z",
  str_email: null,
  l_fuehrungskraftid: 1,
  str_telefonnummer: null,
  b_kappungsgrenzeein: null,
  dtinsert: "2023-08-18T13:23:10.000Z",
  dt_befristungbis: null,
  str_orgaebene3: null,
  str_vollername: "zt_Benutzen mock",
  str_buero: null,
  strid: "339A648031C66CCD53478B2B3AE7F370318E0D44",
  txt_aufgabenbeschreibung: null,
  str_orgaebene0: "C9AAA71D1D9A6D4B6D65481D96AEDB97D24788FC",
  l_idfuehrungskraft: null,
  ref_funktion: null,
  str_titel: null,
  str_anrede: null,
  str_externebueroleitung: null,
  str_geschlecht: null,
  str_nachname: "mock",
  txt_zusatzfunktionen: null,
  txt_beteiligungsfunktion: null,
  luseridinsert: 1,
  txt_bemerkung: null,
  l_idbenutzer: null,
  str_zustaendigebueroleitung: null,
  ref_art: null,
  str_personalnummer: null,
  ref_standort: null,
  str_orgaebene4: null,
  ref_fk_personal: null,
  str_startwertarbeitszeitkonto: "0:0:0",
  str_vorname: "zt_Benutzen",
  str_mobilnummer: null,
  dt_austrittsdatum: null,
  str_funktion: null,
  ref_fk_benutzer: 1,
  ref_benutzer: 194,
  str_orgaebene2: null,
  luserid: 1,
  ref_bl: "BD9DADF7D4A8D13554FF76B54E2E6792E3A26B2A",
  dt_eintrittsdatum: null,
  str_arbeitszeitenvalidierung: null,
  l_kappungsgrenze: null,
  l_zeiterfassungbeginnjahr: 2024,
  l_zeiterfassungbeginnmonat: 1,
  b_zeiterfassung: null,
  str_mobilrufnummer: null,
  l_startwertstunden: 0,
  l_startwertminuten: 0,
  l_startwertsekunden: 0,
  b_eingerichtet: true,
  str_startwertplusminus: "+",
};
