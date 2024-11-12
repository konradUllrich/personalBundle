import { Eingabeseite } from "../Eingabeseite";
import { expect } from "tests/setup/db";
import DatabaseTest from "./DatabaseTest";

export type timeItem = {
  type?: "unterbrechung" | "anwesenheit";
  expectAnwesenheit: Parameters<TestBuilder["expectAnwesenheit"]>[0];
  expect: Parameters<TestBuilder["expectSummary"]>[0];
  expectCanAddMore?: boolean;
} & Parameters<Eingabeseite["setAnwesenheit"]>[0];

export type testItem = {
  name?: string;
  items: Record<string, timeItem>;
};

export default class TestBuilder {
  isOld = false;
  constructor(public readonly site: Eingabeseite) {}
  async getServevalues() {
    const res = await this.site.page.evaluate(() => {
      //@ts-ignore
      return handleEingabeSeite();
    });
    return res;
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
      this.site.ANW_SEKUNDEN(item),
      `dauerInSeconds ${message} should be ${dauerInseconds}`
    ).toHaveValue(dauerInseconds?.toString() || "0");
    await expect
      .soft(this.site.ANW_DAUER(item), `dauer ${message} should be right`)
      .toHaveValue(typeof dauer === "string" ? dauer : "");

    await expect
      .soft(
        await this.site.ANW_VON(item).isEditable(),
        `ANW_VON ${message} Editable`
      )
      .toBe(inputEnabled);

    await expect
      .soft(
        await this.site.ANW_BIS(item).isEditable(),
        `ANW_BIS ${message} Editable`
      )
      .toBe(inputEnabled);

    if (inputEnabled === false) {
      await expect.soft(await this.site.ANW_VON(item)).toHaveValue("");
      await expect.soft(await this.site.ANW_BIS(item)).toHaveValue("");
    }

    const a = this.site.page.locator('select[name="ANW_ART"]');
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
    old?: {
      ANW_STANDARD?: string;
      ZF_SALDO_DT?: string;
    };
  }) {
    const { old, message = "", ...rest } = props;
    const {
      ZF_IST,
      ZF_IST_MIN = "",
      ZF_SALDO,
      ZF_SALDO_MIN = "",
      ZF_SALDO_DT,
      ZF_PAUSE,
      ZF_PAUSE_DT,
      ANW_STANDARD = "",
    } = { ...rest, ...(this.isOld ? old : {}) };

    const soll = (await this.site.ZF_SOLL().inputValue()) as string;
    await expect(this.site.ZF_SOLL_SEK()).toHaveValue(
      this.site.parseHhMmSs(soll, "sec")
    );
    await expect(this.site.ZF_SOLL_MIN()).toHaveValue(
      this.site.parseHhMmSs(soll, "min")
    );
    await expect
      .soft(this.site.ZF_IST(), `ZF_IST at ${message} should be right`)
      .toHaveValue(ZF_IST);
    await expect
      .soft(this.site.ZF_IST_DT(), `ZF_IST_DT at ${message} should be right`)
      .toHaveValue(ZF_IST.substr(0, 5));

    //todo: can possibly be erased
    await expect
      .soft(this.site.ZF_IST_MIN(), `ZF_IST_MIN at ${message} should be right`)
      .toHaveValue(ZF_IST_MIN);
    await expect
      .soft(this.site.ZF_IST_SEK(), `ZF_IST_SEK at ${message} should be right`)
      .toHaveValue(this.site.parseHhMmSs(ZF_IST, "sec"));
    await expect
      .soft(this.site.ZF_SALDO(), `ZF_SALDO at ${message} should be right`)
      .toHaveValue(ZF_SALDO);
    await expect
      .soft(
        this.site.ZF_SALDO_DT(),
        `ZF_SALDO_DT at ${message} should be right`
      )
      .toHaveValue(ZF_SALDO_DT || ZF_SALDO.replaceAll("-", "").substr(0, 5));
    //todo: can possibly be erased
    await expect
      .soft(
        this.site.ZF_SALDO_MIN(),
        `ZF_SALDO_MIN at ${message} should be right`
      )
      .toHaveValue(ZF_SALDO_MIN);
    await expect
      .soft(
        this.site.ZF_SALDO_SEK(),
        `ZF_SALDO_SEK at ${message} should be right`
      )
      .toHaveValue(this.site.parseHhMmSs(ZF_SALDO, "sec"));

    const pause = typeof ZF_PAUSE === "string" ? ZF_PAUSE : "00:00:00";
    await expect
      .soft(this.site.ZF_PAUSE(), `ZF_PAUSE at ${message} should be right`)
      .toHaveValue(pause);
    await expect
      .soft(
        this.site.ZF_PAUSE_DT(),
        `ZF_PAUSE_DT at ${message} should be right`
      )
      .toHaveValue(typeof ZF_PAUSE_DT === "string" ? ZF_PAUSE_DT : pause);
    await expect
      .soft(
        this.site.ANW_STANDARD(),
        `ANW_STANDARD at ${message} should be right`
      )
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

  async expectUnterbrechung({
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
      await this.site.page.locator(`input[name="U_SEKUNDEN"]`).nth(item),
      `U_SEKUNDEN ${message} should be ${dauerInseconds}`
    ).toHaveValue(dauerInseconds?.toString() || "0");
    await expect
      .soft(
        await this.site.page.locator(`input[name="U_DAUER"]`).nth(item),
        `U_DAUER unterbrechung ${message} should be right`
      )
      .toHaveValue(typeof dauer === "string" ? dauer : "");
  }

  async build(props: testItem) {
    const { name, items } = props;
    let index = 0;
    let indexUnterbrechung = 0;
    for (const [key, item] of Object.entries(items)) {
      const { expectAnwesenheit, expect, expectCanAddMore, type, ...rest } =
        item;
      if (index > 0) {
        if (type === "unterbrechung") {
          await this.site.addUnterbrechung();
        } else {
          await this.site.addAnwesenheit();
        }
      }
      if (type === "unterbrechung") {
        await this.site.setUnterbrechung({ item: indexUnterbrechung, ...rest });
        await this.expectUnterbrechung({
          item: indexUnterbrechung,
          message: `at item ${key}`,
          ...expectAnwesenheit,
        });
        indexUnterbrechung++;
      } else {
        await this.site.setAnwesenheit({ item: index, ...rest });
        await this.expectAnwesenheit({
          item: index,
          message: `at item ${key}`,
          ...expectAnwesenheit,
        });

        if (typeof expectCanAddMore === "boolean") {
          await this.site.expectCanAddMore(expectCanAddMore);
        }
      }
      await this.expectSummary({ message: `at item ${key}`, ...expect });

      index++;
    }

    const dbTest = new DatabaseTest(this.site.ix, this.site.page, this.site);

    await dbTest.testDatabaseData(props);
  }
}
