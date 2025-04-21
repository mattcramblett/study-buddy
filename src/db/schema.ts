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
    t.uniqueIndex("users_uuid_idx").on(table.uuid),
    t.index("users_email_idx").on(table.email),
  ],
);

export const flashcards = t.sqliteTable(
  "flashcards",
  {
    id: t.integer("id").primaryKey({ autoIncrement: true }).notNull(),
    flashcard_set_id: t.integer("flashcard_set_id")
      .notNull()
      .references(() => flashcard_sets.id),
    front_side: t.text("front_side").notNull(),
    back_side: t.text("back_side").notNull(),
    created_at: t.integer("created_at", { mode: "timestamp_ms" }).notNull().defaultNow(),
  },
  (table) => [
    t.index("flashcards_id_idx").on(table.flashcard_set_id),
  ],
);

export const flashcard_sets = t.sqliteTable(
  "flashcard_sets",
  {
    id: t.integer("id").primaryKey({ autoIncrement: true }).notNull(),
    uuid: t.text("uuid", { length: 36 }).unique().notNull(),
    name: t.text("name", { length: 256 }).notNull(),
    created_at: t.integer("created_at", { mode: "timestamp_ms" }).notNull().defaultNow(),
  },
  (table) => [
    t.uniqueIndex("flashcard_sets_uuid_idx").on(table.uuid),
    t.index("flashcard_sets_name_idx").on(table.name),
  ],
);


