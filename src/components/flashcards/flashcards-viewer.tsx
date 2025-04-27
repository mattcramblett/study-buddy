"use client";

import { Flashcard } from "@/types/model";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Eye, RefreshCcw, Undo2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function FlashcardsViewer({ flashcards }: { flashcards: Flashcard[] }) {
  if (!flashcards.length) throw "no flashcards";

  const [currentCard, setCurrentCard] = useState(flashcards[0]);
  const [showAnswer, setShowAnswer] = useState(false);
  const currentIndex = flashcards.map((f) => f.id).indexOf(currentCard.id);
  const isLastCard = currentIndex >= flashcards.length - 1;

  const moveForward = () => {
    setShowAnswer(false);
    setCurrentCard(
      (prev) => flashcards[flashcards.map((c) => c.id).indexOf(prev.id) + 1],
    );
  };

  const startOver = () => {
    setShowAnswer(false);
    setCurrentCard(flashcards[0]);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex flex-col min-w-72 gap-4">
        {
          <div className="text-muted-foreground">{`${currentIndex + 1} of ${flashcards.length}`}</div>
        }
        <Card
          className={cn(
            "w-full sm:w-[30em] min-h-36 flex items-center justify-center",
            showAnswer ? "border-2 border-primary" : null,
          )}
        >
          <CardContent className="flex flex-col items-center justify-center text-wrap break-words whitespace-pre-wrap">
            {showAnswer ? currentCard.backSide : currentCard.frontSide}
          </CardContent>
        </Card>
        <Button
          variant={showAnswer ? "outline" : "default"}
          className="w-full transition-all"
          onClick={() => setShowAnswer((x) => !x)}
        >
          {showAnswer ? "Show term" : "Reveal definition"}
          {showAnswer ? <Undo2 /> : <Eye />}
        </Button>
        {!isLastCard && (
          <Button
            variant={showAnswer ? "default" : "outline"}
            className="w-full transition-all"
            onClick={moveForward}
          >
            Next card
            <ArrowRight />
          </Button>
        )}
        {isLastCard && (
          <Button variant="link" onClick={startOver}>
            <RefreshCcw />
            Start over
          </Button>
        )}
      </div>
    </div>
  );
}
