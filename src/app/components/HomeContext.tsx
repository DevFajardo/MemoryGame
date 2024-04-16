import { createContext, useContext, useState, FC } from "react";
import { CardType, CardContextType } from "@/app/type";


const CardContex = createContext<CardContextType | null>(null)

export const useHomeContext = (): CardContextType => {
    const context = useContext(CardContex)
    if (!context) {
        throw new Error("useHomeContext must be used within a HomeProvider")
    }
    return context
}

export const HomeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cards, setCards] = useState<CardType[]>([]);
    const [flippedCards, setFlippedCards] = useState<CardType[]>([]);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [points, setPoints] = useState<number>(0);
    const contextValue: CardContextType = {
        cards,
        setCards,
        flippedCards,
        setFlippedCards,
        isDisabled,
        setIsDisabled,
        points,
        setPoints,
      };
    return (
        <CardContex.Provider value={contextValue}>
            {children}
        </CardContex.Provider>
    )
}