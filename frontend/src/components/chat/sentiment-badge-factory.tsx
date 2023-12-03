import { Badge } from "../ui/badge";

type SentimentBadgeProps = {
  sentiment: string;
};

const SentimentBadgeFactory = ({ sentiment }: SentimentBadgeProps) => {
  switch (sentiment) {
    case "positive":
      return <Badge className="bg-green-500">Positive</Badge>;
    case "negative":
      return <Badge className="bg-red-500">Negative</Badge>;
    default:
      throw new Error("Invalid sentiment");
  }
};

export default SentimentBadgeFactory;
