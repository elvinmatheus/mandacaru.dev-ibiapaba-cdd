import React, { ReactNode } from "react";
import Link from "next/link";

function IconFinance(props: any) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link
      href={href}
      className="text-sm font-medium hover:underline underline-offset-4 transition-colors hover:text-[#ff6b6b]"
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-16 bg-[#fdf5ef] sticky top-0 z-50 border-b-2 border-gray-300">
      <div className="container mx-auto h-full flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <IconFinance className="h-6 w-6" />
          <span className="sr-only">Finance Sentiment Analysis</span>
        </Link>
        <div className="border-r-2 border-gray-300 h-6 mx-4" />
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/chat">Chat</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
