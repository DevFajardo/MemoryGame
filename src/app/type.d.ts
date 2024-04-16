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
  state?: boolean;
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

export type AsideType = {
  points: number;
}

export interface CardContextType {
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  flippedCards: CardType[];
  setFlippedCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  isDisabled: boolean;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
}
