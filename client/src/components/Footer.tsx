import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/image_1762696322960.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Impact', href: '/impact' },
    { label: 'Programs', href: '/programs' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  const sectors = [
    { label: 'Education', href: '/sectors/education' },
    { label: 'Women Empowerment', href: '/sectors/women-empowerment' },
    { label: 'Art and Culture', href: '/sectors/art-and-culture' },
    { label: 'Health', href: '/sectors/health' },
    { label: 'Community Development', href: '/sectors/community-development' },
    { label: 'Environment Conservation', href: '/sectors/environment-conservation' },
    { label: 'Skill Development', href: '/sectors/skill-development' },
    { label: 'Social Welfare', href: '/sectors/social-welfare' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/">
              <div className="flex items-center gap-3 mb-4 hover-elevate rounded-md px-2 py-2 inline-flex cursor-pointer">
                <img src={logoImage} alt="Shree Balaji Foundation" className="h-12 w-12" />
                <div className="font-serif font-bold text-lg text-white">
                  Shree Balaji
                  <br />
                  Foundation
                </div>
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Empowering communities through education, healthcare, and sustainable development since 2013.
            </p>
            <div className="font-devanagari text-sm text-orange-400">
              सर्वे भवन्तु सुखिनः | सर्वे सन्तु निरामयाः
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span
                      className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">We Work In</h3>
            <ul className="space-y-2">
              {sectors.slice(0, 5).map((sector) => (
                <li key={sector.label}>
                  <Link href={sector.href}>
                    <span
                      className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer"
                      data-testid={`link-sector-${sector.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {sector.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-300">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-400" />
                <span>contact@shreebalajifoundation.org</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-400" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-400" />
                <span>Maharashtra, India</span>
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 hover:border-orange-400 hover:bg-orange-400/10 text-white"
                onClick={() => window.open('https://facebook.com', '_blank')}
                data-testid="button-social-facebook"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 hover:border-orange-400 hover:bg-orange-400/10 text-white"
                onClick={() => window.open('https://twitter.com', '_blank')}
                data-testid="button-social-twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 hover:border-orange-400 hover:bg-orange-400/10 text-white"
                onClick={() => window.open('https://instagram.com', '_blank')}
                data-testid="button-social-instagram"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 hover:border-orange-400 hover:bg-orange-400/10 text-white"
                onClick={() => window.open('https://linkedin.com', '_blank')}
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Shree Balaji Foundation. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
