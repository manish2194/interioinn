import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Hammer, Home, Palette, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function HomePage() {
  const services = [
    {
      title: 'Modular Kitchens',
      description: 'Contemporary kitchen designs with smart storage solutions',
      image: 'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2MzIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/modular-kitchens'
    },
    {
      title: 'Wardrobes',
      description: 'Custom closets designed for your lifestyle',
      image: 'https://images.unsplash.com/photo-1765277789183-a08a084312bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3YXJkcm9iZSUyMGNsb3NldCUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/wardrobes'
    },
    {
      title: 'Living Room Furniture',
      description: 'Elegant furniture pieces that define comfort',
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxNTk1NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/living-room'
    },
    {
      title: 'Office Interiors',
      description: 'Professional workspaces that inspire productivity',
      image: 'https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjE1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/office-interiors'
    },
    {
      title: 'Hardware & Fittings',
      description: 'Premium quality fixtures for lasting elegance',
      image: 'https://images.unsplash.com/photo-1737467042207-7fc6318d3e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZnVybml0dXJlJTIwaGFyZHdhcmUlMjBmaXR0aW5nc3xlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/hardware-fittings'
    },
    {
      title: 'Complete Interiors',
      description: 'End-to-end turnkey interior solutions',
      image: 'https://images.unsplash.com/photo-1748887522222-ae67e761fb64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGluaW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzE1ODYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/complete-interiors'
    },
  ];

  const whyChooseUs = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Custom Manufacturing',
      description: 'In-house manufacturing facility for bespoke furniture'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'End-to-End Execution',
      description: 'Complete interior solutions from design to installation'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Premium Materials',
      description: 'Only the finest quality materials and finishes'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Expert Designers',
      description: 'Experienced team bringing your vision to life'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'On-Time Delivery',
      description: 'Commitment to deadlines without compromising quality'
    },
  ];

  const featuredProjects = [
    {
      id: '1',
      name: 'Luxury Penthouse',
      location: 'Mumbai',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '2',
      name: 'Modern Villa',
      location: 'Bangalore',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1771327811795-6197403af846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGludGVyaW9yJTIwZGVzaWduJTIwYmVkcm9vbXxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '3',
      name: 'Fine Dining Restaurant',
      location: 'Delhi',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1651440204216-548382747b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3MTY1OTQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const process = [
    { step: '01', title: 'Consultation', description: 'Understanding your vision and requirements' },
    { step: '02', title: 'Design', description: 'Creating detailed 3D designs and plans' },
    { step: '03', title: 'Manufacturing', description: 'Custom fabrication in our workshop' },
    { step: '04', title: 'Installation', description: 'Professional on-site execution' },
    { step: '05', title: 'Handover', description: 'Final inspection and project completion' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      text: 'InterioInn transformed our home into a dream space. Their attention to detail and quality is unmatched.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      text: 'Professional service from start to finish. The modular kitchen exceeded our expectations!',
      rating: 5
    },
    {
      name: 'Anita Desai',
      location: 'Delhi',
      text: 'Best interior designers we have worked with. They understood our needs perfectly.',
      rating: 5
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxNTk1NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-white mb-6">Complete Interior Solutions.<br />Designed. Built. Delivered.</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From custom furniture manufacturing to complete interior design, we transform spaces into timeless masterpieces. Your dream interior, crafted to perfection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  Explore Our Work
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                  Get a Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why InterioInn Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">Why Choose InterioInn</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine craftsmanship, innovation, and premium materials to deliver interiors that stand the test of time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-secondary">
                  {item.icon}
                </div>
                <h4 className="mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive interior solutions tailored to your unique style and needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl h-96 cursor-pointer"
              >
                <Link to={service.link}>
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center text-white text-sm font-medium">
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="flex justify-between items-end mb-16">
            <div>
              <h2 className="mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore our portfolio of exceptional interior transformations
              </p>
            </div>
            <Link to="/projects">
              <Button variant="outline" className="hidden md:flex">
                View All Projects
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl h-[500px]"
              >
                <Link to={`/projects/${project.id}`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs mb-4">
                      {project.category}
                    </div>
                    <h3 className="text-white mb-2">{project.name}</h3>
                    <p className="text-white/80 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:hidden flex justify-center">
            <Link to="/projects">
              <Button variant="outline">
                View All Projects
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to bringing your vision to life
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
                {process.map((item, index) => (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="text-center relative"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold relative z-10">
                      {item.step}
                    </div>
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by hundreds of satisfied homeowners and businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-white mb-4">Let's Build Your Dream Space</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to transform your home or office? Get a free consultation with our expert designers today.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Consultation Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
