import type { Config } from "drizzle-kit";

export default {
	schema: "./db/schema.ts",
	out: "./drizzle",
	driver: "pg", // use your own database driver
	dbCredentials: {
		connectionString: process.env.DB_URL || "",
	},
} satisfies Config;
