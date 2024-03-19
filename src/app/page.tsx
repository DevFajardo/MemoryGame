"use client";
import { useEffect, useState } from "react";
import { CardType } from "@/app/type";
import JSConfetti from "js-confetti";
import { pointsAnimate, cardsReady } from "@/app/lib/utils";
import GameBoard from "./components/GameBoard";
import Aside from "./components/Aside";

const jsConfetti = new JSConfetti();

export default function Home() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    cardsReady(setCards);
  }, []);

  useEffect(() => {
    pointsAnimate();
  }, [points]);

  return (
    <main className="h-screen flex justify-center">
      <Aside
        cards={cards}
        setCards={setCards}
        setPoints={setPoints}
        points={points}
      />
      <section className="flex flex-wrap place-content-center ">
        {cards.map((card: CardType) => {
          return (
            <GameBoard
              cards={cards}
              card={card}
              isDisabled={isDisabled}
              flippedCards={flippedCards}
              setCards={setCards}
              setFlippedCards={setFlippedCards}
              setIsDisabled={setIsDisabled}
              setPoints={setPoints}
              points={points}
            />
          );
        })}
      </section>
    </main>
  );
}
