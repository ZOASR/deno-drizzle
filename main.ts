// @deno-types="npm:@types/pg"
import PG from "pg";
import { load } from "@std/dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { user } from "./db/schema.ts";

await load({ export: true, envPath: ".env.local" });
const conn_url = Deno.env.get("DB_URL");

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
