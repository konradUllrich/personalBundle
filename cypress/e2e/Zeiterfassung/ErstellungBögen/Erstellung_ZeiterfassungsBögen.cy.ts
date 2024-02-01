import "cypress-each";
import moment from "moment";
import { checkMonat } from "./helpers/checkMonth";
import { checkDay, getDateResultArray } from "./helpers/checkDay";
import { deleteAllPersonalData } from "cypress/e2e/Personal/helper/Personal";
import { prepareData, preparedSelf } from "./helpers/prepareData";
import { goto } from "../helper/goTo";
import { getTable } from "cypress/intrexx-cypress/tabe/getTable";

const year = "2025";
const dayCount = moment(year).isLeapYear() ? 366 : 365;
const detailedCheck = false;

const days = Array.from({ length: dayCount }).map((_i, index) =>
  moment(year).add(index, "day")
);

describe("Zeiterfassungsbögen Erstellen", () => {
  const self = this as preparedSelf;
  before(() => {
    cy.visit("/");
    deleteAllPersonalData();
    prepareData({ withExsitingData: false, self: this, year });
  });
  after(() => {
    deleteAllPersonalData();
  });

  it("should have 12 month", () => {
    cy.log("", self.arbeitzeiten);
    expect(self.months.length).to.eq(12);
  });

  it.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])(
    "should have Month %s",
    (monthNumber) => {
      const month = self.months.find((m) => m.L_MONAT === monthNumber);
      checkMonat(month, { year });
    }
  );

  it("should have correct daycount", () => {
    expect(self.dates.length).to.eql(dayCount);
  });

  it("should have correct Feiertage count", () => {
    expect(
      self.dates.filter(
        (d) => d.REF_ZEITTYP === "66EC736E14191B78823865CEE29F32053BEFC296"
      ).length
    ).to.eql(14);
  });

  if (detailedCheck) {
    it.each(days)("should create Days %s", (d) => {
      const date = self.dates.find((day) =>
        moment(day.DT_DATUM).isSame(d, "day")
      );
      checkDay(date, self.arbeitzeiten, self.feiertage);
    });
  } else {
    it("check days", () => {
      const { should, is } = getDateResultArray(
        self.dates,
        self.arbeitzeiten,
        self.feiertage
      );
      cy.wrap(should, { log: false }).each((i, index) => {
        expect(i).to.deep.equals(is[index]);
      });
    });
  }

  it("logged in user should see Months", () => {
    cy.login(self.login);
    goto("zeiterfassung");
    getTable("#ID_tablecontrolEC647E21").then(({ rows }) => {
      cy.log("row", rows);
      expect(rows.length).eq(12);
    });

    //cy.pause();
  });
});

describe.only("Zeiterfassungsbögen Erstellen with existing data", () => {
  const self = this as preparedSelf;
  before(() => {
    cy.visit("/");
    deleteAllPersonalData();
    prepareData({ withExsitingData: true, self: this, year });
  });
  after(() => {
    deleteAllPersonalData();
  });

  it("should have 12 month", () => {
    expect(self.months.length).to.eq(12);
  });

  it("should still have test Month", () => {
    const testMonth = self.months.find((m) => m.STRID === "fake_test_month_3");
    expect(testMonth.L_MONAT).to.eq(3);
  });

  it.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])(
    "should have Month %s",
    (monthNumber) => {
      const month = self.months.find((m) => m.L_MONAT === monthNumber);
      checkMonat(month, { year });
    }
  );

  it("should have correct daycount", () => {
    expect(self.dates.length).to.eql(dayCount);
  });

  it("should still have test Day", () => {
    const testDay = self.dates.find((m) => m.STRID === "fake_test_day");
    expect(testDay.FKSTRID).to.eq("fake_test_month_3");
  });

  it("should have correct Feiertage count", () => {
    expect(
      self.dates.filter(
        (d) => d.REF_ZEITTYP === "66EC736E14191B78823865CEE29F32053BEFC296"
      ).length
    ).to.eql(14);
  });

  if (detailedCheck) {
    it.each(days)("should create Days %s", (d) => {
      const date = self.dates.filter((day) =>
        moment(day.DT_DATUM).isSame(d, "day")
      );
      expect(date.length, "should have just 1 date").to.eq(1);
      const isFakeDay = date[0].STRID === "fake_test_day";
      if (isFakeDay) {
      }
      checkDay(date[0], self.arbeitzeiten, self.feiertage);
      const time = self.zeiten.filter((zeit) => zeit.FKSTRID === date[0].STRID);
      expect(time.length, "created 1 dummy time item").to.eq(1);
      expect(time[0].B_STANDARDEINTRAG, "B_STANDARDEINTRAG === true").to.be
        .true;
    });
  } else {
    it("check days", () => {
      const { should, is } = getDateResultArray(
        self.dates,
        self.arbeitzeiten,
        self.feiertage
      );
      cy.wrap(should).each((i, index) => {
        expect(i).to.deep.equals(is[index]);
      });
    });
  }

  it("logged in user should see Months", () => {
    cy.login(self.login);
    goto("zeiterfassung");
    getTable("#ID_tablecontrolEC647E21").then(({ rows }) => {
      cy.log("row", rows);
      expect(rows.length).eq(12);
    });
    cy.pause();
  });
});
