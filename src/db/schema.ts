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
    flashcardSetId: t.integer("flashcard_set_id")
      .notNull()
      .references(() => flashcard_sets.id),
    frontSide: t.text("front_side").notNull(),
    backSide: t.text("back_side").notNull(),
    createdAt: t.integer("created_at", { mode: "timestamp_ms" }).notNull().defaultNow(),
  },
  (table) => [
    t.index("flashcard_set_id_idx").on(table.flashcardSetId),
  ],
);

export const flashcard_sets = t.sqliteTable(
  "flashcard_sets",
  {
    id: t.integer("id").primaryKey({ autoIncrement: true }).notNull(),
    uuid: t.text("uuid", { length: 36 }).unique().notNull(),
    userId: t.integer("user_id").notNull().references(() => users.id),
    name: t.text("name", { length: 256 }).notNull(),
    createdAt: t.integer("created_at", { mode: "timestamp_ms" }).notNull().defaultNow(),
  },
  (table) => [
    t.uniqueIndex("flashcard_sets_uuid_idx").on(table.uuid),
    t.index("flashcard_sets_name_idx").on(table.name),
    t.index("flashcard_sets_user_id_idx").on(table.userId),
  ],
);


