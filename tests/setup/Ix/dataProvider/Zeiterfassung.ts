import { Page, expect } from "@playwright/test";
import Ix from "../ix";

export default class Zeiterfassung {
  constructor(
    public readonly ix: Ix,
    public readonly page: Page
  ) {}

  async createZeiterfassungsBögen(userId: number) {
    await this.ix.runWorkflow({
      id: "3B90AE46D592E8AE66F42EF1DF48BA31D3C211CC",
      payload: { timerGuid: "4FA377303D988BD8FE0A91F5522AE494AFB13BD0" },
    });
    await expect(async () => {
      const b = await this.ix.prisma.ze_t_monat.findMany({
        where: { ref_benutzer: userId },
      });
      await expect(b.length).toBeGreaterThan(0);
    }).toPass({ intervals: [300], timeout: 30000 });
  }
}
