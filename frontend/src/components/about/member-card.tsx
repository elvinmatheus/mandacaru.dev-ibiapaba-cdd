import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export type MemberCardProps = {
  name: string;
  image: string;
  linkedin: string;
  github: string;
};

const MemberCard = ({ name, image, linkedin, github }: MemberCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src={image}
        width={120}
        height={120}
        className="rounded-full"
        alt={name}
      />
      <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
      <div className="flex justify-between items-center gap-4">
        <Link href={linkedin}>
          <FaLinkedin className="text-3xl hover:text-[#ff6b6b] transition-colors" />
        </Link>
        <Link href={github}>
          <FaGithub className="text-3xl hover:text-[#ff6b6b] transition-colors" />
        </Link>
      </div>
    </div>
  );
};

export default MemberCard;
