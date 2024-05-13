import { Connection, Request, ConnectionConfig } from "tedious";
export default (dbConfig: ConnectionConfig) => {
  return {
    db: async ({ query, options }) => {
      const connection = new Connection(dbConfig);
      console.log({ query, options });

      let retryUntil: (val?: any) => any = () => true;

      if (options?.retryUntil) {
        eval(`retryUntil = ${options.retryUntil}`);
      }
      connection.on("connect", (err) => {
        if (err) {
          throw err;
        }
      });
      return new Promise((res, reject) => {
        connection.on("connect", (err) => {
          if (err) {
            return reject(err);
          }
          execute();
        });
        connection.connect();
        let retries = 0;
        let waitingtime = 10;
        const execute = () => {
          const request = new Request(query, function (err, rowCount, rows) {
            if (err) {
              return reject(err);
            }
            const r = rows.map((row) => {
              return Object.entries(row).reduce((acc, [key, val]) => {
                //@ts-ignore
                acc[key] = val.value;
                return acc;
              }, {});
            });

            if (!retryUntil(r) && retries * waitingtime < 40000) {
              retries += 1;
              setTimeout(() => {
                console.log(
                  `Retry query!!!!!!!!! ${retries} ${retries * waitingtime}`
                );
                execute();
              }, waitingtime);
            } else {
              res(r);
              connection.close();
            }
          });

          connection.execSql(request);
        };
      });
    },
  };
};
