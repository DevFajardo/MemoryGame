import { data } from "@/app/data/data";
import { CardType } from "@/app/type";

export const shuffleData = (data: CardType[]) => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};

export const duplicateData = data.flatMap((img) => {
  const duplicate = {
    ...img,
    id: img.id + data.length,
  };
  return [img, duplicate];
});

export const pointsAnimate = () => {
  const points = document.getElementById("points");
  points?.classList.add("pointsBeat");
  setTimeout(() => {
    points?.classList.remove("pointsBeat");
  }, 2000);
};

export const cardsReady = (setCards: Function) => {
  const shuffleCards = shuffleData(duplicateData);
  setCards(shuffleCards);
};

export const logicGame = (
  cards: CardType[],
  card: CardType,
  isDisabled: boolean,
  flippedCards: CardType[],
  setCards: Function,
  setFlippedCards: Function,
  setIsDisabled: Function,
  setPoints: Function,
  points: number
) => {
  if (isDisabled) return;
  const [currentCard] = cards.filter((c) => c.id == card.id);

  if (!currentCard.cliked && !currentCard.matched) {
    currentCard.cliked = !currentCard.cliked;

    const newFlippedCards = [...flippedCards, currentCard];
    setCards([...cards]);
    setFlippedCards(newFlippedCards);
    if (newFlippedCards.length == 2) {
      setIsDisabled(true);
      const [firstCard, secondCard] = newFlippedCards;
      if (firstCard.img == secondCard.img) {
        firstCard.cliked = false;
        secondCard.cliked = false;
        firstCard.matched = true;
        secondCard.matched = true;
        setPoints(points + 1);
        setFlippedCards([]);
        setIsDisabled(false);
        setCards([...cards]);
      } else {
        setTimeout(() => {
          firstCard.cliked = false;
          secondCard.cliked = false;
          setFlippedCards([]);
          setIsDisabled(false);
          setCards([...cards]);
        }, 1000);
      }
    }
  }
};

export const resetGame = (
  cards: CardType[],
  setCards: Function,
  setPoints: Function
) => {
  const newGame = cards.map((card: CardType) => {
    return {
      ...card,
      matched: false,
    };
  });
  const suffleCardsNewGame = shuffleData(newGame);
  setCards(suffleCardsNewGame);
  setPoints(0);
};