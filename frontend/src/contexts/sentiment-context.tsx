"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import toast from "react-hot-toast";

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

const mapSentimentResponseToSentimentType = (
  sentiment: string,
): SentimentType => {
  switch (sentiment) {
    case "Negativo":
      return "negative";
    case "Positivo":
      return "positive";
    default:
      throw new Error("Invalid sentiment");
  }
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

  const postMessage = async (message: string): Promise<void> => {
    const endpoint = process.env.NEXT_PUBLIC_API_URL as string;
    const path = "/send_text";
    try {
      const response = await fetch(endpoint + path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: message }),
      });
      const { sentiment } = await response.json();
      const mappedSentiment = mapSentimentResponseToSentimentType(sentiment);
      setSentimentsHistory((prev) => [
        ...prev,
        { sentiment: mappedSentiment, message },
      ]);
      setIsLoading(false);
      setCurrentSentiment(mappedSentiment);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const sendNewMessage = useCallback(
    async (message: string) => {
      setIsLoading(true);
      toast.promise(postMessage(message), {
        loading: "Analyzing sentiment...",
        success: "Sentiment analyzed!",
        error: "Error analyzing sentiment",
      });
      setIsLoading(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setIsLoading, setCurrentSentiment, setSentimentsHistory],
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
