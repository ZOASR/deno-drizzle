import { drizzle } from "drizzle-orm/node-postgres";
import PG from "pg";

import { load } from "https://deno.land/std@0.214.0/dotenv/mod.ts";
import { user } from "./db/schema.ts";
const ENVS = await load();
const conn_url = ENVS["DB_URL"];

const client = new PG.Client({
	connectionString: conn_url,
});
await client.connect();
export const db = drizzle(client);

await db.insert(user).values({
	name: "admin",
	email: "admin@admin.com",
	password: "admin1234",
	role: "admin",
});
const resultTest = await db.select().from(user);

console.log(resultTest);
