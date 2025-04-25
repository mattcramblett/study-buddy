"use server";
import { db } from "@/db";
import { flashcard_sets, flashcards } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { FlashcardSetForCreate } from "../server-actions/flashcard-set-actions";
import uuidv4 from "../utils/uuid-v4";

export async function getAllByUserId(userId: number) {
  return await db
    .select()
    .from(flashcard_sets)
    .where(eq(flashcard_sets.userId, userId))
    .orderBy(desc(flashcard_sets.createdAt));
}

export async function createFlashcardSet(
  set: FlashcardSetForCreate,
  userId: number,
) {
  const uuid = uuidv4();
  await db.transaction(async (tx) => {
    const flashcardSet = await tx
      .insert(flashcard_sets)
      .values({ userId, name: set.title, uuid })
      .returning();
    const flashcardSetId = flashcardSet[0].id;
    
    await tx.insert(flashcards).values(
      set.flashcards.map((fc) => ({
        flashcardSetId,
        frontSide: fc.frontSide,
        backSide: fc.backSide,
      })),
    );
  });

  return uuid;
}
