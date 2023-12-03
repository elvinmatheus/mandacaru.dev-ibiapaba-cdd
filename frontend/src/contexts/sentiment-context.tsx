"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type SentimentType = "positive" | "negative";

export type Sentiment = {
  sentiment: SentimentType;
  message: string;
};

type SentimentContextType = {
  currentSentiment: SentimentType | null;
  sentimentsHistory: Sentiment[];
  sendNewMessage: (message: string) => void;
  isLoading: boolean;
};

const SentimentContext = createContext<SentimentContextType | null>(null);

export const useSentimentContext = () => {
  const context = useContext(SentimentContext);

  if (!context) {
    throw new Error(
      "useSentimentContext must be used within an SentimentContextProvider",
    );
  }

  return context;
};

export const SentimentContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sentimentsHistory, setSentimentsHistory] = useState<Sentiment[]>([]);
  const [currentSentiment, setCurrentSentiment] =
    useState<SentimentType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendNewMessage = useCallback(
    (message: string) => {
      setIsLoading(true);
      setSentimentsHistory((prev) => [
        ...prev,
        { sentiment: "positive", message },
      ]);
      setIsLoading(false);
      setCurrentSentiment("positive");
    },
    [setIsLoading, setSentimentsHistory],
  );

  const contextValue = useMemo(() => {
    return {
      currentSentiment,
      sentimentsHistory,
      sendNewMessage,
      isLoading,
    };
  }, [sentimentsHistory, sendNewMessage, isLoading, currentSentiment]);

  return (
    <SentimentContext.Provider value={contextValue}>
      {children}
    </SentimentContext.Provider>
  );
};
