import React from "react";
import { TypographyH1 } from "../typography";

const TheProject = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <TypographyH1>The Project</TypographyH1>
      <p className="text-md md:text-lg lg:text-xl text-gray-900 mb-8 text-center">
        ACELS is a useful tool for financial sentiment analysis. It uses the
        DecisionTreeClassifier algorithm from the Sci-kit Learn package to
        identify whether the sentiment present in a text is positive or
        negative. Our model has an accuracy of 85%. With ACELS, you can automate
        financial sentiment analysis and optimize your data analysis processes.
        Try it now!
      </p>
    </div>
  );
};

export default TheProject;
