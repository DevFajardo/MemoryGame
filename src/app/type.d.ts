export type CardType = {
  id: number;
  img: string;
  alt: string;
  cliked: boolean;
  matched: boolean;
};

export type CommonType = {
  cards: CardType[];
  setCards: Function;
  setPoints: Function;
}

export type PropsType = CommonType & {
  flippedCards: CardType[];
  setFlippedCards: Function;
  isDisabled: boolean;
  setIsDisabled: Function;
  points: number;

}

export type GameBoardType = CommonType &{
  card: CardType;
  flippedCards: CardType[];
  setFlippedCards: Function;
  isDisabled: boolean;
  setIsDisabled: Function;
  points: number;
}

export type AsideType = CommonType &{
  points: number;
}

