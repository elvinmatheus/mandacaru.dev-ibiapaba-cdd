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
  {
    name: "Amarildo",
    image:
      "https://media.licdn.com/dms/image/C4E03AQHb0JgDxDdAOg/profile-displayphoto-shrink_200_200/0/1637526727593?e=1707350400&v=beta&t=O-ykmt6sFByrBIGjFc7LJo6Y74oqklxHGsMUCFws4JU",
    linkedin: "https://www.linkedin.com/in/said-rodrigues/",
    github: "https://github.com/amarildorfilho",
  },
  {
    name: "Carlos",
    image: "https://avatars.githubusercontent.com/u/67774642?v=4",
    linkedin: "https://www.linkedin.com/in/ingenieco-cegu/",
    github: "https://github.com/Ingenieco",
  },
  {
    name: "Elvin",
    image:
      "https://media.licdn.com/dms/image/D4D03AQGCHaWk47MszA/profile-displayphoto-shrink_100_100/0/1681072351673?e=1707350400&v=beta&t=Yp95X4UQLNJMa2487FNoCZDDs_-_Lx2UqKYzvrzfgNA",
    linkedin: "https://www.linkedin.com/in/elvinmatheus/",
    github: "https://github.com/elvinmatheus",
  },
  {
    name: "Luann",
    image:
      "https://media.licdn.com/dms/image/D4E35AQFTwWTDQ1o0QQ/profile-framedphoto-shrink_200_200/0/1643896258494?e=1702224000&v=beta&t=dlgxFYiPUipMTA-_9IPPl2snBHKBjoWcAjFOFjN7Umw",
    linkedin: "https://www.linkedin.com/in/luann-alves-43937416b/",
    github: "https://github.com/Lonalt",
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
