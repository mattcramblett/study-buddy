"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export function SignInButton() {
  const router = useRouter();

  return (
    <Button variant="link" onClick={() => router.push("/login")}>
      Sign in
    </Button>
  );
}
