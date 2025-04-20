"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image";

export function SignInWithGoogleButton() {
  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <Button className="w-full h-12" variant="outline" onClick={handleSignIn}>
      <Image
        width={16}
        height={16}
        alt="google-logo"
        src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
      />
      Sign in with Google
    </Button>
  );
}
