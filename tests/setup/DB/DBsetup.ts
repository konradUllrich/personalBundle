import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { Client, ClientConfig } from "pg";

export default class DB {
  private DBConfig: ClientConfig = {
    database: "ixportal",
    host: "localhost",
    port: 5432,
    password: ".admin1",
    user: "postgres",
  };

  async executeQuery(query: string) {
    const client = new Client(this.DBConfig);
    try {
      await client.connect();
      const result = await client.query(query);
      //   console.log(result.rows);
      return result.rows;
    } catch (error) {
      console.error("Error in connection/executing query:", error);
    } finally {
      await client.end().catch((error) => {
        console.error("Error ending client connection:", error);
      });
    }
  }

  prisma = prisma;
}
