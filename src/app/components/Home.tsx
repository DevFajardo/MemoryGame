import { useEffect } from "react";
import { pointsAnimate, cardsReady } from "@/app/lib/utils";
import { CardContextType } from "@/app/type";
import { useHomeContext } from "@/app/components/HomeContext";
import Aside from "./Aside";
import Section from "./Section";
import Modal from "./Modal";
export default function HomeContent() {
  const { cards,
    setCards,
    flippedCards,
    setFlippedCards,
    isDisabled,
    setIsDisabled,
    points,
    setPoints }: CardContextType = useHomeContext();

  useEffect(() => {
    cardsReady(setCards);
  }, []);

  useEffect(() => {
    pointsAnimate();
  }, [points]);
    
const handleModal = () => {
  return cards?.every((card) => card.matched);
}
  return (
    <>
      {handleModal()? (

        <Modal
          cards={cards}
          setCards={setCards}
          setPoints={setPoints}
          state={true}
        />

      ) : null}
      <Aside
        points={points}
      />
      <Section
        cards={cards}
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