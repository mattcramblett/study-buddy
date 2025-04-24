import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getFlashcardSets } from "@/lib/server-actions/flashcard-set-actions";
import Link from "next/link";
import { Plus, SquareStack } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function FlashcardsPage() {
  const flashcardSets = await getFlashcardSets();
  return (
    <main className="w-full flex flex-col items-center">
      <div className="container flex flex-wrap">
        <div className="w-full mb-8">
          <h1 className="text-2xl font-semibold">Flashcards</h1>
          <Link href="/flashcards/create">
            <Button size="sm" variant="outline" className="mt-4">
              <Plus />
            </Button>
          </Link>
        </div>
        {!flashcardSets.length && "No flashcard sets yet!"}
        {flashcardSets.map((set) => (
          <Link key={set.id} href={`/flashcards/${set.uuid}`}>
            <Card className="w-64">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <SquareStack size={20} />
                  <CardTitle className="text-md">{set.name}</CardTitle>
                </div>
                <Separator />
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div className="flex flex-col items-start gap-4">
                  <div>{`${set.flashcardsCount} flashcards`}</div>
                  <div>{`Created ${set.createdAt.toLocaleDateString()}`}</div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
