export type CardType = {
  id: number;
  img: string;
  alt: string;
  cliked: boolean;
  matched: boolean;
};

export type PropsType = {

  cards: CardType[];
  setCards: Function;
  flippedCards: CardType[];
  setFlippedCards: Function;
  isDisabled: boolean;
  setIsDisabled: Function;
  setPoints: Function;
  points: number;

}

export type GameBoardType = {
  cards: CardType[];
  card: CardType;
  setCards: Function;
  flippedCards: CardType[];
  setFlippedCards: Function;
  isDisabled: boolean;
  setIsDisabled: Function;
  setPoints: Function;
  points: number;
}

export type AsideType = {

  cards: CardType[];
  setCards: Function;
  setPoints: Function;
  points: number;

}

export type WinnerType = {
  cards: CardType[];
  setCards: Function;
  setPoints: Function;
}
