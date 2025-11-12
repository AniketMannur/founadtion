import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "@assets/image_1762879919500.png";

export function ModernNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    {
      label: "About Us",
      subLinks: [
        { href: "/about-us", label: "Our Story" },
        { href: "/impact", label: "Our Impact" },
      ],
    },
    {
      label: "We Work In",
      subLinks: [
        { href: "/programs", label: "Programs" },
        { href: "/sector", label: "Sectors" },
      ],
    },
    { href: "/gallery", label: "Gallery" },
    {
      label: "Contact",
      subLinks: [
        { href: "/contact", label: "Contact Us" },
        { href: "/feedback", label: "Share Feedback" },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
      data-testid="navigation-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 cursor-pointer hover-elevate active-elevate-2 rounded-md p-2 -ml-2">
              <img 
                src={logoImage} 
                alt="Shree Balaji Foundation Logo" 
                className="w-14 h-14 object-contain animate-fade-in"
              />
              <div className="flex flex-col animate-slide-in-left delay-100">
                <span className={`font-bold text-lg ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}>
                  Shree Balaji Foundation
                </span>
                <span className={`text-xs ${isScrolled ? "text-gray-600 dark:text-gray-400" : "text-white/90"}`}>
                  सबे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => {
              if (link.subLinks) {
                return (
                  <DropdownMenu key={link.label}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`animate-fade-in-down delay-${(index + 1) * 100} ${
                          isScrolled
                            ? "text-gray-700 dark:text-gray-200"
                            : "text-white hover:text-white"
                        }`}
                        data-testid={`button-menu-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link.label}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {link.subLinks.map((subLink) => (
                        <Link key={subLink.href} href={subLink.href}>
                          <DropdownMenuItem
                            className="cursor-pointer"
                            data-testid={`link-${subLink.label.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {subLink.label}
                          </DropdownMenuItem>
                        </Link>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`animate-fade-in-down delay-${(index + 1) * 100} ${
                      location === link.href
                        ? "bg-primary/10 text-primary dark:text-primary"
                        : isScrolled
                        ? "text-gray-700 dark:text-gray-200"
                        : "text-white hover:text-white"
                    }`}
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3 animate-fade-in-down delay-500">
            <Button
              variant="default"
              data-testid="button-donate"
            >
              Donate Now
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${isScrolled ? "" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 animate-fade-in-down">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              if (link.subLinks) {
                return (
                  <div key={link.label} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {link.label}
                    </div>
                    {link.subLinks.map((subLink) => (
                      <Link key={subLink.href} href={subLink.href}>
                        <div
                          className="px-6 py-2 text-gray-700 dark:text-gray-200 hover-elevate rounded-md cursor-pointer"
                          onClick={() => setIsMobileMenuOpen(false)}
                          data-testid={`link-mobile-${subLink.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {subLink.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                );
              }

              return (
                <Link key={link.href} href={link.href}>
                  <div
                    className={`px-4 py-2 rounded-md cursor-pointer hover-elevate ${
                      location === link.href
                        ? "bg-primary/10 text-primary dark:text-primary"
                        : "text-gray-700 dark:text-gray-200"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </div>
                </Link>
              );
            })}
            <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
              <Button
                variant="default"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="button-mobile-donate"
              >
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
