import { Page } from "@playwright/test";
import { test, expect } from "tests/setup/db";
import Personal from "tests/setup/Ix/dataProvider/Personalx";
import Zeiterfassung from "tests/setup/Ix/dataProvider/Zeiterfassung";
import Ix from "tests/setup/Ix/ix";

export class Eingabeseite {
  constructor(
    public readonly ix: Ix,
    public readonly page: Page
  ) {}

  buchungsarten = {
    Dienstgebäude: "34564DF98301C17B54CB091021055D1A31F6B619",
    "AZV-tag": "C767616C43E8E6D92920713686ADB92281B6C08C",
    Krank: "F5A934C09AD272557A65F7D445B51748E369D16D",
    Dienstabbruch: "4BB254A2A1B06C176D3886178E61FFF4EC4C3A60",
    Zeitausgleich: "0CA13234FA6F2DB0286CB44EE4D453FCC6ADF2F5",
    TeleArbeit: "E04EA89D81BBE3081023F43ADF9A9AACEBC4E3F7",
  };

  async gotoEingabeseite() {
    await this.page.goto(this.ix.getUrl("zeiterfassung"));
    await this.page.getByText("Januar").click();
    await this.page.getByText("13.01.2025").click();
  }

  async setUnterbrechung({
    von,
    bis,
    item = 0,
  }: {
    item?: number;
    von?: string;
    bis?: string;
    buchungsart?: keyof Eingabeseite["buchungsarten"];
  }) {
    if (von) {
      await this.page.locator('input[name="U_VON"]').nth(item).fill(von);
    }
    if (bis) {
      await this.page.locator('input[name="U_BIS"]').nth(item).fill(bis);
    }
    await this.page.getByRole("heading", { name: "Zusammenfassung" }).click();
  }

  async setAnwesenheit({
    von,
    bis,
    item = 0,
    buchungsart = "Dienstgebäude",
  }: {
    item?: number;
    von?: string;
    bis?: string;
    buchungsart?: keyof Eingabeseite["buchungsarten"];
  }) {
    await this.page
      .locator('select[name="ANW_ART"]')
      .nth(item)
      .selectOption(this.buchungsarten[buchungsart]);

    if (von) {
      await this.page.getByRole("textbox", { name: "von" }).nth(item).fill(von);
    }
    if (bis) {
      await this.page.getByRole("textbox", { name: "bis" }).nth(item).fill(bis);
    }

    await this.page.getByRole("heading", { name: "Zusammenfassung" }).click();
  }

  ZF_SOLL() {
    return this.page.locator(`input[name="ZF_SOLL"]`);
  }
  ZF_SOLL_SEK() {
    return this.page.locator(`input[name="ZF_SOLL_SEK"]`);
  }
  ZF_SOLL_MIN() {
    return this.page.locator(`input[name="ZF_SOLL_MIN"]`);
  }
  ZF_IST() {
    return this.page.locator(`input[name="ZF_IST"]`);
  }
  ZF_IST_DT() {
    return this.page.locator(`input[name="ZF_IST_DT"]`);
  }
  ZF_IST_MIN() {
    return this.page.locator(`input[name="ZF_IST_MIN"]`);
  }
  ZF_IST_SEK() {
    return this.page.locator(`input[name="ZF_IST_SEK"]`);
  }
  ZF_SALDO() {
    return this.page.locator(`input[name="ZF_SALDO"]`);
  }
  ZF_SALDO_DT() {
    return this.page.locator(`input[name="ZF_SALDO_DT"]`);
  }
  ZF_SALDO_MIN() {
    return this.page.locator(`input[name="ZF_SALDO_MIN"]`);
  }
  ZF_SALDO_SEK() {
    return this.page.locator(`input[name="ZF_SALDO_SEK"]`);
  }
  ZF_PAUSE() {
    return this.page.locator(`input[name="ZF_PAUSE"]`);
  }
  ZF_PAUSE_DT() {
    return this.page.locator(`input[name="ZF_PAUSE_DT"]`);
  }
  ANW_STANDARD() {
    return this.page.locator(`input[name="ANW_STANDARD"]`);
  }
  // Item
  ANW_SEKUNDEN(index = 0) {
    return this.page.locator(`input[name="ANW_SEKUNDEN"]`).nth(index);
  }
  ANW_DAUER(index = 0) {
    return this.page.locator(`input[name="ANW_DAUER"]`).nth(index);
  }
  ANW_VON(index = 0) {
    return this.page.locator(`input[name="ANW_VON"]`).nth(index);
  }
  ANW_BIS(index = 0) {
    return this.page.locator(`input[name="ANW_BIS"]`).nth(index);
  }

  parseHhMmSs(timeString: string, to: "min" | "sec" = "sec") {
    const isNegative = timeString.startsWith("-");
    const time = timeString.replace("-", "");
    const [hours, minutes, seconds] = time.split(":").map(Number);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    totalSeconds = isNegative ? -totalSeconds : totalSeconds;
    if (to === "min") {
      return (totalSeconds / 60).toString();
    }
    return totalSeconds.toString();
  }

  async Save() {
    await this.page.getByRole("button", { name: "Speichern" }).click();
  }

  async addAnwesenheit() {
    await this.page.locator(`a[title="+ Neue Zeit hinzufügen"]`).click();
  }
  async addUnterbrechung() {
    await this.page
      .locator(`a[title="+ Neue Unterbrechung hinzufügen"]`)
      .click();
  }

  async expectCanAddMore(canAddMore: boolean) {
    await expect(
      await this.page.locator(`a[title="+ Neue Zeit hinzufügen"]`).isVisible(),
      `Button 'Neue Anwesenheit hinzufügen' should ${
        canAddMore ? "" : "not"
      } be visible`
    ).toBe(canAddMore);
  }

  async prepareCases<
    T extends {
      name: string;
      beschäftignunsart?: number;
      arbeitszeitenpreset?: Parameters<typeof _personal.createArbeitszeiten>[1];
    },
  >(testCases: T[]) {
    await this.ix.clear();
    const _personal = new Personal(this.ix, this.page);
    const _zeiterfassung = new Zeiterfassung(this.ix, this.page);
    const items: ((typeof testCases)[number] &
      Awaited<ReturnType<typeof _personal.createPersonal>>)[] = [];
    for (let testCase of testCases) {
      const a = await _personal.createPersonal({
        ref_art: testCase.beschäftignunsart || null,
      });
      await _personal.createArbeitszeiten(
        a.personal.strid,
        testCase.arbeitszeitenpreset
      );
      items.push({ ...testCase, ...a });
    }
    await _zeiterfassung.createZeiterfassungsBögen(
      items[items.length - 1].user.data.lid
    );
    return items;
  }
}
