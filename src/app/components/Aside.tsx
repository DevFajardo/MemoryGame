import WinnerSeccion from "@/app/components/WinnerSeccion";
import { CardType } from "@/app/type";

export default function Aside({
  cards,
  setCards,
  setPoints,
  points,
}: {
  cards: CardType[];
  setCards: Function;
  setPoints: Function;
  points: number;
}) {
  return (
    <>
      <aside className="justify-center flex flex-col  w-1/3 flex-initial">
        <h1 className="text-center text-9xl font-bold heartbeat  p-5 ">
          Memory Game
        </h1>
        <h2 id="points" className="text-center text-2xl font-bold">
          Points : {points}
        </h2>
        {cards?.every((card) => card.matched) ? (
          <WinnerSeccion
            cards={cards}
            setCards={setCards}
            setPoints={setPoints}
          />
        ) : (
          ""
        )}
      </aside>
    </>
  );
}
