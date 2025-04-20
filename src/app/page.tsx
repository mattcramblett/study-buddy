import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignInWithGoogleButton } from "@/components/auth/sign-in-with-google-button";
import { SignOutButton } from "@/components/auth/sign-out";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="size-full flex items-center justify-center">
      <div className="h-[600px] flex flex-col items-center justify-center gap-8">
        <h1 className="font-semibold text-4xl">Welcome to Study Buddy 🤓</h1>
        <div className="flex flex-col items-center">
          <div>
            {session && `${JSON.stringify(session, null, 2)}`}
          </div>
          {session ? <SignOutButton /> : <SignInWithGoogleButton />}
        </div>
      </div>
    </main>
  );
}
