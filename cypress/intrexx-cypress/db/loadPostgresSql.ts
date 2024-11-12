import { Client, ClientConfig } from "pg";

export default (config: ClientConfig) => {
  return {
    db: async ({ query }) => {
      const client = new Client({ ...config });
      await client.connect();
      const result = await client.query({ text: query });
      await client.end();
      return Array.isArray(result)
        ? result.map((result) => result.rows)
        : result.rows;
    },
  };
};
