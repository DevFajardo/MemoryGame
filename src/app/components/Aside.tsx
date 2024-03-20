import WinnerSeccion from "@/app/components/WinnerSeccion";
import { AsideType } from "@/app/type";

export default function Aside({
  cards,
  setCards,
  setPoints,
  points,
}: AsideType) {
  return (
    <>
      <aside className="justify-center flex flex-col  w-1/3 flex-initial">
        <h1 className="text-center text-9xl font-bold heartbeat ">
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
