import MemberCard, { MemberCardProps } from "@/components/about/member-card";
import TheProject from "@/components/about/the-project";
import { TypographyH1 } from "@/components/typography";

const members: MemberCardProps[] = [
  {
    name: "Said",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFObyxCIdQPiA/profile-displayphoto-shrink_200_200/0/1699521581658?e=1707350400&v=beta&t=NMeNYF8hcedJzYrX7nabwfWWB7CZd4BaAxNe6Tvuftw",
    linkedin: "https://www.linkedin.com/in/said-rodrigues/",
    github: "https://github.com/talDoFlemis/",
  },
];

const About = () => {
  return (
    <div className="flex-1 flex h-full justify-center items-center flex-col gap-8 bg-white p-8">
      <TheProject />
      <TypographyH1>Members</TypographyH1>
      <div className="flex flex-col md:flex-row gap-8">
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
};

export default About;
