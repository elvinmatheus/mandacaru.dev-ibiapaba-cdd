import React from "react";
import Image from "next/image";

type PossibleItemProps = {
  image: string;
  name: string;
  height: number;
  width: number;
};

const PossibleItem = ({ image, name, height, width }: PossibleItemProps) => {
  return (
    <div className="flex flex-col items-center justify-end gap-8">
      <Image src={image} alt={name} width={width} height={height} />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
    </div>
  );
};

const Possible = () => {
  return (
    <section
      id="possible"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#fdf5ef] flex items-center"
    >
      <div className="container mx-auto h-full">
        <div className="px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Made Possible By
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-900 mb-8">
            Partnerships that make this project possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <PossibleItem
              image="https://mandacaru.dev/img/flor.png"
              name="Mandacaru.dev"
              height={100}
              width={100}
            />
            <PossibleItem
              image="https://upload.wikimedia.org/wikipedia/commons/d/d7/B3_logo.png"
              name="B3"
              height={200}
              width={200}
            />
            <PossibleItem
              image="https://www.ufc.br/images/_images/a_universidade/identidade_visual/brasao/brasao1_horizontal_cor_72dpi.png"
              name="UFC"
              height={100}
              width={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Possible;
