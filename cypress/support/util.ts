import { faker } from "@faker-js/faker";

const prefix = "fake";
export function getGuid() {
  return prefix + "-" + faker.string.uuid().slice(prefix.length + 1);
}
