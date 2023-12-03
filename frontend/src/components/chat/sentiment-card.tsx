import React from "react";
import SentimentBadgeFactory from "./sentiment-badge-factory";
import { Card } from "@/components/ui/card";

type SentimentCardProps = {
  sentiment: string;
  message: string;
};

const SentimentCard = ({ sentiment, message }: SentimentCardProps) => {
  return (
    <Card className="p-4 flex items-start space-x-4">
      <div className="flex-1 space-y-2">
        <SentimentBadgeFactory sentiment={sentiment} />
        <p className="text-gray-500">{message}</p>
      </div>
    </Card>
  );
};

export default SentimentCard;
