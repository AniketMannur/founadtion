import { useRoute } from 'wouter';
import { PageLayout } from '@/components/PageLayout';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Stethoscope, Car, Droplet, Ribbon, CheckCircle2 } from 'lucide-react';

const campaignData: Record<string, { title: string; icon: any; description: string; details: string[]; color: string }> = {
  'medical-camp': {
    title: 'Medical Camp',
    icon: Stethoscope,
    description: 'Providing free medical checkups and healthcare services to underserved communities through organized medical camps.',
    color: 'from-blue-500 to-blue-600',
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
    color: 'from-orange-500 to-orange-600',
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
    color: 'from-red-500 to-red-600',
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
    color: 'from-pink-500 to-pink-600',
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
          <div>
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${campaign.color} mb-6`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About This Campaign
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              {campaign.description}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Through this initiative, we aim to create lasting impact in communities by providing
              essential services and raising awareness. Join us in our mission to make a difference.
            </p>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Campaign Highlights
            </h3>
            <div className="space-y-4">
              {campaign.details.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-br ${campaign.color} bg-clip-text text-transparent`} />
                  <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection background="gray" delay={200}>
        <div className={`bg-gradient-to-r ${campaign.color} rounded-2xl p-8 md:p-12 text-white text-center`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Campaign</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Your participation and support can make a real difference. Whether you volunteer, donate,
            or simply spread the word, every contribution helps us achieve our goals.
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
