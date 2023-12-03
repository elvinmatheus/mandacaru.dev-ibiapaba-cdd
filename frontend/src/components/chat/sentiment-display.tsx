"use client";

import { useSentimentContext } from "@/contexts/sentiment-context";

const SentimentDisplay = () => {
  const { currentSentiment: sentiment } = useSentimentContext();
  return (
    <div
      className={`w-1/2 hidden md:flex transition-all duration-1000 delay-300 items-center justify-center ${
        sentiment === "negative"
          ? "bg-[#F87171]"
          : sentiment === "positive"
          ? "bg-[#a8d8a7]"
          : "bg-[#c8cccd]"
      }`}
    >
      <img
        alt="Sentiment Image"
        className="object-cover object-center rounded-full"
        height="500"
        src="/placeholder.svg"
        style={{
          aspectRatio: "500/500",
          objectFit: "cover",
        }}
        width="500"
      />
    </div>
  );
};

export default SentimentDisplay;
