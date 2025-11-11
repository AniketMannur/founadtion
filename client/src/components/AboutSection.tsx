import { Heart, Users, Target, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import executiveImage from "@assets/image_1762877067583.png";
import logoImage from "@assets/image_1762876982725.png";

export function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Dedicated to providing support and care to those who need it most",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Working together with communities to create lasting change",
    },
    {
      icon: Target,
      title: "Focused Impact",
      description: "Strategic programs designed for maximum positive impact",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards of service and transparency",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-lg mb-3 animate-fade-in-up">
            About Our Foundation
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up delay-100">
            Making a Difference Every Day
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto animate-fade-in-up delay-200">
            Shree Balaji Foundation has been at the forefront of social change, working tirelessly
            to improve lives through education, healthcare, and community development programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`p-6 text-center hover-elevate border-2 animate-fade-in-up delay-${
                  (index + 3) * 100
                }`}
                data-testid={`card-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white animate-fade-in-up delay-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To empower underprivileged communities through sustainable programs in education,
                healthcare, and social welfare. We believe in creating opportunities that enable
                individuals to build better futures for themselves and their families.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-white/80">Years of Service</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-white/80">Active Programs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold mb-2">25+</p>
                <p className="text-white/80">Communities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-4xl font-bold mb-2">100+</p>
                <p className="text-white/80">Volunteers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center animate-fade-in-up delay-800">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
            <img
              src={logoImage}
              alt="Shree Balaji Foundation Logo"
              className="relative rounded-2xl shadow-2xl w-full"
              data-testid="img-foundation-logo"
            />
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Shree Balaji Foundation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
              Established in 2013, Shree Balaji Foundation is a registered non-profit organization 
              committed to making a meaningful impact in the areas of Health, Education, Skill Development, 
              Women Empowerment, Community Development, and Social Development.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
              Our foundation is registered under 12A and 80G of the Income Tax Act, ensuring 
              transparency and accountability in our operations.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              We have successfully fulfilled our commitments by running regular filling of Income Tax, 
              GST returns and through auditing reports for the past 10 years.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 animate-fade-in-up delay-900">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Vision & Objectives
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                Shree Balaji Foundation is committed to creating a meaningful impact in society 
                through comprehensive programs in Health, Education, Skill Development, Women 
                Empowerment, Community Development, and Social Development.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={executiveImage}
                  alt="Executive Summary"
                  className="w-full rounded-xl shadow-lg"
                  data-testid="img-executive-summary"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-l-4 border-orange-500">
                <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Health</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Providing accessible healthcare services and health education to underserved communities
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-l-4 border-teal-500">
                <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Ensuring quality education reaches every child, regardless of their economic background
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-l-4 border-cyan-500">
                <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Women Empowerment</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Empowering women through skill development and economic opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
