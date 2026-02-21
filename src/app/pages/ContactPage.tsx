import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@interioinn.com', 'sales@interioinn.com'],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['123 Design Street', 'Interior City, IN 560001'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your space? Let's start a conversation about your interior design project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div {...fadeInUp} className="bg-background rounded-2xl p-8 lg:p-12 border border-border">
                <h2 className="mb-8">Book a Free Consultation</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modular-kitchens">Modular Kitchens</SelectItem>
                        <SelectItem value="wardrobes">Wardrobes</SelectItem>
                        <SelectItem value="living-room">Living Room Furniture</SelectItem>
                        <SelectItem value="office-interiors">Office Interiors</SelectItem>
                        <SelectItem value="complete-interiors">Complete Home Interiors</SelectItem>
                        <SelectItem value="hardware">Hardware & Fittings</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="Mumbai" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5">Under ₹5 Lakhs</SelectItem>
                          <SelectItem value="5-10">₹5 - 10 Lakhs</SelectItem>
                          <SelectItem value="10-20">₹10 - 20 Lakhs</SelectItem>
                          <SelectItem value="20-50">₹20 - 50 Lakhs</SelectItem>
                          <SelectItem value="above-50">Above ₹50 Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project requirements..." 
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    Submit Enquiry
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                    {info.icon}
                  </div>
                  <h4 className="mb-3">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp}>
            <div className="rounded-2xl overflow-hidden border border-border h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  123 Design Street, Interior City, IN 560001
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visit Showroom Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="mb-6">Visit Our Showroom</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience our designs in person. Our showroom features full-scale displays of kitchens, wardrobes, and furniture. 
                Browse through material samples and hardware options with our expert consultants.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h4 className="mb-3">Main Showroom</h4>
                  <p className="text-sm text-muted-foreground">
                    123 Design Street<br />
                    Interior City, IN 560001
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h4 className="mb-3">Manufacturing Unit</h4>
                  <p className="text-sm text-muted-foreground">
                    Plot 45, Industrial Area<br />
                    Phase 2, IN 560002
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h4 className="mb-3">Experience Center</h4>
                  <p className="text-sm text-muted-foreground">
                    456 Premium Plaza<br />
                    Downtown, IN 560003
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">Common Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to questions you may have
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'Do you offer free consultations?',
                a: 'Yes, we provide complimentary design consultations at your location or our showroom.'
              },
              {
                q: 'What is the typical project timeline?',
                a: 'Most projects take 6-12 weeks from design approval to installation, depending on scope.'
              },
              {
                q: 'Do you provide 3D visualizations?',
                a: 'Yes, we create detailed 3D renderings of your project before manufacturing begins.'
              },
              {
                q: 'What areas do you serve?',
                a: 'We serve major cities across India with dedicated teams in each region.'
              },
              {
                q: 'What warranty do you offer?',
                a: 'We provide a 5-year warranty on all our products and workmanship.'
              },
              {
                q: 'Can I customize existing designs?',
                a: 'Absolutely! Every project is customized to your specific requirements and preferences.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <h4 className="mb-3 text-base">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
