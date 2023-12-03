import SentimentDisplay from "@/components/chat/sentiment-display";
import SentimentHistory from "@/components/chat/sentiment-history";
import SentimentInput from "@/components/chat/sentiment-input";
import { SentimentContextProvider } from "@/contexts/sentiment-context";
import React from "react";

const Chat = () => {
  return (
    <SentimentContextProvider>
      <main className="flex-1 flex h-full overflow-y-clip bg-white">
        <SentimentDisplay />
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-between">
          <SentimentHistory />
          <SentimentInput />
        </div>
      </main>
    </SentimentContextProvider>
  );
};

export default Chat;
