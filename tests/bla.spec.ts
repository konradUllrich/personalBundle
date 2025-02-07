import { Page, BrowserContext, test } from "@playwright/test";
import Personal from "./setup/Ix/dataProvider/Personalx";
import Ix from "./setup/Ix/ix";
import Zeiterfassung from "./setup/Ix/dataProvider/Zeiterfassung";
import moment from "moment";

const createTestdata = async ({
  virtuel = false,
}: {
  ix: Ix;
  virtuel?: boolean;
}) => {
  const personal = new Personal();
  const zeiterfassung = new Zeiterfassung();
  const p = await personal.createPersonal({
    l_startwertauestunden: 2,
    l_startwertaueminuten: 20,
    l_startwertauesekunden: 0,
  });
  await personal.createArbeitszeiten(p.personal.strid, "40h");
  if (virtuel) {
    await zeiterfassung.createZeiterfassungsBögenVirtual({
      ref_benutzer: p.user.data.lid,
    });
  } else {
    await zeiterfassung.createZeiterfassungsBögen(p.user.data.lid);
  }

  return { personal: p };
};

test("blu", async ({ page, context }) => {
  const ix = new Ix(page, context);
  await ix.clear();
  const { personal } = await createTestdata({ ix });
  const { personal: personal2 } = await createTestdata({ ix });

  await ix.login(personal.user.loginvalues);

  await page.goto(ix.getUrl("zeiterfassung"));
});
