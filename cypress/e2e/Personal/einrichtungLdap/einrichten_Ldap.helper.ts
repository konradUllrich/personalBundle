import { createUser } from "cypress/intrexx-cypress/user/createUser";
import { benutzer } from "cypress/support/createBenutzer";

import { getPersonal } from "../helper/Personal";

type createPreparedUserProps = {
  STRPOSCODE?: string;
  STRDOMAIN?: string;
  STRCOMPANY?: string;
  STRLASTNAME?: string;
};

export const createPreparedUser = (props: createPreparedUserProps) => {};

type benutzerProps = Partial<typeof benutzer>;
export const check = (
  user: createPreparedUserProps,
  _benutzer: benutzerProps
) => {
  const {
    STRPOSCODE = "sd",
    STRDOMAIN = "whatever.senfin",
    STRCOMPANY = "mock",
    STRLASTNAME = "AnyName",
  } = user;

  createUser({}).then(({ login, user }) => {
    cy.db(
      `UPDATE "DSUSER" SET "STRLASTNAME"='${STRLASTNAME}', "STRPOSCODE"='${STRPOSCODE}',STRDOMAIN='${STRDOMAIN}',STRCOMPANY='${STRCOMPANY}'  WHERE STRLOGIN='${login.name}'`
    ).then((r) => {
      runImportWorkflow().then(() => {
        getPersonal().then((res) => {
          const item = res.find((i) => i.REF_BENUTZER === user.LID);
          if (_benutzer && item) {
            Object.entries(_benutzer).forEach(([key, val]) => {
              expect(item[key], key).to.eq(val);
            });
          }
        });
      });
    });
  });
};

export const runImportWorkflow = () => {
  return cy.runWorkflow({
    id: "3B90AE46D592E8AE66F42EF1DF48BA31D3C211CC",
    name: "Personal Import",
    payload: {
      timerGuid: "AF75430F755204BA3CF405740BA20A387AE57EDC",
    },
  });
};
