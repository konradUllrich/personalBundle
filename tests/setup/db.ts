import { test as base } from "@playwright/test";
import DBSetup from "./DB/DBsetup";
import IX from "./Ix/ix";

type MYFixtures = {
  dataBase: DBSetup;
  ix: IX;
};

export const test = base.extend<MYFixtures>({
  dataBase: async ({}, use) => {
    const dataBase = new DBSetup();
    await use(dataBase);
  },

  ix: async ({ page, context }, use) => {
    const ix = new IX(page, context);

    await use(ix);
  },
});

export { expect } from "@playwright/test";
