import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal text-white hover:bg-teal-light shadow-md shadow-teal/20 border border-teal",
  secondary:
    "bg-navy text-white hover:bg-navy-light shadow-md shadow-navy/20 border border-navy",
  outline:
    "bg-transparent text-navy border-2 border-navy/20 hover:border-teal hover:text-teal",
  ghost: "bg-transparent text-navy hover:bg-cream border border-transparent",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
