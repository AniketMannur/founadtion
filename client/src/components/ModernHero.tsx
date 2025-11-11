import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import charityImage from "@assets/charity_1762875866641.jpg";
import { Link } from "wouter";

export function ModernHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-teal-400 via-teal-500 to-cyan-500 animate-gradient"
        data-testid="hero-background"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="space-y-3 opacity-0 animate-fade-in-up">
              <p className="text-orange-500 dark:text-orange-400 text-lg font-medium tracking-wide uppercase">
                We Rise By Lifting Others
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Balaji </span>
                <span className="text-orange-500">Foundation</span>
              </h1>
            </div>

            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl opacity-0 animate-fade-in-up delay-200">
              Shree Balaji Foundation is committed to creating positive change through education,
              healthcare, and community empowerment programs. Founded on the principles of
              compassion and service, we work tirelessly to make a lasting impact in the lives
              of underprivileged communities.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up delay-300">
              <Link href="/programs">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  data-testid="button-read-more"
                >
                  READ MORE
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-orange-500 text-white hover:bg-orange-500/20 backdrop-blur-sm shadow-xl"
                  data-testid="button-contact-us"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-6 opacity-0 animate-fade-in-up delay-400">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg"
                  >
                    <Heart className="w-5 h-5 text-white" fill="white" />
                  </div>
                ))}
              </div>
              <div className="text-white">
                <p className="font-bold text-2xl">10,000+</p>
                <p className="text-white/80 text-sm">Lives Impacted</p>
              </div>
            </div>
          </div>

          <div className="relative opacity-0 animate-scale-in delay-500">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur-2xl opacity-30 animate-pulse" />
            <div className="relative bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={charityImage}
                alt="Child representing hope and charity"
                className="w-full h-[500px] object-cover"
                data-testid="img-hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-2xl font-bold mb-2">Building Brighter Futures</p>
                <p className="text-white/90">Together, we can make a difference</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-in-up delay-600">
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
              <p className="text-4xl font-bold text-white mb-2">{stat.number}</p>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}
