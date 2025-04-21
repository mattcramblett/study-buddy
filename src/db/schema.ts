import * as t from "drizzle-orm/sqlite-core";

export const users = t.sqliteTable(
  "users",
  {
    id: t.integer("id").primaryKey({ autoIncrement: true }).notNull(),
    uuid: t.text("uuid", { length: 36 }).unique().notNull(),
    email: t.text("email", { length: 256 }).notNull(),
    createdAt: t.integer("created_at", { mode: "timestamp_ms" }).notNull().defaultNow(),
  },
  (table) => [
    t.uniqueIndex("uuid_idx").on(table.uuid),
    t.index("email_idx").on(table.email),
  ],
);
