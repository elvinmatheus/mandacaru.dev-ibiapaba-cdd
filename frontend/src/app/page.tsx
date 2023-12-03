import Hero from "@/components/home/hero";
import Possible from "@/components/home/possible";
import TrustedBy from "@/components/home/trusted-by";

export default function Home() {
  return (
    <main className="flex-1 overflow-auto bg-[#fdf5ef]">
      <Hero />
      <TrustedBy />
      <Possible />
    </main>
  );
}
