import { FlashcardsViewer } from "@/components/flashcards/flashcards-viewer";
import { Button } from "@/components/ui/button";
import { getFlashcards } from "@/lib/server-actions/flashcard-actions";
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
  const flashcards = await getFlashcards(flashcardSet.id);

  return (
    <main className="w-full h-full flex flex-col items-center">
      <div className="container h-full flex flex-col gap-2">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold">{flashcardSet.name}</h1>
          <Link href="/flashcards">
            <Button variant="link" className="mt-4 pl-0!">
              <ArrowLeftIcon />
              {"back to flashcards"}
            </Button>
          </Link>
        </div>
        <div className="size-full">
          {!!flashcards.length && <FlashcardsViewer flashcards={flashcards} />}
          {!flashcards.length && (
            <div className="text-2xl font-semibold">No flashcards</div>
          )}
        </div>
      </div>
    </main>
  );
}
