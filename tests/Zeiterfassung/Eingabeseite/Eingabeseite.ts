import { Page } from "@playwright/test";
import { test, expect } from "tests/setup/db";
import Personal from "tests/setup/Ix/dataProvider/Personalx";
import Zeiterfassung from "tests/setup/Ix/dataProvider/Zeiterfassung";

import { buchungsarten } from "./Helper/buchungsarten";
import { ix } from "tests/setup/Ix/ix2";

export class Eingabeseite {
  isOld = false;
  constructor(public readonly page: Page) {}

  buchungsarten = buchungsarten;
  async gotoEingabeseite(date = "13.01.2026") {
    await this.page.goto(ix.getUrl("zeiterfassung"));
    await this.page.getByText("Januar").click();
    await this.page.getByText(date).click();
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

  async cancle() {
    await this.page.getByRole("button", { name: "Abbrechen" }).click();
  }

  async addAnwesenheit() {
    await this.page.locator(`a[title="+ Neue Zeit hinzufügen"]`).click();
  }
  async addUnterbrechung() {
    await this.page
      .locator(`a[title="+ Neue Unterbrechung hinzufügen"]`)
      .click();
  }

  async expectSummary(props: {
    ZF_IST: string;
    ZF_IST_MIN?: string;
    ZF_SALDO: string;
    ZF_SALDO_MIN?: string;
    ZF_SALDO_DT?: string;
    ZF_PAUSE?: string;
    ZF_PAUSE_DT?: string;
    ANW_STANDARD?: string;
    message?: string;
  }) {
    const { message = "", ...rest } = props;
    const {
      ZF_IST,
      ZF_IST_MIN = "",
      ZF_SALDO,
      ZF_SALDO_MIN = "",
      ZF_SALDO_DT,
      ZF_PAUSE,
      ZF_PAUSE_DT,
      ANW_STANDARD = "",
    } = { ...rest };

    const soll = (await this.ZF_SOLL().inputValue()) as string;
    await expect(this.ZF_SOLL_SEK()).toHaveValue(this.parseHhMmSs(soll, "sec"));
    // await expect(this.ZF_SOLL_MIN()).toHaveValue(this.parseHhMmSs(soll, "min"));
    await expect
      .soft(this.ZF_IST(), `ZF_IST at ${message} should be right`)
      .toHaveValue(ZF_IST);
    await expect
      .soft(this.ZF_IST_DT(), `ZF_IST_DT at ${message} should be right`)
      .toHaveValue(ZF_IST.substr(0, 5));

    //todo: can possibly be erased
    if (ZF_IST_MIN) {
      await expect
        .soft(this.ZF_IST_MIN(), `ZF_IST_MIN at ${message} should be right`)
        .toHaveValue(ZF_IST_MIN);
    }

    await expect
      .soft(this.ZF_IST_SEK(), `ZF_IST_SEK at ${message} should be right`)
      .toHaveValue(this.parseHhMmSs(ZF_IST, "sec"));
    await expect
      .soft(this.ZF_SALDO(), `ZF_SALDO at ${message} should be right`)
      .toHaveValue(ZF_SALDO);
    await expect
      .soft(this.ZF_SALDO_DT(), `ZF_SALDO_DT at ${message} should be right`)
      .toHaveValue(ZF_SALDO_DT || ZF_SALDO.replaceAll("-", "").substr(0, 5));
    //todo: can possibly be erased
    if (ZF_SALDO_MIN) {
      await expect
        .soft(this.ZF_SALDO_MIN(), `ZF_SALDO_MIN at ${message} should be right`)
        .toHaveValue(ZF_SALDO_MIN);
    }

    await expect
      .soft(this.ZF_SALDO_SEK(), `ZF_SALDO_SEK at ${message} should be right`)
      .toHaveValue(this.parseHhMmSs(ZF_SALDO, "sec"));

    const pause = typeof ZF_PAUSE === "string" ? ZF_PAUSE : "00:00:00";
    await expect
      .soft(this.ZF_PAUSE(), `ZF_PAUSE at ${message} should be right`)
      .toHaveValue(pause);
    await expect
      .soft(this.ZF_PAUSE_DT(), `ZF_PAUSE_DT at ${message} should be right`)
      .toHaveValue(typeof ZF_PAUSE_DT === "string" ? ZF_PAUSE_DT : pause);

    await expect
      .soft(this.ANW_STANDARD(), `ANW_STANDARD at ${message} should be right`)
      .toHaveValue(ANW_STANDARD);

    // Server
    // const serverValues = await this.getServevalues();
    // const sv = serverValues.zfValues;
    // console.log(sv);

    // await expect(sv.ZF_IST, `server ZF_IST`).toBe(ZF_IST);
    // await expect(sv.ZF_IST_DT, `server ZF_IST_DT`).toBe(ZF_IST);
    // await expect(sv.ZF_IST_MIN, `server ZF_IST_MIN`).toBe(ZF_IST_MIN);

    // await expect(sv.ZF_SALDO.toString(), `server ZF_SALDO`).toBe(ZF_SALDO);
    // await expect(sv.ZF_SALDO_DT, `server ZF_SALDO_DT`).toBe(
    //   server?.ZF_SALDO_DT || ZF_SALDO_DT || ZF_SALDO
    // );
    // await expect(sv.ZF_SALDO_SEK.toString(), `server ZF_SALDO_SEK`).toBe(
    //   this.site.parseHhMmSs(ZF_SALDO, "sec")
    // );
    // await expect(sv.ZF_SALDO_MIN.toString(), `server ZF_SALDO_SEK`).toBe(
    //   this.site.parseHhMmSs(ZF_SALDO, "min")
    // );
    // await expect(sv.ZF_PAUSE, `server ZF_PAUSE`).toBe(ZF_PAUSE);
    // await expect(sv.ZF_PAUSE_DT, `server ZF_PAUSE_DT`).toBe(
    //   typeof ZF_PAUSE_DT === "string" ? ZF_PAUSE_DT : pause
    // );
    // await expect(sv.ANW_STANDARD, `server ANW_STANDARD`).toBe(
    //   server?.ANW_STANDARD || ANW_STANDARD
    // );
  }

  async expectAnwesenheit({
    dauerInseconds,
    dauer,
    item = 0,
    inputEnabled = true,
    message = "",
  }: {
    dauerInseconds?: number;
    dauer?: string;
    item?: number;
    inputEnabled?: boolean;
    message?: string;
  }) {
    await expect(
      this.ANW_SEKUNDEN(item),
      `dauerInSeconds ${message} should be ${dauerInseconds}`
    ).toHaveValue(dauerInseconds?.toString() || "0");
    await expect
      .soft(this.ANW_DAUER(item), `dauer ${message} should be right`)
      .toHaveValue(typeof dauer === "string" ? dauer : "");

    await expect
      .soft(
        await this.ANW_VON(item).isEditable(),
        `ANW_VON ${message} Editable`
      )
      .toBe(inputEnabled);

    await expect
      .soft(
        await this.ANW_BIS(item).isEditable(),
        `ANW_BIS ${message} Editable`
      )
      .toBe(inputEnabled);

    if (inputEnabled === false) {
      await expect.soft(await this.ANW_VON(item)).toHaveValue("");
      await expect.soft(await this.ANW_BIS(item)).toHaveValue("");
    }

    const a = this.page.locator('select[name="ANW_ART"]');
  }

  async expectCanAddMore(canAddMore: boolean) {
    await expect(
      await this.page.locator(`a[title="+ Neue Zeit hinzufügen"]`).isVisible(),
      `Button 'Neue Anwesenheit hinzufügen' should ${
        canAddMore ? "" : "not"
      } be visible`
    ).toBe(canAddMore);
  }

  public static async prepareCases<
    T extends {
      name: string;
      beschäftignunsart?: number;
      arbeitszeitenpreset?: Parameters<typeof _personal.createArbeitszeiten>[1];
    },
  >(testCases: T[]) {
    await ix.clear();
    const _personal = new Personal();
    const _zeiterfassung = new Zeiterfassung();
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
