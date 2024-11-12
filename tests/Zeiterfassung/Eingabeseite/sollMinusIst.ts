import { Eingabeseite } from "./Eingabeseite";
import TestBuilder from "./Helper/TestBuilder";

export const nope: Parameters<TestBuilder["build"]>[0] = {
  items: {
    first: {
      von: "08",
      bis: "12:30:00",
      expectAnwesenheit: {
        dauerInseconds: 16200,
        dauer: "04:30:00",
      },
      expect: {
        ZF_IST: "04:30:00",
        ZF_SALDO: "-03:30:00",
        ANW_STANDARD: "16:30:00",
        ZF_PAUSE: "00:00:00",
      },
    },
    second: {
      von: "13",
      bis: "15",
      expectAnwesenheit: {
        dauerInseconds: 7200,
        dauer: "02:00:00",
      },
      expect: {
        ZF_IST: "06:30:00",

        ZF_SALDO: "-01:30:00",
        ANW_STANDARD: "16:30:00",
        ZF_PAUSE: "00:00:00",
      },
    },
    unterbrechung: {
      type: "unterbrechung",
      von: "13:01",
      bis: "14:49",
      expectAnwesenheit: {
        dauerInseconds: 6480,
        dauer: "01:48:00",
      },
      expect: {
        ZF_IST: "04:42:00",
        ZF_SALDO: "-03:18:00",
        ANW_STANDARD: "16:30:00",
        ZF_PAUSE: "00:00:00",
      },
    },
  },
};

export const beamte: Parameters<TestBuilder["build"]>[0] = {
  items: {
    first: {
      ...nope.items.first,
      von: "08",
      bis: "12:30:00",
      expectAnwesenheit: {
        dauerInseconds: 16200,
        dauer: "04:30:00",
      },
      expect: {
        ZF_IST: "04:30:00",

        ZF_SALDO: "-03:30:00",
        ANW_STANDARD: "16:30:00",
        ZF_PAUSE: "00:00:00",
      },
    },
    second: {
      von: "13",
      bis: "15",
      expectAnwesenheit: {
        dauerInseconds: 7200,
        dauer: "02:00:00",
      },
      expect: {
        ZF_IST: "06:00:00",
        ZF_SALDO: "-02:00:00",
        ANW_STANDARD: "16:30:00",
        ZF_PAUSE: "00:30:00",
      },
    },
  },
};

export const arbeitnehmer: Parameters<TestBuilder["build"]>[0] = {
  items: {
    first: {
      von: "08",
      bis: "12:30:00",
      expectAnwesenheit: {
        dauerInseconds: 16200,
        dauer: "04:30:00",
      },
      expect: {
        ZF_IST: "04:30:00",
        ZF_SALDO: "-03:30:00",
        ANW_STANDARD: "16:30:00",
        ZF_PAUSE: "00:00:00",
      },
    },
    second: {
      von: "13",
      bis: "15",
      expectAnwesenheit: {
        dauerInseconds: 7200,
        dauer: "02:00:00",
      },
      expect: {
        ZF_IST: "06:00:00",
        ZF_SALDO: "-02:00:00",
        ANW_STANDARD: "16:30:00",
        ZF_PAUSE: "00:30:00",
      },
    },
    third: {
      von: "15",
      bis: "18:30",
      buchungsart: "TeleArbeit",
      expectCanAddMore: true,
      expectAnwesenheit: {
        dauerInseconds: 12600,
        dauer: "03:30:00",
      },
      expect: {
        ZF_IST: "09:15:00",
        ZF_SALDO: "01:15:00",
        ANW_STANDARD: "16:30:00",
        ZF_PAUSE: "00:45:00",
      },
    },
  },
};

export const arbeitnehmerMinderjährig: Parameters<TestBuilder["build"]>[0] = {
  items: {
    first: {
      von: "08",
      bis: "12:30:00",
      expectAnwesenheit: {
        dauerInseconds: 16200,
        dauer: "04:30:00",
      },
      expect: {
        ZF_IST: "04:30:00",
        ZF_SALDO: "-03:30:00",
        ANW_STANDARD: "17:00:00",
        old: { ANW_STANDARD: "16:30:00" },
        ZF_PAUSE: "00:00:00",
      },
    },
    second: {
      von: "13",
      bis: "15",
      expectAnwesenheit: {
        dauerInseconds: 7200,
        dauer: "02:00:00",
      },
      expect: {
        ZF_IST: "05:30:00",
        ZF_SALDO: "-02:30:00",
        ANW_STANDARD: "17:00:00",
        old: { ANW_STANDARD: "16:30:00" },
        ZF_PAUSE: "01:00:00",
      },
    },
  },
};

export const praktikanten: Parameters<TestBuilder["build"]>[0] = {
  items: {
    first: {
      von: "08",
      bis: "12:30:00",
      expectAnwesenheit: {
        dauerInseconds: 16200,
        dauer: "04:30:00",
      },
      expect: {
        ZF_IST: "04:30:00",
        ZF_SALDO: "-03:30:00",
        ANW_STANDARD: "16:30:00",
        ZF_PAUSE: "00:00:00",
      },
    },
    second: {
      von: "13",
      bis: "15",
      expectAnwesenheit: {
        dauerInseconds: 7200,
        dauer: "02:00:00",
      },
      expect: {
        ZF_IST: "06:00:00",
        ZF_SALDO: "-02:00:00",
        ANW_STANDARD: "16:30:00",
        ZF_PAUSE: "00:30:00",
      },
    },
    third: {
      von: "15",
      bis: "18:30",
      buchungsart: "TeleArbeit",
      expectCanAddMore: true,
      expectAnwesenheit: {
        dauerInseconds: 12600,
        dauer: "03:30:00",
      },
      expect: {
        ZF_IST: "09:15:00",
        ZF_SALDO: "01:15:00",
        ANW_STANDARD: "16:30:00",
        ZF_PAUSE: "00:45:00",
      },
    },
  },
};
