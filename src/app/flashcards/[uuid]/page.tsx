import { Button } from "@/components/ui/button";
import { getFlashcardSet } from "@/lib/server-actions/flashcard-set-actions";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default async function FlashcardSetPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  const flashcardSet = await getFlashcardSet(uuid);

  return (
    <main className="w-full flex flex-col items-center">
      <div className="container flex flex-wrap gap-2">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold">{flashcardSet.name}</h1>
          <Link href="/flashcards">
            <Button variant="link" className="mt-4 pl-0!">
              <ArrowLeftIcon />
              {"back to flashcards"}
            </Button>
          </Link>
        </div>
        <div>
          
        </div>
      </div>
    </main>
  );
}
