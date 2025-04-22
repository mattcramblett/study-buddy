"use server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import uuidv4 from "../utils/uuid-v4";

export async function ensureUser(email: string) {
  const data = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  const maybeUser = data[0];
  if (maybeUser) {
    return maybeUser;
  }

  const result = await db
    .insert(users)
    .values({ uuid: uuidv4(), email })
    .returning();
  return result[0];
}
