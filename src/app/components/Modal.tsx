import { CommonType } from "@/app/type";
import { resetGame } from "@/app/lib/utils";

export default function Modal({ cards, setCards, setPoints }: CommonType) {
  return (
    <>
      <div className="rounded-lg shadow-xl p-4 flex flex-col text-center modalContainer">
        <h3 className="text-8xl my-5 font-bold">YOU WIN</h3>
        <button
          onClick={() => {
            resetGame(cards, setCards, setPoints);
          }}
          className="  text-white font-bold py-2 px-4 rounded "
        >
          Reset Game
        </button>
      </div>
    </>
  );
}
