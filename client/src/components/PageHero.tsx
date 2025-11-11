import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  tagline?: string;
  backgroundImage?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  showStats?: boolean;
}

export function PageHero({
  title,
  subtitle,
  description,
  tagline,
  backgroundImage,
  primaryCta,
  secondaryCta,
  showStats = false,
}: PageHeroProps) {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-teal-400 via-teal-500 to-cyan-500 animate-gradient"
        data-testid="page-hero-background"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        {tagline && (
          <p className="text-orange-500 dark:text-orange-400 text-lg font-medium tracking-wide uppercase mb-4 opacity-0 animate-fade-in-up">
            {tagline}
          </p>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 opacity-0 animate-fade-in-up delay-100">
          {title}
          {subtitle && (
            <span className="block text-orange-500 mt-2">{subtitle}</span>
          )}
        </h1>

        {description && (
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in-up delay-200">
            {description}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
            {primaryCta && (
              <Link href={primaryCta.href}>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  data-testid="button-primary-cta"
                >
                  {primaryCta.label}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-orange-500 text-white hover:bg-orange-500/20 backdrop-blur-sm shadow-xl"
                  data-testid="button-secondary-cta"
                >
                  {secondaryCta.label}
                </Button>
              </Link>
            )}
          </div>
        )}

        {showStats && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-in-up delay-400">
            {[
              { number: "50+", label: "Active Programs" },
              { number: "10,000+", label: "Beneficiaries" },
              { number: "25+", label: "Communities" },
              { number: "100+", label: "Volunteers" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover-elevate border border-white/20"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}
