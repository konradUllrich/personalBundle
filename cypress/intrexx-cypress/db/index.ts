import { ConnectionConfig } from "tedious";
import { ClientConfig } from "pg";
import pg from "./loadPostgresSql";
import ms from "./loadMsSql";

const prepareDatabase = ({
  db,
  pgConfig,
  msConfig,
}: {
  db: "postgress" | "msSql";
  pgConfig: ClientConfig;
  msConfig: ConnectionConfig;
}) => {
  return db === "postgress" ? pg(pgConfig) : ms(msConfig);
};

export default prepareDatabase;
