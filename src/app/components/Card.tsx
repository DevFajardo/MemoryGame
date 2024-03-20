import { logicGame } from "@/app/lib/utils";
import { GameBoardType } from "@/app/type";
export default function Card({
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
    <div
      onClick={() => {
        logicGame(
          cards,
          card,
          isDisabled,
          flippedCards,
          setCards,
          setFlippedCards,
          setIsDisabled,
          setPoints,
          points
        );
      }}
      className="card m-5 cursor-pointer"
      key={card.id}
    >
      <div
        className={`content ${
          card.cliked || card.matched ? "flippedContent" : ""
        }`}
      >
        <div className="back"></div>
        <div className="front flex justify-center items-center text-6xl">
          {card.img}
        </div>
      </div>
    </div>
  );
}
