"use server";

import { db } from "@/db";
import { flashcards } from "@/db/schema";
import { inArray, sql } from "drizzle-orm";

export async function getAllForSets(flashcardSetIds: number[]) {
  return await db
    .select()
    .from(flashcards)
    .where(inArray(flashcards.flashcardSetId, flashcardSetIds));
}

export async function countFlashcardsForSets(
  flashcardcSetIds: number[],
): Promise<{ flashcardSetId: number; count: number }[]> {
  return await db
    .select({
      flashcardSetId: flashcards.flashcardSetId,
      count: sql<number>`COUNT(*)`,
    })
    .from(flashcards)
    .where(inArray(flashcards.flashcardSetId, flashcardcSetIds))
    .groupBy(flashcards.flashcardSetId);
}
