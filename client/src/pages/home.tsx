import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Users, Heart, GraduationCap, TrendingUp, Target, Award, Globe } from 'lucide-react';

import heroImage1 from '@assets/image_1762697872211.png';
import heroImage2 from '@assets/image_1762697899307.png';
import heroImage3 from '@assets/image_1762697942154.png';

import eduImage from '@assets/generated_images/Students_collaborative_learning_education_4ac6836b.png';
import healthImage from '@assets/generated_images/Healthcare_medical_checkup_scene_932d6355.png';
import womenImage from '@assets/generated_images/Women_empowerment_workshop_session_f072e1f6.png';
import communityImage from '@assets/generated_images/Community_development_project_teamwork_58719fa2.png';
import skillImage from '@assets/generated_images/Technical_skill_training_center_a91ec481.png';
import envImage from '@assets/generated_images/Environmental_awareness_tree_planting_ff02a864.png';

import avatar1 from '@assets/generated_images/Indian_woman_portrait_headshot_ee4f7908.png';
import avatar2 from '@assets/generated_images/Indian_man_portrait_headshot_93412f40.png';
import avatar3 from '@assets/generated_images/Elderly_Indian_woman_headshot_9aa8c42c.png';
import avatar4 from '@assets/generated_images/Young_Indian_woman_headshot_f118dfba.png';

export default function Home() {
  const heroSlides = [
    {
      image: heroImage1,
      title: 'Empowering through education',
      subtitle: 'Building brighter futures for underprivileged children across communities',
      cta: 'Support education',
    },
    {
      image: heroImage2,
      title: 'Healthcare for all',
      subtitle: 'Providing essential medical care and wellness programs to those in need',
      cta: 'Learn more',
    },
    {
      image: heroImage3,
      title: 'Skills for tomorrow',
      subtitle: 'Empowering women and youth with vocational training and opportunities',
      cta: 'Get involved',
    },
  ];

  const programs = [
    {
      title: 'Quality Education',
      category: 'Education',
      description: 'Providing access to quality education and learning resources for underprivileged children.',
      image: eduImage,
    },
    {
      title: 'Healthcare Services',
      category: 'Healthcare',
      description: 'Free medical camps and healthcare services for communities in need.',
      image: healthImage,
    },
    {
      title: 'Women Empowerment',
      category: 'Empowerment',
      description: 'Skill development and empowerment programs for women and girls.',
      image: womenImage,
    },
    {
      title: 'Community Development',
      category: 'Community',
      description: 'Building sustainable communities through infrastructure and social programs.',
      image: communityImage,
    },
    {
      title: 'Skill Training',
      category: 'Training',
      description: 'Vocational training programs to enhance employability and self-reliance.',
      image: skillImage,
    },
    {
      title: 'Environmental Initiatives',
      category: 'Environment',
      description: 'Promoting environmental awareness and sustainable practices in communities.',
      image: envImage,
    },
  ];

  const testimonials = [
    {
      quote: 'The foundation helped my daughter get quality education. Today she is pursuing her dreams as a teacher. We are forever grateful.',
      author: 'Priya Sharma',
      role: 'Parent & Beneficiary',
      image: avatar1,
    },
    {
      quote: 'Through the skill training program, I learned computer skills and found a job that changed my family\'s future. Thank you for believing in us.',
      author: 'Rajesh Kumar',
      role: 'Program Graduate',
      image: avatar2,
    },
    {
      quote: 'The healthcare camp saved my life. The doctors were caring and the treatment was excellent. This foundation is a blessing to our village.',
      author: 'Kamala Devi',
      role: 'Healthcare Recipient',
      image: avatar3,
    },
    {
      quote: 'Being part of the women empowerment program gave me confidence and skills. Now I run my own tailoring business and support my family.',
      author: 'Anjali Patel',
      role: 'Entrepreneur',
      image: avatar4,
    },
  ];

  const handleVolunteerClick = () => {
    console.log('Volunteer clicked - would open volunteer registration');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroCarousel slides={heroSlides} />
        
        {/* About Section - Direct Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-muted-foreground mb-4">
                Shree Balaji Foundation is committed to creating positive change through education,
                healthcare, and community empowerment programs. Founded on the principles of compassion
                and service, we work tirelessly to uplift underprivileged communities.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our mission is to provide equal opportunities for all, breaking barriers through
                sustainable development initiatives that transform lives and build stronger communities.
              </p>
              <div className="font-devanagari text-xl text-primary mt-8">
                सर्वे भवन्तु सुखिनः | सर्वे सन्तु निरामयाः
              </div>
              <p className="text-sm text-muted-foreground mt-2 italic">
                May all be happy, May all be free from illness
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section - Light Gray Background */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover-elevate" data-testid="card-stat-volunteers">
                <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Volunteers</div>
              </Card>
              <Card className="p-6 text-center hover-elevate" data-testid="card-stat-beneficiaries">
                <Heart className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-1">10K+</div>
                <div className="text-sm text-muted-foreground">Beneficiaries</div>
              </Card>
              <Card className="p-6 text-center hover-elevate" data-testid="card-stat-programs">
                <GraduationCap className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Programs</div>
              </Card>
              <Card className="p-6 text-center hover-elevate" data-testid="card-stat-years">
                <TrendingUp className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-4">
              Our Programs
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Discover our diverse initiatives working towards comprehensive community development and empowerment
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-program-${index}`}>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-primary mb-2">{program.category}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{program.title}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Testimonials testimonials={testimonials} />
        <CallToAction onVolunteerClick={handleVolunteerClick} />
      </main>
      <Footer />
    </div>
  );
}
