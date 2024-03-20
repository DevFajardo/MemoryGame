import Card from "@/app/components/Card";
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
    <section className="flex flex-wrap place-content-center">
      {cards.map((card: CardType) => {
        return (
          <Card
            key={card.id}
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
