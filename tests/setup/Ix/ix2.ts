import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { request } from "@playwright/test";

import { faker } from "@faker-js/faker";
import { expect, chromium } from "@playwright/test";

import fs from "fs";

type FakeUserInput = {
  firstName: string;
  lastName: string;
  memberOf?: number[];
  pw: string;
};

class CookiePresist {
  static fileName: string = "userPresist.json";
  static data: Record<string, any>;

  static getJson(): null | typeof this.data {
    try {
      let rawdata = fs.readFileSync(this.fileName);
      //@ts-ignore
      return JSON.parse(rawdata);
    } catch (error) {
      return null;
    }
  }
  static getUserCookie(name: string) {
    const data = this.getJson();
    if (!data) return null;
    return data[name] ? data[name] : null;
  }
  static writeUserCookie(name: string, cookies: any) {
    const data = this.getJson();
    const nextdata = data ? data : {};
    nextdata[name] = cookies;
    fs.writeFileSync(this.fileName, JSON.stringify(nextdata));
  }
}

export default class Ix {
  async getPage() {
    const browserChromium = await chromium.launch({ headless: true });
    const context = await browserChromium.newContext();
    const page = await browserChromium.newPage();
    await page.goto("http://localhost:1337/");
    return { page, context };
  }

  async runWorkflow({ id, payload }: { id: string; payload }) {
    const { page } = await this.getPage();
    await page.evaluate(
      ([id, payload]) => {
        //@ts-ignore
        triggerUserWorkflowEvent(id, payload, { async: true });
      },
      [id, payload]
    );
  }
  async runTimer(timerGuid: string) {
    await this.runWorkflow({
      id: "3B90AE46D592E8AE66F42EF1DF48BA31D3C211CC",
      payload: { timerGuid },
    });
  }

  async login({
    name,
    pw,
    goto = "/",
  }: {
    name: string;
    pw: string;
    goto: string;
  }) {
    const { page, context } = await this.getPage();
    const cookie = CookiePresist.getUserCookie(name);
    if (cookie) {
      console.log(`login ${name} with cookie`);
      context.addCookies(cookie);
      await page.goto(goto);
      return;
    }
    await context.clearCookies();
    console.log(`login ${name} with Api`);
    const req = await request.newContext();
    const res = await req.post(`/service/login/login`, {
      data: {
        credentials: {
          userName: name,
          password: pw,
        },
      },
    });

    const h = res.headers();
    const apiCookie = {
      name: "co_SId",
      value: h["set-cookie"].split(";")[0].split("=")[1],
      domain: "localhost",
      path: "/",
      expires: -1,
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
    } as const;

    context.addCookies([apiCookie]);
    CookiePresist.writeUserCookie(name, [apiCookie]);

    // await this.page.goto("/");
    // await this.page.getByPlaceholder("Username").fill(name);
    // await this.page.getByPlaceholder("Password").fill(pw);
    // await this.page.getByRole("button", { name: "Login" }).click();
    // const c = await this.context.cookies();
    // CookiePresist.writeUserCookie(name, c);
  }

  getFakeuser() {
    return {
      firstName: faker.person.firstName().replaceAll("'", "").toLowerCase(),
      lastName: faker.person.lastName().replaceAll("'", "").toLowerCase(),
      pw: "cypressdoesintrexx",
      memberOf: [3, 35, 34],
    };
  }

  // async makeShureToHaveWindow() {
  //   if (this.page.url() !== "about:blank") return;
  //   await this.page.goto("/");
  // }

  async createUsers(
    props?: 1 | number | Partial<FakeUserInput> | Partial<FakeUserInput>[]
  ) {
    const { page } = await this.getPage();
    let users: FakeUserInput[] = [];
    let isOne = false;
    if (props === 1) {
      isOne = true;
    }
    if (typeof props === "number") {
      users = Array.from({ length: props }).map(() => this.getFakeuser());
    }
    if (Array.isArray(props)) {
      if (props.length === 1) {
        isOne = true;
      }
      users = props.map((i) => ({ ...this.getFakeuser(), ...i }));
    }
    if (typeof props === "object" && !Array.isArray(props)) {
      isOne = true;
      users = [{ ...this.getFakeuser(), ...props }];
    }
    if (!props) {
      isOne = true;
      users = [{ ...this.getFakeuser() }];
    }

    const userWidthName = users.map((user) => ({
      ...user,
      name: `fake-${user.firstName}.${user.lastName}`,
    }));
    for (let payload of userWidthName) {
      await page.evaluate((payload) => {
        console.log(payload);
        //@ts-ignore
        triggerUserWorkflowEvent(
          "7BFF486B0FD327DA82F905C365624870BF48C95B",
          payload,
          { async: true }
        );
      }, payload);
    }

    await expect(async () => {
      const user = await prisma.dsuser.findMany({
        where: { strlogin: { in: userWidthName.map((u) => u.name) } },
      });
      await expect(user.length).toBe(userWidthName.length);
    }).toPass({ timeout: 30000 });

    const createdUsers = await prisma.dsuser.findMany({
      where: { strlogin: { in: userWidthName.map((u) => u.name) } },
    });

    return createdUsers.map((user) => {
      const loginvalues = userWidthName.find(
        (_user) => _user.name === user.strlogin
      );
      return {
        data: user,
        loginvalues,
        login: async (goto?: string) =>
          await this.login({ goto, ...loginvalues }),
      };
    });
  }

  async clear() {
    await prisma.per_t_pers_uk.deleteMany();
    await prisma.per_t_pers_journal.deleteMany();
    const fakeUsers = await prisma.dsuser.findMany({
      where: { strlogin: { startsWith: "fake-" } },
    });
    const fakePersonal = await prisma.per_t_personal.findMany({
      where: { ref_benutzer: { in: fakeUsers.map((u) => u.lid) } },
    });

    if (fakePersonal.length < 1) return;

    const fakeMonth = await prisma.ze_t_monat.findMany({
      where: { ref_benutzer: { in: fakeUsers.map((u) => u.lid) } },
    });
    const fakeDays = await prisma.ze_t_m_datum.findMany({
      where: { fkstrid: { in: fakeMonth.map((u) => u.strid) } },
    });

    await prisma.per_t_pers_azk.deleteMany({
      where: { fkstrid: { in: fakePersonal.map((u) => u.strid) } },
    });

    await prisma.ze_t_m_d_zeiten.deleteMany({
      where: { fkstrid: { in: fakeDays.map((u) => u.strid) } },
    });
    await prisma.ze_t_m_datum.deleteMany({
      where: { fkstrid: { in: fakeMonth.map((u) => u.strid) } },
    });
    await prisma.ze_t_monat.deleteMany({
      where: { ref_benutzer: { in: fakeUsers.map((u) => u.lid) } },
    });

    await prisma.per_t_personal.deleteMany({
      where: { ref_benutzer: { in: fakeUsers.map((u) => u.lid) } },
    });
  }

  pages: { zeiterfassung: "20ACFD136A596F23A87F4C1F84D226380AFFC3E3" };

  getUrl(page: keyof typeof this.pages) {
    return `/path/app/?rq_AppGuid=B4CDF219609F40E72551229BB5C04BB34FC3769C&rq_TargetPageGuid=20ACFD136A596F23A87F4C1F84D226380AFFC3E3&qs_link=52A5B83B0FAA929FFA7AFFEBB364BDDE0CD24193&qs_mode=new&qs_page=20ACFD136A596F23A87F4C1F84D226380AFFC3E3&qs_reload=20ACFD136A596F23A87F4C1F84D226380AFFC3E3`;
  }
}

export const ix = new Ix();
