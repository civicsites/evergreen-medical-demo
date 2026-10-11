import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: ReactNode;
  large?: boolean;
};

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  children,
  large = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-navy text-white ${
        large ? "min-h-[85vh] md:min-h-[78vh]" : "min-h-[42vh] md:min-h-[38vh]"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={large}
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-16 md:px-6 md:py-24">
        <h1 className="font-display max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            {subtitle}
          </p>
        )}
        {children}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta && (
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" className="!border-white/40 !text-white hover:!bg-white/10">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
