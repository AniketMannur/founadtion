import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Feedback() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    category: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    toast({
      title: 'Thank you for your feedback!',
      description: 'We appreciate your input and will use it to improve our services.',
    });
    setFormData({ name: '', email: '', rating: 5, category: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: name === 'rating' ? Number(value) : value 
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="bg-primary/10 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <MessageSquare className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Share Your Feedback
              </h1>
              <p className="text-lg text-muted-foreground">
                Your opinions help us improve our programs and services. We value your feedback and suggestions.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Why Your Feedback Matters</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Improve Our Services</h3>
                  <p className="text-muted-foreground">
                    Your insights help us understand what works well and what needs improvement in our programs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Better Community Support</h3>
                  <p className="text-muted-foreground">
                    Feedback helps us tailor our services to better meet the needs of the communities we serve.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Continuous Growth</h3>
                  <p className="text-muted-foreground">
                    We're committed to learning and growing. Your feedback is essential to our journey of improvement.
                  </p>
                </div>
              </div>

              <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Quick Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Be specific about your experience</li>
                  <li>• Share both positives and areas for improvement</li>
                  <li>• Suggest actionable improvements if possible</li>
                  <li>• All feedback is kept confidential</li>
                </ul>
              </Card>
            </div>

            <Card className="p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Feedback Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-foreground mb-2">
                    Overall Rating
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      id="rating"
                      name="rating"
                      min="1"
                      max="5"
                      value={formData.rating}
                      onChange={handleChange}
                      className="flex-1"
                      data-testid="input-rating"
                    />
                    <div className="flex items-center gap-1">
                      {[...Array(formData.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                      {[...Array(5 - formData.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-muted" />
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                    Feedback Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    data-testid="select-category"
                  >
                    <option value="">Select a category</option>
                    <option value="program">Program/Service Quality</option>
                    <option value="staff">Staff Interaction</option>
                    <option value="facility">Facility/Infrastructure</option>
                    <option value="website">Website Experience</option>
                    <option value="general">General Feedback</option>
                    <option value="suggestion">Suggestion</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Feedback
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Share your thoughts, experiences, or suggestions..."
                    data-testid="textarea-message"
                  />
                </div>

                <Button type="submit" className="w-full" data-testid="button-submit">
                  Submit Feedback
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
