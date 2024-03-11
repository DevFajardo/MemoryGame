"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const data: Card[] = [
  {
    id: 1,
    img: "❤️",
    imgHidden: "❓",
    alt: "img",
    cliked: false,
    matched: false
  },
  {
    id: 2,
    img: "👍",
    imgHidden: "❓",
    alt: "img",
    cliked: false,
    matched: false
  },
  {
    id: 3,
    img: "😁",
    imgHidden: "❓",
    alt: "img",
    cliked: false,
    matched: false
  },
  {
    id: 4,
    img: "😎",
    imgHidden: "❓",
    alt: "img",
    cliked: false,
    matched: false
  },
  {
    id: 5,
    img: "💻",
    imgHidden: "❓",
    alt: "img",
    cliked: false,
    matched: false
  },
  {
    id: 6,
    img: "😂",
    imgHidden: "❓",
    alt: "img",
    cliked: false,
    matched: false
  },
  {
    id: 7,
    img: "🤩",
    imgHidden: "❓",
    alt: "img",
    cliked: false,
    matched: false
  },
  {
    id: 8,
    img: "👽",
    imgHidden: "❓",
    alt: "img",
    cliked: false,
    matched: false
  },
  {
    id: 9,
    img: "😱",
    imgHidden: "❓",
    alt: "img",
    cliked: false,
    matched: false
  },
  {
    id: 10,
    img: "🐷",
    imgHidden: "❓",
    alt: "img",
    cliked: false,
    matched: false
  }
];

const shuffleData = (data: Card[]) => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};

const duplicateData = data.flatMap((img)=>{
  const duplicate = {
    ...img,
    id: img.id + data.length
  }
  return [img, duplicate]
})

type Card = {
  id: number;
  img: string;
  imgHidden: string;
  alt: string;
  cliked: boolean;
  matched: boolean;
};

export default function Home() {
  const [cards, setCards] = useState<Card[]>();
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [points, setPoints] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const shuffleCards = shuffleData(duplicateData);
    setCards(shuffleCards);
  }, []);

  return (
    <>
      <h1 className="text-center text-6xl p-10">Memory Game</h1>
      <h2 className="text-center">Points: {points} </h2>
      {cards?.every(card => card.matched) ? <>
      <h2 
      className="text-center text-5xl">YOU WIN
      </h2>
      <button onClick={() => {
        const newGame = cards.map((card) => {
          return {
            ...card,
            matched: false
          }
        })
        const suffleCardsNewGame = shuffleData(newGame);
        setCards(suffleCardsNewGame)
        setPoints(0);
      } } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Reset Game</button>
      </>
       : ''}
      <h2 className="text-center text-5xl"></h2>
      <main className="place-content-center flex mt-10">
        <div className=" flex flex-wrap w-1/2 place-content-center ">
          {cards?.map((card) => {
            return (
              <div
                onClick={() => {
                  
                  if(isDisabled) return;
                  const [currentCard] = cards.filter((c) => c.id == card.id);

                  if(!currentCard.cliked && !currentCard.matched){
                    currentCard.cliked = !currentCard.cliked
                    const newFlippedCards = [...flippedCards, currentCard];
                    setCards([...cards]);
                    setFlippedCards(newFlippedCards);
                    if(newFlippedCards.length == 2){
                      setIsDisabled(true)
                      const [firstCard, secondCard] = newFlippedCards;
                      if(firstCard.img == secondCard.img){
                        firstCard.cliked = false
                        secondCard.cliked = false
                        firstCard.matched = true
                        secondCard.matched = true
                        setPoints(points + 1)
                        setFlippedCards([])
                        setIsDisabled(false)
                        setCards([...cards]);
                      }else{
                        setTimeout(() => {
                          firstCard.cliked = false
                          secondCard.cliked = false
                          setFlippedCards([])
                          setIsDisabled(false)
                          setCards([...cards]);
                        }, 1000);
                      }
                    }
                    
                  }
                  
                }}
                className="border-red-500 border-2 p-10 m-5 cursor-pointer"
                key={card.id}
              >
                <h2 className="cursor-pointer text-3xl">{card.cliked || card.matched ? card.img : card.imgHidden}</h2>
                
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
