import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 bg-white border-t-2 border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span>© 2023 Finance Sentiment Analysis</span>
        </div>
        <nav className="flex gap-4">
          <Link
            className="text-sm hover:underline hover:text-[#ff6b6b]"
            href="/#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm hover:underline hover:text-[#ff6b6b]"
            href="/#"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
