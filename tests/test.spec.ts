import { test } from "tests/setup/db";
import { request } from "@playwright/test";

test("login api", async ({ page, ix, context }) => {
  console.log(page.url());
});
