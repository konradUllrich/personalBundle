import { deleteAllPersonalData } from "cypress/e2e/Personal/helper/Personal";
import { createMonth, check } from "./create_quatalsbericht.helper";

describe("create Quatalsbericht", () => {
  beforeEach(() => {
    deleteAllPersonalData();
    cy.visit("/");
  });
  afterEach(() => {
    deleteAllPersonalData();
  });
  it("should create if hours => 50 / ampel:gelb", () => {
    createMonth({ hours: [50, 40, 20] });
    check({ created: true, ampel: "gelb" });
  });
  it("should not create if hours < 50 ", () => {
    createMonth({ hours: [49, 40, 2] });
    check({ created: false });
  });
  it("should not create if hours =< -1 / ampel:grün", () => {
    createMonth({ hours: [49, 40, -1] });
    check({ created: true, ampel: "grün" });
  });
  it("should create if hours -12 / ampel:gelbDefizit", () => {
    createMonth({ hours: [10, -12, 3] });
    check({ created: true, ampel: "gelbDefizit" });
  });
  it("should create if hours -24 / ampel:gelbDefizit ", () => {
    createMonth({ hours: [10, -24, 3] });
    check({ created: true, ampel: "rotDefizit" });
  });
  it("should use the Biggest Violation for ampel:gelbDefizit ", () => {
    createMonth({ hours: [60, -14, 3] });
    check({ created: true, ampel: "gelbDefizit" });
  });
  it("should use the Last Violation if violation is equal ampel:gelbDefizit ", () => {
    createMonth({ hours: [60, -14, 64] });
    check({ created: true, ampel: "gelb" });
  });

  it("should create previous Quartal", () => {
    const jahr = 2010;
    const quartal = 1;
    createMonth({ hours: [60, -14, 64], jahr, quartal });
    createMonth({ hours: [60, -14, 64], jahr: jahr - 1, quartal: 4 });
    check({
      created: true,
      ampel: "gelb",
      jahr,
      quartal,
      recreatePreviousQuartal: "yes",
    });
    check({
      created: true,
      ampel: "gelb",
      jahr: jahr - 1,
      quartal: 4,
      runWorkflow: false,
    });
  });
});
