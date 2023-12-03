import React, { ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
};

export function TypographyH1({ children }: TypographyProps) {
  return (
    <h1 className="scroll-m-20 text-4xl md:text-5xl mb-4 font-extrabold tracking-tight lg:text-6xl">
      {children}
    </h1>
  );
}

export function TypographyH3({ children }: TypographyProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function TypographyP({ children }: TypographyProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function TypographyBlockquote({ children }: TypographyProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function TypographyInlineCode({ children }: TypographyProps) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}
