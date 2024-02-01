import { faker, Faker } from "@faker-js/faker";
import { getGuid } from "./util";

type createProps<T extends object> = {
  table: string;
  items: T;
  values?: Partial<values<T>>;
  key?: string;
  index?: number;
};

type values<T extends object> = {
  [P in keyof T]?: T[P] | ((faker: Faker, val: T, index?: number) => T[P]);
};

function parseValues<T extends object>(values: values<T> = {}, index?: number) {
  const result = {};
  Object.keys(values).forEach((key) => {
    if (typeof values[key] === "function") {
      result[key] = values[key](faker, result, index);
    } else {
      result[key] = values[key];
    }
  });
  return result;
}

function stringifyValues(items: object) {
  let result = "";

  Object.keys(items).forEach((key, index) => {
    const com = index === 0 ? "" : ",";
    if (items[key] === null) {
      result += com + null;
    }
    if (
      typeof items[key] === "string" &&
      (items[key] as String).startsWith(":pure:")
    ) {
      result += `${com} ${(items[key] as String).replace(":pure:", "")}`;
    }
    if (typeof items[key] === "number") {
      result += `${com} ${items[key]}`;
    }
    if (typeof items[key] === "string") {
      result += `${com}'${items[key]}'`;
    }
    if (typeof items[key] === "boolean") {
      result += `${com} '${items[key]}'`;
    }
  });

  return result;
}

export function create<T extends object>({
  table,
  items,
  values,
  index,
}: createProps<T>) {
  const key = getGuid();
  const _items = {
    STRID: key,
    ...items,
    ...parseValues(values, index),
  };

  const Fields = Object.keys(_items).join(",");
  const Values = stringifyValues(_items);

  const upQuery = `INSERT INTO "${table}"(${Fields}) VALUES(${Values}); SELECT * FROM "${table}" WHERE STRID='${_items.STRID}'`;
  const downQuery = `DELETE FROM "${table}" WHERE "STRID"='${_items.STRID}';`;

  const up = () => cy.db<T>(upQuery).then((r) => r[0]);

  const down = () => {
    return cy.db(downQuery);
  };

  return { up, down, upQuery, downQuery };
}

export function createMany<T extends object>(
  props: createProps<T> & { count: number }
) {
  const { count, ...rest } = props;
  let upQuery = "";
  let downQuery = "";

  for (let index = 0; index < count; index++) {
    const { upQuery: u, downQuery: d } = create({ ...rest, index });
    upQuery += u;
    downQuery += d;
  }

  const up = () => {
    for (let index = 0; index < count; index++) {
      cy.db(create({ ...rest, index }).upQuery);
    }
  };

  const down = () => {
    cy.db(`DELETE FROM ${rest.table} WHERE "STRID" LIKE 'fake-%'`);
  };

  return { up, down, upQuery, downQuery };
}
