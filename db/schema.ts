import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
	id: serial("id"),
	name: text("name").notNull(),
	email: text("email").notNull(),
	password: text("password"),
	role: text("role").$type<"admin" | "customer">(),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at"),
});
