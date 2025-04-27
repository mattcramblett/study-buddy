"use server"

import { getAllForSets } from "../repositories/flashcard-repository";
import { getFlashcardSetById } from "../repositories/flashcard-set-repository";
import { getUserOrThrow } from "./user-actions"

export async function getFlashcards(flashcardSetId: number) {
  const { id: userId } = await getUserOrThrow();
  await getFlashcardSetById(flashcardSetId, userId); // Assert the user owns this set
  return await getAllForSets([flashcardSetId]);
}
