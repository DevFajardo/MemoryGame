
import { CommonType } from "@/app/type";
import { resetGame } from '@/app/lib/utils';   

export default function WinnerSeccion({cards, setCards, setPoints} : CommonType) {
  return (
    <>
      <h3 className="text-center text-5xl my-5 font-bold">YOU WIN</h3>
      <button
        onClick={() => {
         resetGame(cards, setCards, setPoints);
        }}
        className="  text-white font-bold py-2 px-4 rounded"
      >
        Reset Game
      </button>
    </>
  );
}
