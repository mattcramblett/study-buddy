import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default async function Home() {
  return (
    <main className="size-full flex items-center justify-center">
      <div className="h-[600px] flex flex-col items-center justify-center gap-8">
        <h1 className="font-semibold text-4xl">Welcome to Study Buddy 🤓</h1>
        <Button variant="outline">
          <Link href="/flashcards">Flashcards</Link>
          <MoveRight />
        </Button>
      </div>
    </main>
  );
}
