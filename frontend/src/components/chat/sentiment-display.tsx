"use client";

import { useSentimentContext } from "@/contexts/sentiment-context";
import Image from "next/image";

const SentimentDisplay = () => {
  const { currentSentiment: sentiment } = useSentimentContext();
  switch (sentiment) {
    case "negative":
      return (
        <div className="w-1/2 hidden md:flex transition-all duration-1000 delay-300 items-center justify-center bg-[#F87171]">
          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disappointed%20Face.png"
            alt="Disappointed Face"
            width="500"
            height="500"
          />
        </div>
      );
    case "positive":
      return (
        <div className="w-1/2 hidden md:flex transition-all duration-1000 delay-300 items-center justify-center bg-[#a8d8a7]">
          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png"
            alt="Beaming Face with Smiling Eyes"
            width="500"
            height="500"
          />
        </div>
      );
    default:
      return (
        <div className="w-1/2 hidden md:flex transition-all duration-1000 delay-300 items-center justify-center bg-[#c8cccd]">
          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Neutral%20Face.png"
            alt="Neutral Face"
            width="500"
            height="500"
          />
        </div>
      );
  }
};

export default SentimentDisplay;
