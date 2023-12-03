import { TypographyH1, TypographyP } from "@/components/typography";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center align-center gap-8 my-auto">
      <Image
        src="https://mandacaru.dev/img/flor.png"
        width={200}
        height={200}
        className="rounded-full"
        alt="Mandacaru Logo"
      />
      <div className="flex flex-col justify-center align-center gap-4 text-center">
        <TypographyH1>404</TypographyH1>
        <TypographyP>
          Oops! Parece que você se perdeu. Que tal voltar para a página inicial?
        </TypographyP>
      </div>
    </div>
  );
};

export default NotFound;
