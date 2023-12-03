import { TypographyH1 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function IconCoin(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}

const hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center h-screen">
      <div className="container mx-auto h-full flex items-center space-x-10">
        <div className="px-4 md:px-6 flex-1 md:text-left text-center">
          <TypographyH1>Optimize Your Financial Business</TypographyH1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 mb-8">
            With our advanced sentiment analysis tool
          </p>
          <Button asChild className="bg-[#ff6b6b] text-white">
            <Link href="/chat">Try it now</Link>
          </Button>
        </div>
        <div className="flex-1 md:flex hidden">
          <IconCoin className="h-64 w-64" />
        </div>
      </div>
    </section>
  );
};

export default hero;
