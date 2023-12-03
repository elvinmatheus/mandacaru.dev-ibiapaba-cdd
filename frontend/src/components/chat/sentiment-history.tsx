"use client";

import React from "react";
import SentimentCard from "./sentiment-card";
import { useSentimentContext } from "@/contexts/sentiment-context";

const SentimentHistory = () => {
  const { sentimentsHistory } = useSentimentContext();
  return (
    <div className="w-full h-[60vh] overflow-auto space-y-4 p-4 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 ">
      {sentimentsHistory.map((sentiment, index) => (
        <SentimentCard
          key={index}
          sentiment={sentiment.sentiment}
          message={sentiment.message}
        />
      ))}
    </div>
  );
};

export default SentimentHistory;
