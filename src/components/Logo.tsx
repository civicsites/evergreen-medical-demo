import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
};

export function Logo({ variant = "dark", showText = true, className = "" }: LogoProps) {
  const isLight = variant === "light";
  const leaf = isLight ? "#8faf94" : "#6b8f71";
  const trunk = isLight ? "#e8f0ea" : "#0c2340";
  const cross = isLight ? "#5eead4" : "#0d9488";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group ${className}`}
      aria-label={`${site.name} home`}
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0 transition-transform group-hover:scale-105"
      >
        <rect width="44" height="44" rx="12" fill={isLight ? "#163556" : "#f4f7f5"} />
        <path
          d="M22 34V18M22 18C22 18 14 22 14 14C14 10 17 8 22 12C27 8 30 10 30 14C30 22 22 18 22 18Z"
          stroke={leaf}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={leaf}
          fillOpacity="0.25"
        />
        <path d="M22 34V28" stroke={trunk} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M19 24H25" stroke={cross} strokeWidth="2" strokeLinecap="round" />
        <path d="M22 21V27" stroke={cross} strokeWidth="2" strokeLinecap="round" />
      </svg>
      {showText && (
        <div className="leading-tight">
          <span
            className={`block text-sm font-semibold tracking-wide uppercase ${
              isLight ? "text-teal-light" : "text-teal"
            }`}
          >
            Evergreen
          </span>
          <span
            className={`block font-display text-base md:text-lg font-semibold ${
              isLight ? "text-white" : "text-navy"
            }`}
          >
            Family Medicine & Psychiatry
          </span>
        </div>
      )}
    </Link>
  );
}
