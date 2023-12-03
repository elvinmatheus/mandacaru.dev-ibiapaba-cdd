"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSentimentContext } from "@/contexts/sentiment-context";

const SentimentInput = () => {
  const { sendNewMessage, isLoading } = useSentimentContext();
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    sendNewMessage(message);
    setMessage("");
  };

  return (
    <div className="flex space-x-4">
      <Input
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        type="submit"
        disabled={isLoading}
        onClick={(e) => handleSubmit(e)}
      >
        Send
      </Button>
    </div>
  );
};

export default SentimentInput;
