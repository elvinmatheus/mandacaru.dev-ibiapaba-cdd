import React from "react";
import { TypographyH1, TypographyP } from "../typography";

const TheProject = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <TypographyH1>The Project</TypographyH1>
      <TypographyP>
        The project consists of a web application that uses Natural Language
        Processing (NLP) to analyze the sentiment of the financial market.
      </TypographyP>
    </div>
  );
};

export default TheProject;
