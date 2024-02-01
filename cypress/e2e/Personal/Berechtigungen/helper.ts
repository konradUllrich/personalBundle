import { createUser } from "cypress/intrexx-cypress/user/createUser";
import { createPersonal } from "../helper/Personal";

const shouldFn = ({ title, query }: { title: string; query?: string }) => {
  return (should: "be.visible" | "not.exist") => {
    cy.get(query ? query : `a[title="${title}"]`).should(should, title);
  };
};

export const einsteunngenShould = shouldFn({ title: "Einstellungen" });
export const büroleitungVerwaltenShould = shouldFn({
  title: "Büroleitungen verwalten",
});
export const organisationsbaumBearbeitenShould = shouldFn({
  title: "Organisationsbaum bearbeiten",
});
export const personalErfassenShould = shouldFn({
  title: "Personal erfassen",
});
export const meinePersonaldatenShould = shouldFn({
  title: "Meine Personaldaten",
  query: "#ID_Portlet_55016AB0E8E5322F090C294429C7AC9947278132",
});
export const loginAs = ({
  memberOf,
}: {
  memberOf: Parameters<typeof createUser>[0]["memberOf"];
}) => {
  createPersonal({
    personalValues: {},
    userValues: { memberOf: ["System/Benutzer", ...memberOf] },
  }).then(({ user, login }) => {
    cy.login(login);
  });
  cy.get("#A-79A31F5A68CB04830585238B835AD5FE939EE2B5").click({
    force: true,
  });
};
