import { defineConfig } from "cypress";
import dataBase from "./cypress/intrexx-cypress/db";

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1200,
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "http://localhost:1337",
    setupNodeEvents(on, config) {
      on("task", {
        ...dataBase({
          db: "postgress",
          msConfig: {
            server: "localhost",
            authentication: {
              type: "default",
              options: {
                userName: "sa",
                password: "a123456789C",
              },
            },
            options: {
              port: 1433,
              database: "ixportal",
              trustServerCertificate: true,
              encrypt: true,
              rowCollectionOnDone: true,
              rowCollectionOnRequestCompletion: true,
              useColumnNames: true,
              // columnNameReplacer(columnName) {
              //   return columnName.toLowerCase();
              // },
            },
          },
          pgConfig: {
            database: "ixportal",
            host: "localhost",
            port: 5432,
            password: ".admin1",
            user: "postgres",
          },
        }),
      });
      return config;
    },
  },
});
