"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/");
  };

  return (
    <Button className="p-0" variant="link" onClick={handleSignOut}>
      Sign out
    </Button>
  );
}
