import {
  createPersonal,
  deleteAllPersonalData,
} from "cypress/e2e/Personal/helper/Personal";
import { createMany } from "../../../support/create";
import { getQuartalberichte, quatalBericht } from "../helper/Quartalsberich";

const prepare = () => {
  createPersonal({ personalValues: {} }).then(({ personal }) => {
    createMany({
      table: "ZE_T_QUARTALSBERICHT",
      items: quatalBericht,
      values: {
        L_JAHR: 2016,
        STR_QUARTAL: `1. Quartal 2014`,
        REF_PERSONAL: personal.STRID,
      },
      count: 2,
    }).up();

    createMany({
      table: "ZE_T_QUARTALSBERICHT",
      items: quatalBericht,
      values: {
        L_JAHR: (faker) => faker.helpers.arrayElement([2017, 2018]),
        STR_QUARTAL: (faker, v) =>
          faker.helpers.arrayElement(
            [1, 2, 3, 4].map((i) => `${i}. Quartal ${v.L_JAHR}`)
          ),
        REF_PERSONAL: personal.STRID,
      },
      count: 20,
    }).up();
  });
};

describe("erase Quatalbericht", () => {
  beforeEach(() => {
    cy.visit("/");
    deleteAllPersonalData();
  });
  after(() => {
    deleteAllPersonalData();
  });
  it.only("passes", () => {
    prepare();
    getQuartalberichte().then((res) => assert.equal(res.length, 22));
    getQuartalberichte(`WHERE STR_QUARTAL='1. Quartal 2014'`).then((res) =>
      assert.equal(res.length, 2)
    );
    cy.runWorkflow({
      id: "74DC1F2A8E2AADD28B04B18E99DC5A24D627E56D",
      payload: {
        quartal: 1,
        jahr: 2016,
      },
    });
    getQuartalberichte(`WHERE STR_QUARTAL='1. Quartal 2014'`).then((res) =>
      assert.equal(res.length, 0)
    );
    getQuartalberichte().then((res) => assert.equal(res.length, 20));
  });
});
