import { createMany } from "cypress/support/create";

import { quatalBericht } from "../helper/Quartalsberich";

// const { up, down } = createMany({
//   table: "ZE_T_QUARTALSBERICHT",
//   items: quatalBericht,
//   values: {
//     L_JAHR: () => 2021,
//     STR_QUARTAL: (_faker, v, index) => `${index + 1}. Quartal ${v.L_JAHR}`,
//   },
//   count: 4,
// });
// const { up: up2 } = createMany({
//   table: "ZE_T_QUARTALSBERICHT",
//   items: quatalBericht,
//   values: {
//     L_JAHR: (faker) =>
//       faker.helpers.arrayElement([2021, 2021, 2021, 2022, 2024]),
//     STR_QUARTAL: (faker, v, index) => `${(index % 4) + 1}. Quartal ${v.L_JAHR}`,
//   },
//   count: 40,
// });

describe("create Quatalsbericht", () => {
  before(() => {});
  after(() => {
    //down();
  });
  it("should create if hours => 50 / ampel:gelb", () => {});
});
