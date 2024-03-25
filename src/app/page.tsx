"use client";
import { useEffect, useState } from "react";
import { CardType } from "@/app/type";
import { pointsAnimate, cardsReady } from "@/app/lib/utils";
import Aside from "./components/Aside";
import Section from "./components/Section";
import Modal from "@/app/components/Modal";

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
    <>{cards?.every((card) => card.matched) ? (
      
      <Modal
        cards={cards}
        setCards={setCards}
        setPoints={setPoints}
      />
      
    ) : (
      ""
    )}

    <main className={`h-screen flex justify-center ${cards?.every((card) => card.matched) ? "opacity-5" : ""}`}>
      <Aside
        points={points}
      />
      <Section
        cards={cards}
        isDisabled={isDisabled}
        flippedCards={flippedCards}
        setCards={setCards}
        setFlippedCards={setFlippedCards}
        setIsDisabled={setIsDisabled}
        setPoints={setPoints}
        points={points}
      />
    </main>
    </>
  );
}
