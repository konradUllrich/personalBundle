import Ix from "../ix";
import { Page } from "@playwright/test";
import { personal } from "./personalData";
import { faker } from "@faker-js/faker";
import { Prisma } from "@prisma/client";
import { getArbeitszeitPreset } from "./zeiterfassungsData";

export default class Personal {
  constructor(
    public readonly ix: Ix,
    public readonly page: Page
  ) {}
  async createPersonal(
    overwrite?: Partial<
      Parameters<typeof this.ix.prisma.per_t_personal.create>[0]["data"]
    >
  ) {
    const [user] = await this.ix.createUsers();
    const _personal = await this.ix.prisma.per_t_personal.create({
      //@ts-ignore
      data: {
        ...personal,
        strid: faker.string.uuid(),
        ref_benutzer: user.data.lid,
        str_nachname: user.loginvalues.lastName,
        str_vorname: user.loginvalues.firstName,
        str_vollername: user.loginvalues.name,
        ...overwrite,
      },
    });
    return { user, personal: _personal };
  }

  getArbeitszeitendata(
    personalId: string,
    arbeitszeitenPreset: keyof typeof getArbeitszeitPreset = "40h"
  ): Prisma.Args<typeof this.ix.prisma.per_t_pers_azk, "create">["data"] {
    return {
      ...getArbeitszeitPreset[arbeitszeitenPreset],
      strid: faker.string.uuid(),
      fkstrid: personalId,
    };
  }

  async createArbeitszeiten(
    personalId: string,
    arbeitszeitenPreset: keyof typeof getArbeitszeitPreset = "40h"
  ) {
    const data = this.getArbeitszeitendata(personalId, arbeitszeitenPreset);
    await this.ix.prisma.per_t_pers_azk.create({ data });
  }
}
