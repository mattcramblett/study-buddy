"use server";
import { FlashcardSet } from "@/types/model";
import { countFlashcardsForSets } from "../repositories/flashcard-repository";
import { getAllByUserId } from "../repositories/flashcard-set-repository";
import { getUserOrThrow } from "./user-actions";

export type FlashcardSetWithMetadata = FlashcardSet & {
  flashcardsCount: number;
};

export async function getFlashcardSets(): Promise<FlashcardSetWithMetadata[]> {
  const { id: userId } = await getUserOrThrow();
  const sets = await getAllByUserId(userId);
  const counts = await countFlashcardsForSets(sets.map((s) => s.id));
  return sets.map((s) => ({
    ...s,
    flashcardsCount: counts.find((c) => c.flashcardSetId === s.id)?.count || 0,
  }));
}
