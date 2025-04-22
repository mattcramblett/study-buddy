"use server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/nextauth/auth-options";
import { ensureUser } from "../repositories/user-repository";

export async function getUserOrThrow() {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw "Unauthenticated";
  if (!session?.user?.email) throw "Email required";

  return await ensureUser(session?.user?.email);
}
