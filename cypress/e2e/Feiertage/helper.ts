import { FT_T_FEIERTAGE } from "cypress/db";

const getFeiertageQuery = () =>
  `SELECT * FROM FT_T_FEIERTAGE ORDER BY DT_DATUM`;
export const getFeiertage = () => cy.db<FT_T_FEIERTAGE[]>(getFeiertageQuery());
