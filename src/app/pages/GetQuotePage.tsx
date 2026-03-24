import { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
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

export function GetQuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    roomType: '',
    projectType: '',
    area: '',
    budget: '',
    timeline: '',
    fullName: '',
    phone: '',
    email: '',
    city: '',
    visitShowroom: false,
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hi! I just submitted an enquiry on InterioInn for ${formData.roomType || 'interior design'} in ${formData.city || 'my city'}. Budget: ${formData.budget || 'Not specified'}.`;
    window.open(`https://wa.me/919229950050?text=${encodeURIComponent(message)}`, '_blank');
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <WhatsAppButton />

        <section className="pt-32 pb-24 bg-background min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="mb-4">Thank You!</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your enquiry has been received! For faster assistance, connect with us on WhatsApp:
              </p>
              <Button
                size="lg"
                onClick={handleWhatsAppRedirect}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="mr-2" size={20} />
                Chat on WhatsApp
              </Button>
              <p className="text-sm text-muted-foreground mt-6">
                Our team will contact you within 24 hours
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Get Free Interior Design Quote in Ranchi | Interio Inn</title>
        <meta name="description" content="Get a free interior design quote for your home or office in Ranchi. Modular kitchens, wardrobes, complete interiors. EMI options available. Response within 24 hours." />
        <link rel="canonical" href="https://interioinn.com/get-quote" />
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
            <h1 className="mb-6">Get Your Free Quote</h1>
            <p className="text-xl text-muted-foreground">
              Tell us about your project and we'll provide a detailed estimate within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-4 sm:mx-auto max-w-2xl">
            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-12">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm ${
                      step <= currentStep
                        ? 'bg-secondary text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-12 sm:w-16 lg:w-24 h-1 ${
                        step < currentStep ? 'bg-secondary' : 'bg-muted'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-background rounded-2xl p-6 sm:p-8 lg:p-12 border border-border"
            >
              <form onSubmit={handleSubmit}>
                {/* Step 1: Space Type */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="mb-6">What space do you want to design?</h3>

                    <div>
                      <Label>Room Type *</Label>
                      <Select
                        value={formData.roomType}
                        onValueChange={(value) => updateFormData('roomType', value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full Home">Full Home</SelectItem>
                          <SelectItem value="Modular Kitchen">Modular Kitchen</SelectItem>
                          <SelectItem value="Wardrobe">Wardrobe</SelectItem>
                          <SelectItem value="Living Room">Living Room</SelectItem>
                          <SelectItem value="Bedroom">Bedroom</SelectItem>
                          <SelectItem value="Office">Office</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Project Type *</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => updateFormData('projectType', value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="New Home">New Home</SelectItem>
                          <SelectItem value="Renovation">Renovation</SelectItem>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 2: Space Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="mb-6">Tell us about your space</h3>

                    <div>
                      <Label>Approximate Area *</Label>
                      <Select
                        value={formData.area}
                        onValueChange={(value) => updateFormData('area', value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Under 500 sq ft">Under 500 sq ft</SelectItem>
                          <SelectItem value="500-1000 sq ft">500-1000 sq ft</SelectItem>
                          <SelectItem value="1000-2000 sq ft">1000-2000 sq ft</SelectItem>
                          <SelectItem value="2000+ sq ft">2000+ sq ft</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Budget Range *</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => updateFormData('budget', value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Under 2L">Under ₹2 Lakhs</SelectItem>
                          <SelectItem value="2L-5L">₹2 Lakhs - ₹5 Lakhs</SelectItem>
                          <SelectItem value="5L-10L">₹5 Lakhs - ₹10 Lakhs</SelectItem>
                          <SelectItem value="10L-25L">₹10 Lakhs - ₹25 Lakhs</SelectItem>
                          <SelectItem value="25L+">₹25 Lakhs+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Timeline *</Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => updateFormData('timeline', value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ASAP">ASAP</SelectItem>
                          <SelectItem value="1-3 months">1-3 months</SelectItem>
                          <SelectItem value="3-6 months">3-6 months</SelectItem>
                          <SelectItem value="Flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="mb-6">How can we reach you?</h3>

                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => updateFormData('fullName', e.target.value)}
                        placeholder="Enter your full name"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        placeholder="+91 92299 50050"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        placeholder="your@email.com"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => updateFormData('city', e.target.value)}
                        placeholder="Ranchi"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="visitShowroom"
                        checked={formData.visitShowroom}
                        onCheckedChange={(checked) => updateFormData('visitShowroom', checked as boolean)}
                      />
                      <Label htmlFor="visitShowroom" className="text-sm font-normal cursor-pointer">
                        I'd like to visit the showroom in Ranchi
                      </Label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 mt-8">
                  {currentStep > 1 ? (
                    <Button type="button" variant="outline" onClick={handleBack} className="w-full sm:w-auto">
                      <ArrowLeft className="mr-2" size={18} />
                      Back
                    </Button>
                  ) : (
                    <div className="hidden sm:block" />
                  )}

                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white"
                    >
                      Next
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white"
                    >
                      Submit Enquiry
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Step Labels */}
            <div className="flex justify-between mt-6 text-xs sm:text-sm text-muted-foreground">
              <span className={currentStep === 1 ? 'text-secondary font-medium' : ''}>
                1. Space Type
              </span>
              <span className={currentStep === 2 ? 'text-secondary font-medium' : ''}>
                2. Details
              </span>
              <span className={currentStep === 3 ? 'text-secondary font-medium' : ''}>
                3. Contact
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">852+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">15,000</div>
              <p className="text-muted-foreground">sq ft Showroom</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">24hrs</div>
              <p className="text-muted-foreground">Response Time</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
