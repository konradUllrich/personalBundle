import { personal } from "./personalData";
import { faker } from "@faker-js/faker";
import { Prisma } from "@prisma/client";
import { getArbeitszeitPreset } from "./zeiterfassungsData";
import { prisma } from "tests/setup/db";
import { ix } from "../ix2";

export default class Personal {
  async createPersonal(
    overwrite?: Partial<
      Parameters<typeof prisma.per_t_personal.create>[0]["data"]
    >
  ) {
    const [user] = await ix.createUsers();
    const _personal = await prisma.per_t_personal.create({
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

  async getPersonalData(personalId: string) {
    return await prisma.per_t_personal.findUnique({
      where: { strid: personalId },
      include: {
        per_t_pers_azk: true,
      },
    });
  }

  getArbeitszeitendata(
    personalId: string,
    arbeitszeitenPreset: keyof typeof getArbeitszeitPreset = "40h"
  ): Prisma.Args<typeof prisma.per_t_pers_azk, "create">["data"] {
    const arbeitszeiten = {
      ...getArbeitszeitPreset[arbeitszeitenPreset],
      strid: faker.string.uuid(),
      fkstrid: personalId,
    };

    return arbeitszeiten;
  }

  async createArbeitszeiten(
    personalId: string,
    arbeitszeitenPreset: keyof typeof getArbeitszeitPreset = "40h"
  ) {
    const data = this.getArbeitszeitendata(personalId, arbeitszeitenPreset);
    await prisma.per_t_pers_azk.create({ data });
  }
}
