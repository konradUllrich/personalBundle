import { ZE_T_M_DATUM, PER_T_PERS_AZK, FT_T_FEIERTAGE } from "../../../../db";

import moment from "moment";

const formatMiliseconds = (millisecons: number) => {
  const now = moment();
  return moment
    .utc(
      moment
        .duration(now.clone().add(millisecons, "seconds").diff(now))
        .asMilliseconds()
    )
    .format("HH:mm:ss")
    .toString();
};

export const getDateResultArray = (
  days: ZE_T_M_DATUM[],
  arbeitszeiten: PER_T_PERS_AZK[],
  feiertage: FT_T_FEIERTAGE[]
) => {
  const res = { should: [], is: [] };
  days.forEach((day) => {
    const date = moment(day.DT_DATUM);
    const _feiertage = getFeiertage(date, feiertage);
    const isFeiertag = !!_feiertage.length;
    const testDay: Partial<ZE_T_M_DATUM> = {};

    testDay.STR_WOCHENTAG = date.locale("de").format("dd").toUpperCase();
    testDay.L_KW = parseInt(date.format("ww"));
    testDay.STR_ARBEITSZEITSOLL = formatMiliseconds(
      day.L_ARBEITSZEITSOLLSEKUNDEN
    );
    if (date.local().format("DD/MM/YYYY") !== "01/05/2024") {
      const ActualArbeitszeit = getActualArbeitszeit(arbeitszeiten, date);
      testDay.REF_ZEITTYP = isFeiertag
        ? "66EC736E14191B78823865CEE29F32053BEFC296"
        : [0, 6].includes(date.day())
          ? "115644F98301C17B54CB091021555D1A31F6B619"
          : null;
      testDay.L_ARBEITSZEITSOLLSEKUNDEN = checkArbeitszeit(
        day,
        ActualArbeitszeit,
        isFeiertag,
        date
      );
    }
    res.should.push(testDay);
    res.is.push(
      Object.keys(testDay).reduce((acc, key) => {
        return { ...acc, [key]: day[key] };
      }, {})
    );
  });
  return res;
};

const checkArbeitszeit = (
  day: ZE_T_M_DATUM,
  ActualArbeitszeit: PER_T_PERS_AZK | null,
  isFeiertag: boolean,
  date: moment.Moment
) => {
  if (isFeiertag) {
    return 0;
  }
  const isOddWeek = !!(date.week() & 1);
  const oddPrefix =
    ActualArbeitszeit?.B_WOCHENIDENTISCH === false && isOddWeek ? "UW" : "";

  if (ActualArbeitszeit) {
    return ActualArbeitszeit[
      `L_${oddPrefix}ARBEITSZEIT${day.STR_WOCHENTAG}INSEKUNDEN`
    ];
  }
  return 0;
};

export const checkDay = (
  day: ZE_T_M_DATUM,
  arbeitszeiten: PER_T_PERS_AZK[],
  feiertage: FT_T_FEIERTAGE[]
) => {
  const date = moment(day.DT_DATUM);

  expect(day.STR_WOCHENTAG, "Wochentag").to.eq(
    date.locale("de").format("dd").toUpperCase()
  );

  expect(day.L_KW, "Kalenderwoche").to.eq(parseInt(date.format("ww")));
  expect(day.STR_ARBEITSZEITSOLL, "Arbeitszeit Soll").to.eq(
    formatMiliseconds(day.L_ARBEITSZEITSOLLSEKUNDEN)
  );

  const ActualArbeitszeit = getActualArbeitszeit(arbeitszeiten, date);

  const _feiertage = getFeiertage(date, feiertage);
  const isFeiertag = !!_feiertage.length;
  const isOddWeek = !!(date.week() & 1);
  const oddPrefix =
    ActualArbeitszeit?.B_WOCHENIDENTISCH === false && isOddWeek ? "UW" : "";

  expect(day.REF_ZEITTYP, "REF_ZEITTYP").to.eql(
    isFeiertag
      ? "66EC736E14191B78823865CEE29F32053BEFC296"
      : [0, 6].includes(date.day())
        ? "115644F98301C17B54CB091021555D1A31F6B619"
        : null
  );
  assert.equal(
    day.L_ARBEITSZEITSOLLSEKUNDEN,
    checkArbeitszeit(day, ActualArbeitszeit, isFeiertag, date),
    `L_ARBEITSZEITSOLLSEKUNDEN ${date.format("DD/MM/YYYY dd")} ${
      isFeiertag ? "Feiertag" : ""
    }`
  );
};
const getFeiertage = (
  date: moment.Moment,
  feiertage: FT_T_FEIERTAGE[]
): FT_T_FEIERTAGE[] => {
  const found = feiertage.filter((f) =>
    moment(f.DT_DATUM).local().isSame(date.local())
  );
  return found;
};
const getActualArbeitszeit = (
  Arbeitszeiten: PER_T_PERS_AZK[],
  date: moment.Moment
): PER_T_PERS_AZK | null => {
  if (Arbeitszeiten.length) {
    const found = Arbeitszeiten.filter(
      (az) =>
        moment(az.DT_VON).utc().isBefore(date) ||
        moment(az.DT_VON).utc().isSame(date, "day")
    ).sort((a, b) => moment(b.DT_VON).diff(a.DT_VON));
    return found.length ? found[0] : null;
  }
  return null;
};
