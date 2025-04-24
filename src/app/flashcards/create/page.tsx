"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import uuidv4 from "@/lib/utils/uuid-v4";
import { Delete, Plus, Trash } from "lucide-react";
import { ChangeEventHandler, useState } from "react";

export type FlashcardItem = {
  frontSide: string;
  backSide: string;
  correlationId: string;
};

const emptyFlashcard = (correlationId: string): FlashcardItem => ({
  frontSide: "",
  backSide: "",
  correlationId, // just for unique key to reference locally
});

export default function CreateFlashcardsPage() {
  const [title, setTitle] = useState("");
  const [cards, setCards] = useState<FlashcardItem[]>([
    emptyFlashcard(uuidv4()),
  ]);

  const handleUpdate =
    (correlationId: string) =>
    (attribute: keyof FlashcardItem) =>
    (value: string) => {
      setCards((prev) =>
        prev.map((c) =>
          c.correlationId === correlationId ? { ...c, [attribute]: value } : c,
        ),
      );
    };

  const handleAddCard = () => {
    setCards((prev) => [...prev, emptyFlashcard(uuidv4())]);
  };

  const handleRemoveCard = (correlationId: string) => () => {
    setCards((prev) => prev.filter((c) => c.correlationId !== correlationId));
  };

  return (
    <main className="w-full flex flex-col items-center min-h-screen">
      <div className="w-full max-w-[40em] flex flex-col flex-1">
        <div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-4">New flashcard set</h1>
          </div>
          <Input
            id="set-title-input"
            className="w-full"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Separator className="my-8" />
        </div>
        <div className="w-full overflow-y-auto flex-1">
          {cards.map((c) => (
            <Card key={c.correlationId} className="px-4 pt-5 pb-3 mb-4">
              <div className="mb-4">
                <label>Term</label>
                <Textarea
                  value={c.frontSide}
                  onChange={(e) =>
                    handleUpdate(c.correlationId)("frontSide")(e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label>Definition</label>
                <Textarea
                  value={c.backSide}
                  onChange={(e) =>
                    handleUpdate(c.correlationId)("backSide")(e.target.value)
                  }
                  required
                />
              </div>
              <div className="w-full flex flex-col items-end">
                <Button
                  className="p-0"
                  size="sm"
                  variant="destructive"
                  onClick={handleRemoveCard(c.correlationId)}
                  disabled={cards.length <= 1}
                >
                  <Trash />
                </Button>
              </div>
            </Card>
          ))}
          <Button
            variant="outline"
            className="w-full mt-4"
            onClick={handleAddCard}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </main>
  );
}
