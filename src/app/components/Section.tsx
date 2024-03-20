
import GameBoard from "@/app/components/GameBoard";
import { CardType, PropsType } from "@/app/type";

export default function Section({
  cards,
  setCards,
  flippedCards,
  setFlippedCards,
  isDisabled,
  setIsDisabled,
  setPoints,
  points,
}: PropsType) {
  return (
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
  );
}
