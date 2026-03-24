import { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    city: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = `${formData.firstName} ${formData.lastName}`.trim();
    const service = formData.service || 'interior design';
    const whatsappUrl = `https://wa.me/919229950050?text=Hi, my name is ${encodeURIComponent(name)}. I'm interested in ${encodeURIComponent(service)}.`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 92299 50050'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@interioinn.com', 'sales@interioinn.com'],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['Plot No. 47, Harmu Road', 'Near Harmu Housing Colony', 'Ranchi, Jharkhand - 834002'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Interio Inn | Visit Our Showroom in Ranchi</title>
        <meta name="description" content="Contact Interio Inn at +91 92299 50050. Visit our 15,000 sq ft showroom at Harmu Road, Ranchi. We serve Ranchi, Jamshedpur, Dhanbad, Bokaro." />
        <link rel="canonical" href="https://interioinn.com/contact" />
      </Helmet>
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Rahul"
                        className="mt-2"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Sharma"
                        className="mt-2"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="rahul@example.com"
                        className="mt-2"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 92299 50050"
                        className="mt-2"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Modular Kitchens">Modular Kitchens</SelectItem>
                        <SelectItem value="Wardrobes">Wardrobes</SelectItem>
                        <SelectItem value="Living Room Furniture">Living Room Furniture</SelectItem>
                        <SelectItem value="Office Interiors">Office Interiors</SelectItem>
                        <SelectItem value="Complete Home Interiors">Complete Home Interiors</SelectItem>
                        <SelectItem value="Hardware & Fittings">Hardware & Fittings</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        placeholder="Ranchi"
                        className="mt-2"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
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
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white">
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
            <div className="rounded-2xl overflow-hidden border border-border h-48 sm:h-64 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.5!2d85.3096!3d23.3441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDIwJzM4LjgiTiA4NcKwMTgnMzQuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Interio Inn Location - Ranchi, Jharkhand"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visit Showroom Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6">Visit Ranchi's Largest Interior Showroom</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Step into our 15,000 sq. ft. showroom — explore hundreds of designs across kitchens, wardrobes, living rooms and more.
                Browse through material samples and hardware options with our expert consultants.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h4 className="mb-3">Main Showroom</h4>
                  <p className="text-sm text-muted-foreground">
                    Plot No. 47, Harmu Road<br />
                    Ranchi, Jharkhand - 834002
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h4 className="mb-3">Service Area</h4>
                  <p className="text-sm text-muted-foreground">
                    Ranchi, Jamshedpur<br />
                    Dhanbad, Bokaro
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h4 className="mb-3">Working Hours</h4>
                  <p className="text-sm text-muted-foreground">
                    Mon-Sat: 9AM - 7PM<br />
                    Sunday: 10AM - 5PM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Common Questions</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to questions you may have
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                a: 'We serve Ranchi, Jamshedpur, Dhanbad, Bokaro and other cities across Jharkhand.'
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
                className="bg-white rounded-xl px-4 sm:px-6 py-5 sm:py-6 border border-border"
              >
                <h4 className="mb-3 text-sm sm:text-base">{faq.q}</h4>
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
