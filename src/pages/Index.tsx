import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...files]);
      toast({
        title: 'Documents uploaded',
        description: `${files.length} file(s) uploaded successfully`,
      });
    }
  };

  const programs = [
    {
      country: 'Canada',
      price: '3400 CAD',
      duration: '3 weeks',
      description: 'Explore Vancouver and Toronto with cultural immersion and university visits',
      image: 'https://cdn.poehali.dev/projects/edcc4f82-e493-4d64-8862-8e7de2e3eff8/files/4fa3d638-84a0-4e03-8387-3d99d84604db.jpg'
    },
    {
      country: 'United Kingdom',
      price: '3200 GBP',
      duration: '4 weeks',
      description: 'Study English in London and Oxford, including museum tours and theater visits',
      image: 'https://cdn.poehali.dev/projects/edcc4f82-e493-4d64-8862-8e7de2e3eff8/files/cc014e24-7699-4800-81eb-bc22c58e7b26.jpg'
    },
    {
      country: 'USA',
      price: '4500 USD',
      duration: '5 weeks',
      description: 'East Coast academic tour: Boston, New York, Washington DC with college tours',
      image: 'https://cdn.poehali.dev/projects/edcc4f82-e493-4d64-8862-8e7de2e3eff8/files/e0ebecf7-6c52-4c42-9f1c-c5a230396f42.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      program: 'Canada Program 2024',
      text: 'Amazing experience! The organization was perfect, and I made friends from all over the world.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      program: 'UK Program 2024',
      text: 'Trip Together made my dream of studying in Oxford come true. Professional and caring team.',
      rating: 5
    },
    {
      name: 'Emma Williams',
      program: 'USA Program 2023',
      text: 'The best educational trip ever! Great balance of learning and fun activities.',
      rating: 5
    }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/edcc4f82-e493-4d64-8862-8e7de2e3eff8/files/e14ba327-9b21-4c3a-8070-554790d5f82f.jpg',
    'https://cdn.poehali.dev/projects/edcc4f82-e493-4d64-8862-8e7de2e3eff8/files/489de96d-c51d-444c-a798-3522926e001d.jpg',
    'https://cdn.poehali.dev/projects/edcc4f82-e493-4d64-8862-8e7de2e3eff8/files/40e94470-9b85-4c80-904c-bd74ac1cbf94.jpg',
    'https://cdn.poehali.dev/projects/edcc4f82-e493-4d64-8862-8e7de2e3eff8/files/e14ba327-9b21-4c3a-8070-554790d5f82f.jpg',
    'https://cdn.poehali.dev/projects/edcc4f82-e493-4d64-8862-8e7de2e3eff8/files/489de96d-c51d-444c-a798-3522926e001d.jpg',
    'https://cdn.poehali.dev/projects/edcc4f82-e493-4d64-8862-8e7de2e3eff8/files/40e94470-9b85-4c80-904c-bd74ac1cbf94.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Plane" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-primary">Trip Together</span>
          </div>
          <div className="hidden md:flex gap-6">
            {['Home', 'Programs', 'Gallery', 'Testimonials', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-primary transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-primary font-semibold' : 'text-gray-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <Button onClick={() => scrollToSection('contact')}>Get Started</Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Journey to
                <span className="text-primary"> Global Education</span> Starts Here
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of students who discovered the world through our carefully crafted educational travel programs
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('programs')} className="animate-scale-in">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Explore Programs
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src="https://cdn.poehali.dev/projects/edcc4f82-e493-4d64-8862-8e7de2e3eff8/files/489de96d-c51d-444c-a798-3522926e001d.jpg"
                alt="Students traveling together"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { icon: 'Users', number: '10,000+', label: 'Happy Students' },
              { icon: 'Globe', number: '25+', label: 'Countries' },
              { icon: 'Award', number: '15 Years', label: 'Experience' },
              { icon: 'Star', number: '4.9/5', label: 'Rating' }
            ].map((stat, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name={stat.icon as any} className="text-primary mx-auto mb-3" size={40} />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">Choose your destination and start your adventure</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.country}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold">
                    {program.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    {program.country}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Icon name="Clock" size={16} />
                    <span>{program.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <Button className="w-full" onClick={() => scrollToSection('contact')}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-xl text-gray-600">Moments from our amazing trips</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Testimonials</h2>
            <p className="text-xl text-gray-600">What our students say about us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.program}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Trip Together</h2>
              <p className="text-lg mb-6 opacity-90">
                For over 15 years, we've been connecting students with incredible educational opportunities around the world. Our mission is to make international education accessible, affordable, and unforgettable.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Over 10,000 Happy Students</h4>
                    <p className="opacity-90">We've helped thousands of students achieve their dreams</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Shield" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Safe & Secure</h4>
                    <p className="opacity-90">Your safety is our top priority on every trip</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Heart" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Personalized Support</h4>
                    <p className="opacity-90">Dedicated support from application to arrival</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/edcc4f82-e493-4d64-8862-8e7de2e3eff8/files/40e94470-9b85-4c80-904c-bd74ac1cbf94.jpg"
                alt="About us"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Ready to start your journey? Get in touch with us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="program">Interested Program</Label>
                    <Input id="program" placeholder="e.g., Canada Program" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about yourself..." rows={4} />
                  </div>
                  <Button className="w-full" onClick={(e) => {
                    e.preventDefault();
                    toast({
                      title: 'Message sent!',
                      description: "We'll get back to you soon.",
                    });
                  }}>
                    <Icon name="Send" size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Upload Documents</h3>
                <p className="text-gray-600 mb-4">
                  Already enrolled? Upload your required documents here for processing.
                </p>
                <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Icon name="Upload" size={48} className="text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold mb-2">Click to upload documents</p>
                    <p className="text-sm text-gray-500">PDF, DOC, DOCX, JPG, PNG (max 10MB)</p>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="font-semibold">Uploaded files:</h4>
                    {uploadedFiles.map((file, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 p-2 rounded">
                        <Icon name="File" size={16} />
                        <span>{file.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@triptogether.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>123 Education St, Student City</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Plane" size={24} />
                <span className="text-xl font-bold">Trip Together</span>
              </div>
              <p className="text-gray-400">Making educational travel accessible to students worldwide</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Programs', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <div className="space-y-2 text-gray-400">
                <p>Canada</p>
                <p>United Kingdom</p>
                <p>USA</p>
                <p>View All</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter', 'Linkedin'].map((social) => (
                  <Icon key={social} name={social as any} size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Trip Together. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;