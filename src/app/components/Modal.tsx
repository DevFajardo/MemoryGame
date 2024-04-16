import { useState } from 'react';
import { CommonType } from "@/app/type";
import { resetGame } from "@/app/lib/utils";

export default function Modal({ cards, setCards, setPoints, state }: CommonType) {
    const currentState : boolean | undefined = state;
    const [showModal, setShowModal] = useState(currentState);
    const handleResetGame = () => {
        resetGame(cards, setCards, setPoints);
        setShowModal(!currentState);
    };

    return (
        <>
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="rounded-lg shadow-xl p-4 flex flex-col text-center modalContainer">
                        <h3 className="text-8xl my-5 font-bold">YOU WIN</h3>
                        <button
                            onClick={() => {
                                handleResetGame();
                            }}
                            className="text-white font-bold py-2 px-4 rounded"
                        >
                            Reset Game
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
