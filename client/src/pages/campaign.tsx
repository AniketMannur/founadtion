import { useRoute } from 'wouter';
import { PageLayout } from '@/components/PageLayout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Stethoscope, Car, Droplet, Ribbon, CheckCircle2, ChevronLeft, ChevronRight, Heart, Users, Target, TrendingUp } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

// Import medical camp images
import medicalCamp1 from '@assets/WhatsApp Image 2025-11-12 at 8.26.35 PM_1763017196320.jpeg';
import medicalCamp2 from '@assets/WhatsApp Image 2025-11-12 at 8.26.34 PM_1763017196321.jpeg';
import medicalCamp3 from '@assets/WhatsApp Image 2025-11-12 at 8.26.32 PM_1763017196322.jpeg';
import medicalCamp4 from '@assets/WhatsApp Image 2025-11-12 at 8.26.44 PM_1763017196323.jpeg';
import medicalCamp5 from '@assets/WhatsApp Image 2025-11-12 at 8.26.43 PM_1763017196323.jpeg';
import medicalCamp6 from '@assets/WhatsApp Image 2025-11-12 at 8.26.42 PM_1763017196324.jpeg';
import medicalCamp7 from '@assets/WhatsApp Image 2025-11-12 at 8.26.41 PM_1763017196324.jpeg';
import medicalCamp8 from '@assets/WhatsApp Image 2025-11-12 at 8.26.40 PM (1)_1763017196325.jpeg';
import medicalCamp9 from '@assets/WhatsApp Image 2025-11-12 at 8.26.40 PM_1763017196326.jpeg';
import medicalCamp10 from '@assets/WhatsApp Image 2025-11-12 at 8.26.39 PM_1763017196327.jpeg';
import medicalCamp11 from '@assets/WhatsApp Image 2025-11-12 at 8.26.38 PM (1)_1763017196328.jpeg';
import medicalCamp12 from '@assets/WhatsApp Image 2025-11-12 at 8.26.38 PM_1763017196330.jpeg';
import medicalCamp13 from '@assets/WhatsApp Image 2025-11-12 at 8.26.37 PM_1763017196332.jpeg';
import medicalCamp14 from '@assets/WhatsApp Image 2025-11-12 at 8.26.36 PM_1763017196333.jpeg';

// Import road safety images (first 6 images)
import roadSafety1 from '@assets/image_1763020140397.png';
import roadSafety2 from '@assets/image_1763020149360.png';
import roadSafety3 from '@assets/image_1763020158113.png';
import roadSafety4 from '@assets/image_1763020167481.png';
import roadSafety5 from '@assets/image_1763020178497.png';
import roadSafety6 from '@assets/image_1763020192303.png';

// Import blood donation images (images 7-9)
import bloodDonation1 from '@assets/image_1763020218360.png';
import bloodDonation2 from '@assets/image_1763020228063.png';
import bloodDonation3 from '@assets/image_1763020237038.png';

// Import cancer initiative images (images 10-18)
import cancerInitiative1 from '@assets/image_1763020416962.png';
import cancerInitiative2 from '@assets/image_1763020424584.png';
import cancerInitiative3 from '@assets/image_1763020431855.png';
import cancerInitiative4 from '@assets/image_1763020438630.png';
import cancerInitiative5 from '@assets/image_1763020446523.png';
import cancerInitiative6 from '@assets/image_1763020461328.png';
import cancerInitiative7 from '@assets/image_1763020468868.png';
import cancerInitiative8 from '@assets/image_1763020476991.png';
import cancerInitiative9 from '@assets/image_1763020484975.png';
import cancerInitiative10 from '@assets/image_1763020496404.png';

const medicalCampImages = [
  medicalCamp1, medicalCamp2, medicalCamp3, medicalCamp4, medicalCamp5, medicalCamp6,
  medicalCamp7, medicalCamp8, medicalCamp9, medicalCamp10, medicalCamp11, medicalCamp12,
  medicalCamp13, medicalCamp14,
];

const roadSafetyImages = [
  roadSafety1, roadSafety2, roadSafety3, roadSafety4, roadSafety5, roadSafety6,
];

const bloodDonationImages = [
  bloodDonation1, bloodDonation2, bloodDonation3,
];

const cancerInitiativeImages = [
  cancerInitiative1, cancerInitiative2, cancerInitiative3, cancerInitiative4, cancerInitiative5,
  cancerInitiative6, cancerInitiative7, cancerInitiative8, cancerInitiative9, cancerInitiative10,
];

const campaignData: Record<string, { 
  title: string; 
  icon: any; 
  description: string; 
  longDescription: string;
  details: string[]; 
  color: string;
  stats: { label: string; value: string; icon: any }[];
}> = {
  'medical-camp': {
    title: 'Medical Camp',
    icon: Stethoscope,
    description: 'Providing free medical checkups and healthcare services to underserved communities through organized medical camps.',
    longDescription: 'Our medical camps are comprehensive healthcare initiatives that bring quality medical services directly to communities in need. Since 2015, we have organized numerous camps across Maharashtra, providing free health checkups, medicines, and specialist consultations to thousands of beneficiaries.',
    color: 'from-blue-500 to-blue-600',
    stats: [
      { label: 'Patients Served', value: '10,000+', icon: Users },
      { label: 'Camps Organized', value: '50+', icon: Target },
      { label: 'Lives Impacted', value: '25,000+', icon: Heart },
    ],
    details: [
      'Free health checkups and consultations',
      'Distribution of free medicines',
      'Blood pressure and diabetes screening',
      'Eye checkup and vision testing',
      'Dental checkup services',
      'Health awareness and education sessions',
      'Specialist doctor consultations',
      'Medical reports and follow-up guidance',
    ],
  },
  'road-safety-camp': {
    title: 'Road Safety Camp',
    icon: Car,
    description: 'Creating awareness about road safety and promoting safe driving practices to reduce accidents and save lives.',
    longDescription: 'Road safety is a critical concern in our communities. Through our road safety camps, we educate students, drivers, and citizens about traffic rules, safe driving practices, and the importance of following road safety regulations. Our interactive sessions and demonstrations have reached thousands of individuals across different age groups.',
    color: 'from-orange-500 to-orange-600',
    stats: [
      { label: 'People Educated', value: '15,000+', icon: Users },
      { label: 'Safety Sessions', value: '75+', icon: Target },
      { label: 'Communities Reached', value: '40+', icon: TrendingUp },
    ],
    details: [
      'Road safety awareness sessions',
      'Traffic rules and regulations education',
      'First aid training for accidents',
      'Helmet and seatbelt importance campaigns',
      'Safe driving demonstrations',
      'Distribution of safety materials',
      'Student safety programs',
      'Community engagement activities',
    ],
  },
  'blood-donation-camp': {
    title: 'Blood Donation Camp',
    icon: Droplet,
    description: 'Organizing blood donation drives to save lives and maintain adequate blood supply for emergency medical needs.',
    longDescription: 'Blood donation is one of the noblest acts of service to humanity. Our regular blood donation camps have created a network of voluntary donors who contribute selflessly to save lives. Working in partnership with blood banks and hospitals, we ensure safe collection, testing, and distribution of blood for those in critical need.',
    color: 'from-red-500 to-red-600',
    stats: [
      { label: 'Units Collected', value: '5,000+', icon: Droplet },
      { label: 'Donation Drives', value: '60+', icon: Target },
      { label: 'Lives Saved', value: '15,000+', icon: Heart },
    ],
    details: [
      'Voluntary blood donation drives',
      'Health screening before donation',
      'Safe and hygienic collection process',
      'Donor refreshments and care',
      'Blood group identification',
      'Emergency blood availability',
      'Donor appreciation and recognition',
      'Regular donation awareness campaigns',
    ],
  },
  'cancer-initiative-camp': {
    title: 'Cancer Initiative Camp',
    icon: Ribbon,
    description: 'Raising awareness about cancer prevention, early detection, and providing support to cancer patients and their families.',
    longDescription: 'Cancer awareness and early detection can save lives. Our cancer initiative camps focus on educating communities about cancer prevention, organizing screening programs, and providing support to cancer patients. We collaborate with medical institutions to ensure that underprivileged patients receive the care and assistance they need during their treatment journey.',
    color: 'from-pink-500 to-pink-600',
    stats: [
      { label: 'Screenings Conducted', value: '3,000+', icon: Users },
      { label: 'Awareness Programs', value: '40+', icon: Target },
      { label: 'Families Supported', value: '500+', icon: Heart },
    ],
    details: [
      'Cancer awareness and education',
      'Early detection screening programs',
      'Support for cancer patients',
      'Nutritional guidance for patients',
      'Mental health counseling',
      'Financial assistance information',
      'Survivor support groups',
      'Prevention and lifestyle guidance',
    ],
  },
};

// Generic Carousel Component
interface CarouselProps {
  images: string[];
  title: string;
}

function ImageCarousel({ images, title }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoplayInterval);
  }, [emblaApi]);

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef} data-testid={`carousel-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 px-4"
              data-testid={`carousel-slide-${index}`}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center" style={{ minHeight: '500px', maxHeight: '600px' }}>
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="max-w-full max-h-[600px] w-auto h-auto object-contain"
                  loading="eager"
                  data-testid={`carousel-image-${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        size="icon"
        variant="outline"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg z-10"
        data-testid="button-carousel-prev"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        size="icon"
        variant="outline"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg z-10"
        data-testid="button-carousel-next"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6" data-testid="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-primary w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            data-testid={`carousel-dot-${index}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CampaignPage() {
  const [match, params] = useRoute('/campaigns/:campaignId');
  const campaignId = params?.campaignId || '';
  const campaign = campaignData[campaignId];

  if (!match || !campaign) {
    return (
      <PageLayout>
        <PageHero
          title="Campaign Not Found"
          subtitle="Explore Our Other Campaigns"
          description="The campaign you're looking for doesn't exist. Please check our other campaigns."
          tagline="404"
        />
      </PageLayout>
    );
  }

  const Icon = campaign.icon;

  // Get images based on campaign type
  const getCarouselImages = () => {
    switch (campaignId) {
      case 'medical-camp':
        return medicalCampImages;
      case 'road-safety-camp':
        return roadSafetyImages;
      case 'blood-donation-camp':
        return bloodDonationImages;
      case 'cancer-initiative-camp':
        return cancerInitiativeImages;
      default:
        return [];
    }
  };

  const carouselImages = getCarouselImages();

  return (
    <PageLayout>
      <PageHero
        title={campaign.title}
        subtitle="Making a Difference Together"
        description={campaign.description}
        tagline="Our Campaigns"
        primaryCta={{ label: 'Get Involved', href: '/contact' }}
        secondaryCta={{ label: 'View All Programs', href: '/programs' }}
      />

      <AnimatedSection background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${campaign.color} mb-6 opacity-0 animate-fade-in`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white opacity-0 animate-slide-in-left delay-100">
              About This Campaign
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed opacity-0 animate-slide-in-left delay-200">
              {campaign.description}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed opacity-0 animate-slide-in-left delay-300">
              {campaign.longDescription}
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {campaign.stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <Card 
                    key={stat.label} 
                    className={`p-4 text-center opacity-0 animate-fade-in-up delay-${(index + 4) * 100}`}
                  >
                    <StatIcon className={`w-6 h-6 mx-auto mb-2 bg-gradient-to-br ${campaign.color} bg-clip-text text-transparent`} />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="p-8 opacity-0 animate-fade-in-up delay-200">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Campaign Highlights
            </h3>
            <div className="space-y-4">
              {campaign.details.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 8) * 100}ms` }}
                >
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-br ${campaign.color} bg-clip-text text-transparent`} />
                  <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Image Carousel Section */}
      {carouselImages.length > 0 && (
        <AnimatedSection background="gray" delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 opacity-0 animate-fade-in">
              Our {campaign.title} in Action
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-100">
              Witness the impact of our {campaign.title.toLowerCase()} through these moments captured during our initiatives across communities.
            </p>
          </div>
          <div className="opacity-0 animate-fade-in-up delay-200">
            <ImageCarousel images={carouselImages} title={campaign.title} />
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection background="white" delay={200}>
        <div className={`bg-gradient-to-r ${campaign.color} rounded-2xl p-8 md:p-12 text-white text-center opacity-0 animate-fade-in-up`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Campaign</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Your participation and support can make a real difference. Whether you volunteer, donate,
            or simply spread the word, every contribution helps us achieve our goals and create lasting
            positive change in communities across Maharashtra.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover-elevate active-elevate-2">
                Contact Us
              </button>
            </a>
            <a href="/programs">
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md font-semibold border border-white/20 hover-elevate active-elevate-2">
                View All Programs
              </button>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
