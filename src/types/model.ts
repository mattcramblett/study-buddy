import {
  users,
  flashcards,
  flashcard_sets,
} from "@/db/schema";

export type User = typeof users.$inferSelect;
export type Flashcard = typeof flashcards.$inferSelect;
export type FlashCardSet = typeof flashcard_sets.$inferSelect;

