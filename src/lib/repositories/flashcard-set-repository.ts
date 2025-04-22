"use server";
import { db } from "@/db";
import { flashcard_sets } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export async function getAllByUserId(userId: number) {
  return await db
    .select()
    .from(flashcard_sets)
    .where(eq(flashcard_sets.userId, userId))
    .orderBy(desc(flashcard_sets.createdAt));
}
