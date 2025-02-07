import { Page } from "@playwright/test";
import Ix from "tests/setup/Ix/ix";
import { test, expect, prisma } from "tests/setup/db";
import { testItem } from "./TestBuilder";
import { Eingabeseite } from "../Eingabeseite";

export default class DatabaseTest {
  constructor(
    // public readonly ix: Ix,
    public readonly page: Page,
    public readonly site: Eingabeseite
  ) {}

  async testDatabaseData(props: testItem) {
    const { items } = props;
    const { day, timeItems } = await this.getDayDataAndRecover();

    const expectedDay = Object.values(items)[Object.keys(items).length - 1];

    expect(timeItems.length).toBe(Object.entries(items).length);

    expect(this.site.parseHhMmSs(expectedDay.expect.ZF_IST, "sec")).toBe(
      day.l_arbeitszeitistsekunden + ""
    );

    for (let [name, item] of Object.entries(items)) {
      const foundItem = timeItems.find(
        (i) => i.l_dauersekunden === item.expectAnwesenheit.dauerInseconds
      );

      expect(foundItem).toBeDefined();

      // console.log({ foundItem });
    }

    console.log({ day, timeItems });
  }

  async getDayDataAndRecover() {
    await this.page.getByRole("button", { name: "Speichern" }).click();
    const id = await this.page
      .locator(".guid-247A207A8264FA0B6A10458361E39B64F9B67FE6")
      .textContent();

    const zeitBefore = await prisma.ze_t_m_d_zeiten.findFirst({
      where: { fkstrid: id },
    });
    const dayBefore = await prisma.ze_t_m_datum.findFirst({
      where: { strid: id },
    });
    await this.page
      .locator(".guid-247A207A8264FA0B6A10458361E39B64F9B67FE6")
      .waitFor({ state: "detached" });
    const timeItems = await prisma.ze_t_m_d_zeiten.findMany({
      where: { fkstrid: id },
    });
    const day = await prisma.ze_t_m_datum.findFirst({
      where: { strid: id },
    });
    await prisma.ze_t_m_d_zeiten.deleteMany({
      where: { fkstrid: id },
    });
    await prisma.ze_t_m_datum.deleteMany({
      where: { strid: id },
    });
    await prisma.ze_t_m_datum.create({
      data: { ...dayBefore },
    });
    await prisma.ze_t_m_d_zeiten.create({
      data: { ...zeitBefore },
    });
    return { timeItems, day };
  }
}
