import { getFeiertage } from "cypress/e2e/Feiertage/helper";
import { createPersonal } from "cypress/e2e/Personal/helper/Personal";
import {
  createArbeitzeitByUserId,
  getArbeitzeitByUserId,
} from "cypress/e2e/Personal/helper/PersonalArbeitszeit";
import { retries } from "cypress/e2e/helper";
import moment from "moment";
import { createDay, getDateByMonthId } from "../../helper/Datum";
import { createMonth, getMonthByUserId } from "../../helper/Monat";
import { createTime, getTime } from "../../helper/Zeit";
import {
  ZE_T_MONAT,
  ZE_T_M_DATUM,
  FT_T_FEIERTAGE,
  PER_T_PERS_AZK,
  ZE_T_M_D_ZEITEN,
} from "cypress/db";

export type preparedSelf = {
  months: ZE_T_MONAT[];
  dates: ZE_T_M_DATUM[];
  feiertage: FT_T_FEIERTAGE[];
  arbeitzeiten: PER_T_PERS_AZK[];
  zeiten: ZE_T_M_D_ZEITEN[];
  login: any;
};

export const runZeiterfassungsWorkflow = () => {
  return cy.runWorkflow({
    id: "3B90AE46D592E8AE66F42EF1DF48BA31D3C211CC",
    payload: { timerGuid: "4FA377303D988BD8FE0A91F5522AE494AFB13BD0" },
  });
};

export const prepareData = ({
  self,
  withExsitingData,
  year,
}: {
  withExsitingData: boolean;
  self: preparedSelf;
  year: string;
}) => {
  createPersonal({
    personalValues: { STR_VOLLERNAME: "TESTER" },
    userValues: { memberOf: ["System/Benutzer", "Personal benutzen"] },
  }).then(({ user, personal, login }) => {
    self.login = login;
    createArbeitzeitByUserId(
      { userId: user.LID, preset: "20h" },
      {
        DT_VON: moment([parseInt(year)])
          .utc()
          .format() as unknown as Date,
      }
    );
    createArbeitzeitByUserId(
      { userId: user.LID, preset: "40h/20h" },
      {
        DT_VON: moment([parseInt(year), 6])
          .utc()
          .format() as unknown as Date,
      }
    );
    if (withExsitingData) {
      createMonth({
        values: {
          L_JAHR: parseInt(year),
          L_MONAT: 3,
          REF_BENUTZER: user.LID,
          REF_PERSONAL: personal.STRID,
          STR_MONAT: "März",
          //@ts-ignore
          STRID: "fake_test_month_3",
          STR_MITARBEITERIN: "TESTER",
        },
      }).up();

      createDay({
        values: {
          STRID: "fake_test_day",
          FKSTRID: "fake_test_month_3",
          STR_ARBEITSZEITIST: "04:00:00",
          STR_WOCHENTAG: "MI",
          L_KW: 10,
          L_ARBEITSZEITISTSEKUNDEN: 9999999,
          STR_ZUSATZDATEN: "bla",
          DT_DATUM: moment(`0503${year}00`, "DDMMYYYYhh").toISOString(),
        },
      }).up();

      createTime({
        values: {
          FKSTRID: "fake_test_day",
        },
      }).up();
    }

    getMonthByUserId(user.LID).then((months) =>
      expect(months.length).to.eql(withExsitingData ? 1 : 0)
    );

    cy.runWorkflow({
      id: "3B90AE46D592E8AE66F42EF1DF48BA31D3C211CC",
      payload: {
        timerGuid: "4FA377303D988BD8FE0A91F5522AE494AFB13BD0",
        jahrVon: year,
        jahrBis: year,
      },
    });
    retries({
      cb: () => getMonthByUserId(user.LID),
      check: (res) => {
        //@ts-ignore
        return res?.length > 1;
      },
      log: "Waiting for Prozess...",
      maxTime: 35,
    });

    getMonthByUserId(user.LID).then((m) => {
      self.months = m;
      self.dates = [];
      m.forEach((month) => {
        getDateByMonthId(month.STRID).then((days) => {
          self.dates = [...self.dates, ...days];
        });
      });
    });
    getFeiertage().then((ft) => (self.feiertage = ft));
    getArbeitzeitByUserId(user.LID).then((a) => (self.arbeitzeiten = a));
    getTime.byUserId(user.LID).then((z) => (self.zeiten = z));
  });
};
