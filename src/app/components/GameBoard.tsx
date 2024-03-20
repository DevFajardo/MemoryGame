import { GameBoardType } from "@/app/type";
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
}: GameBoardType) {
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
