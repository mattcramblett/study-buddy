"use server";
import { FlashcardSet } from "@/types/model";
import { countFlashcardsForSets } from "../repositories/flashcard-repository";
import {
  getAllByUserId,
  createFlashcardSet as saveSet,
  getFlashcardSet as findSet,
} from "../repositories/flashcard-set-repository";
import { getUserOrThrow } from "./user-actions";

export type FlashcardSetWithMetadata = FlashcardSet & {
  flashcardsCount: number;
};

export type FlashcardForCreate = {
  frontSide: string;
  backSide: string;
};

export type FlashcardSetForCreate = {
  title: string;
  flashcards: FlashcardForCreate[];
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

export async function createFlashcardSet(
  set: FlashcardSetForCreate,
): Promise<string> {
  const { id: userId } = await getUserOrThrow();
  return await saveSet(set, userId);
}

export async function getFlashcardSet(uuid: string) {
  const { id: userId } = await getUserOrThrow();
  return await findSet(uuid, userId);
}
