import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/ui/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sentiment Analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="scroll-smooth">
        <head />
        <body
          className={cn("min-h-screen flex flex-col bg-white", inter.className)}
        >
          <Toaster position="top-right"/>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
