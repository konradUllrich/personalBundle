import { createUser } from "../intrexx-cypress/user/createUser";
import { getGuid } from "./util";

type createBenutzerProps = {
  firstName: string;
  lastName: string;
  lid?: number;
} & Partial<typeof benutzer>;

export function createBenutzer({
  firstName,
  lastName,
  ...rest
}: createBenutzerProps) {
  const { login } = createUser({
    firstName,
    lastName,
  });

  const _benutzer = {
    ...benutzer,
    STR_VOLLERNAME: `${firstName} ${lastName}`,
    STR_VORNAME: firstName,
    STR_NACHNAME: lastName,
    STRID: getGuid(),
    ...rest,
  };

  const benutzerFields = Object.keys(_benutzer).join(",");
  const benutzerValues = Object.keys(_benutzer)
    .map((key) => `'${_benutzer[key]}'`)
    .join(",");

  const up = () => {
    cy.db(
      " " +
        `insert into "PER_T_PERSONAL"(${benutzerFields}) values(${benutzerValues});`
    );
  };

  const down = () => {
    cy.db(
      `DELETE FROM "PER_T_PERS_AZK" WHERE "FKSTRID"='${_benutzer.STRID}';` +
        " " +
        " " +
        `DELETE FROM "PER_T_PERSONAL" WHERE "STRID"='${_benutzer.STRID}';`
    );
  };

  return { up, down, login };
}

export const benutzer = {
  STR_FUEHRUNGSKRAFT: "Krone, Marcel",
  B_EXTERNESPERSONAL: false,
  STR_ORGAEBENE1: "4EB10AA62F5B9B277D4C65AAD0B24E55A5711982",
  L_STARTWERTARBEITSZEITKONTO: 72000,
  DTEDIT: "2023-08-15 19:32:23",
  DTINSERT: "2023-05-16 08:49:50",
  STR_ORGAEBENE3: "562B1953DB4FC9411802D53CD2AD60128AF58910",
  STR_VOLLERNAME: "Krone, Marcel",
  STRID: "46C2387BBB31A5BC7C05ABCF29AC77484C9D42GR",
  STR_ORGAEBENE0: "C9AAA71D1D9A6D4B6D65481D96AEDB97D24788FC",
  REF_FUNKTION: "31D6DBFF755197038172345F46C47D4CB81D061E",
  STR_NACHNAME: "Krone",
  LUSERIDINSERT: 175,
  REF_ART: 2,
  REF_STANDORT: "3EA862F750E02F11846B9B29E0F227E15BC34D06",
  REF_FK_PERSONAL: "46C2387BBB31A5BC7C05ABCF29AC77484C9D428E",
  STR_STARTWERTARBEITSZEITKONTO: "20:0:0",
  STR_VORNAME: "Marcel",
  REF_FK_BENUTZER: 200,
  REF_BENUTZER: 200,
  STR_ORGAEBENE2: "C8FC2145ECB8AC06680F1FD5793A77CA627A5707",
  LUSERID: 1,
  STR_STELLENZEICHEN: "any",
  REF_BL: "BD9DADF7D4A8D13554FF76B54E2E6792E3A26B2A",
  DT_EINTRITTSDATUM: "2023-04-30 22:00:00",
  L_ZEITERFASSUNGBEGINNJAHR: 2023,
  L_ZEITERFASSUNGBEGINNMONAT: 5,
  L_STARTWERTSTUNDEN: 20,
  L_STARTWERTMINUTEN: 0,
  L_STARTWERTSEKUNDEN: 0,
  B_EINGERICHTET: false,
  STR_STARTWERTPLUSMINUS: "+",
};
