import { Connection, Request, ConnectionConfig } from "tedious";
export default (dbConfig: ConnectionConfig) => {
  return {
    db: async ({ query }) => {
      const connection = new Connection(dbConfig);
      console.log(query);
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

            res(r);
            connection.close();
          });

          connection.execSql(request);
        };
      });
    },
  };
};
