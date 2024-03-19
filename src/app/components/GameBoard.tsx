import { CardType } from "@/app/type";
import Card from "./Card";
export default function GameBoard({
  cards,
  card,
  isDisabled,
  flippedCards,
  setCards,
  setFlippedCards,
  setIsDisabled,
  setPoints,
  points,
}: {
  cards: CardType[];
  card: CardType;
  isDisabled: boolean;
  flippedCards: CardType[];
  setCards: Function;
  setFlippedCards: Function;
  setIsDisabled: Function;
  setPoints: Function;
  points: number;
}) {
  return (
    <>
      <Card
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
    </>
  );
}
