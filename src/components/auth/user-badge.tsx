import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/nextauth/authOptions";
import Image from "next/image";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { SignInButton } from "./sign-in-button";

export async function UserBadge() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <SignInButton />;
  }

  return (
    <div className="flex items-center gap-4">
      <Popover>
        <PopoverTrigger>
          <Image
            className="rounded-full"
            width={32}
            height={32}
            alt="profile-pic"
            src={session?.user?.image || ""}
          />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col items-start">
          <div className="font-semibold text-sm">{session?.user?.name}</div>
          <div className="text-sm text-muted-foreground">
            {session?.user?.email}
          </div>
          <Separator className="my-4" />
          <SignOutButton />
        </PopoverContent>
      </Popover>
    </div>
  );
}
