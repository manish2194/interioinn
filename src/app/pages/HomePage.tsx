import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  "name": "Interio Inn",
  "telephone": "+91-92299-50050",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Harmu Road",
    "addressLocality": "Ranchi",
    "addressRegion": "Jharkhand",
    "postalCode": "834002",
    "addressCountry": "IN"
  },
  "url": "https://interioinn.com",
  "openingHours": ["Mo-Sa 09:00-19:00", "Su 10:00-17:00"]
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
};

export function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: '01',
      title: 'Modular Kitchens',
      description: 'Contemporary kitchen designs with smart storage solutions and premium hardware.',
      image: 'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2MzIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/modular-kitchens'
    },
    {
      id: '02',
      title: 'Wardrobes',
      description: 'Custom closets designed for your lifestyle with optimized storage.',
      image: 'https://images.unsplash.com/photo-1765277789183-a08a084312bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3YXJkcm9iZSUyMGNsb3NldCUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/wardrobes'
    },
    {
      id: '03',
      title: 'Living Spaces',
      description: 'Elegant furniture pieces that define comfort and timeless style.',
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxNTk1NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/living-room'
    },
    {
      id: '04',
      title: 'Office Interiors',
      description: 'Professional workspaces that inspire productivity and creativity.',
      image: 'https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjE1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/office-interiors'
    },
    {
      id: '05',
      title: 'Hardware & Fittings',
      description: 'Premium quality fixtures from international brands.',
      image: 'https://images.unsplash.com/photo-1737467042207-7fc6318d3e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZnVybml0dXJlJTIwaGFyZHdhcmUlMjBmaXR0aW5nc3xlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/hardware-fittings'
    },
    {
      id: '06',
      title: 'Complete Interiors',
      description: 'End-to-end turnkey interior solutions for your entire home.',
      image: 'https://images.unsplash.com/photo-1748887522222-ae67e761fb64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGluaW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzE1ODYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/services/complete-interiors'
    },
  ];

  const featuredProjects = [
    {
      id: '1',
      name: 'Modern Villa Interior',
      location: 'Ranchi',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: '2',
      name: 'Modular Kitchen',
      location: 'Jamshedpur',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2MzIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '3',
      name: 'Corporate Office',
      location: 'Ranchi',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1651440204216-548382747b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3MTY1OTQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '4',
      name: 'Luxury Bedroom',
      location: 'Dhanbad',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1771327811795-6197403af846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGludGVyaW9yJTIwZGVzaWduJTIwYmVkcm9vbXxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '5',
      name: 'Entertainment Room',
      location: 'Ranchi',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1762807039386-35cf41decf51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0diUyMHVuaXQlMjBlbnRlcnRhaW5tZW50JTIwY2VudGVyfGVufDF8fHx8MTc3MTY2MzIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const process = [
    { step: '01', title: 'Consultation', description: 'We understand your vision, space, and budget' },
    { step: '02', title: 'Design', description: 'Our designers create detailed 3D layouts' },
    { step: '03', title: 'Manufacturing', description: 'Custom fabrication at our Ranchi workshop' },
    { step: '04', title: 'Installation', description: 'Expert team handles on-site setup' },
    { step: '05', title: 'Handover', description: 'Final walk-through and 1-year warranty' },
  ];

  const testimonials = [
    {
      name: 'Rahul Agarwal',
      location: 'Ranchi',
      text: 'Interio Inn transformed our home into a dream space. Their attention to detail and craftsmanship exceeded all our expectations. The 15,000 sq ft showroom helped us visualize everything before finalizing.',
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      name: 'Sunita Devi',
      location: 'Jamshedpur',
      text: 'Professional service from start to finish. The modular kitchen they designed is both beautiful and functional. Best interior designers in Jharkhand without a doubt.',
      image: 'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      name: 'Prakash Sinha',
      location: 'Dhanbad',
      text: 'Best interior designers we have worked with. They understood our needs perfectly and delivered on time. The quality of materials and workmanship is exceptional.',
      image: 'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  const brands = [
    { name: 'HAFELE', category: 'Hardware' },
    { name: 'HETTICH', category: 'Hardware' },
    { name: 'EBCO', category: 'Hardware' },
    { name: 'DORSET', category: 'Hardware' },
    { name: 'ANCHOR', category: 'Electrical' },
    { name: 'ASIAN PAINTS', category: 'Finishes' },
    { name: 'GREENPLY', category: 'Plywood' },
    { name: 'MERINO', category: 'Laminates' },
    { name: 'BAJAJ FINSERV', category: 'Finance' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Interio Inn | Best Interior Designer in Ranchi | 15,000 sq ft Showroom</title>
        <meta name="description" content="Ranchi's premier interior design studio. Modular kitchens, wardrobes, complete home interiors. Visit our 15,000 sq ft showroom in Ranchi, Jharkhand." />
        <meta name="keywords" content="interior designer ranchi, modular kitchen ranchi, wardrobe ranchi, home interior jharkhand, interior design jamshedpur, dhanbad interior" />
        <link rel="canonical" href="https://interioinn.com" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Header />
      <WhatsAppButton />

      {/* Hero Section - Premium Editorial Style */}
      <section className="relative h-screen min-h-[700px] flex items-end pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxNTk1NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#C9B49A] text-xs sm:text-sm tracking-[0.25em] uppercase mb-4"
            >
              Ranchi's Premier Interior Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.1] mb-6"
            >
              Spaces That<br/><em className="font-normal">Tell Your Story</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
            >
              Complete interior solutions — designed, crafted, and delivered across Jharkhand.
              Visit our 15,000 sq. ft. showroom in Ranchi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/get-quote">
                <Button size="lg" className="bg-[#7C5C3E] hover:bg-[#6a4f35] text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-none">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-none backdrop-blur-sm">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Stats - Bottom Right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-16 lg:bottom-20 right-4 lg:right-8 hidden md:flex gap-8 lg:gap-12"
          >
            {[
              ['852+', 'Projects'],
              ['152k+', 'Clients'],
              ['15,000', 'sq ft Showroom']
            ].map(([num, label]) => (
              <div key={label} className="text-right">
                <div className="text-white text-2xl lg:text-3xl font-light">{num}</div>
                <div className="text-white/60 text-[10px] lg:text-xs tracking-widest uppercase">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/50 hidden lg:flex"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-white/30 origin-top"
          />
        </motion.div>
      </section>

      {/* Why InterioInn - Editorial Split Layout */}
      <section className="py-20 sm:py-28 bg-[#F0EBE3]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <motion.div
              {...fadeInUp}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div {...fadeInUp} className="lg:pl-8">
              <p className="text-[#7C5C3E] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-[#1C1C1A]">
                Craftsmanship<br/>at Its Core
              </h2>
              <p className="text-[#6B6258] text-base sm:text-lg leading-relaxed mb-10">
                With over 15 years of expertise, we blend traditional craftsmanship with modern design sensibilities.
                Every project reflects our commitment to quality, attention to detail, and passion for creating
                spaces that inspire.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-10">
                {[
                  ['15+', 'Years Experience'],
                  ['852+', 'Projects Completed'],
                  ['152k+', 'Happy Clients'],
                  ['1 Year', 'Warranty'],
                ].map(([value, label]) => (
                  <div key={label} className="border-l-2 border-[#7C5C3E] pl-4">
                    <div className="text-2xl sm:text-3xl text-[#1C1C1A] font-light">{value}</div>
                    <div className="text-sm text-[#6B6258]">{label}</div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-flex items-center text-[#7C5C3E] font-medium hover:gap-3 gap-2 transition-all">
                Our Story <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Dark Editorial */}
      <section className="py-20 sm:py-28 bg-[#1C1C1A]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16">
            <p className="text-[#C9B49A] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Our Expertise</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">What We Create</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Service List */}
            <div className="space-y-0">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  {...fadeInUp}
                  transition={{ delay: index * 0.05 }}
                  className={`group cursor-pointer border-b border-white/10 py-6 transition-colors ${
                    activeService === index ? 'border-[#C9B49A]' : ''
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <Link to={service.link} className="flex items-start gap-4 sm:gap-6">
                    <span className={`text-sm transition-colors ${
                      activeService === index ? 'text-[#C9B49A]' : 'text-white/30'
                    }`}>{service.id}</span>
                    <div className="flex-1">
                      <h3 className={`text-xl sm:text-2xl lg:text-3xl transition-colors mb-2 ${
                        activeService === index ? 'text-[#C9B49A]' : 'text-white'
                      }`}>{service.title}</h3>
                      <p className={`text-sm transition-all overflow-hidden ${
                        activeService === index
                          ? 'text-white/60 max-h-20 opacity-100'
                          : 'text-white/40 max-h-0 opacity-0 lg:max-h-20 lg:opacity-100'
                      }`}>{service.description}</p>
                    </div>
                    <ArrowRight className={`flex-shrink-0 transition-all ${
                      activeService === index
                        ? 'text-[#C9B49A] translate-x-0 opacity-100'
                        : 'text-white/30 -translate-x-2 opacity-0'
                    }`} size={20} />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right - Active Service Image */}
            <motion.div
              {...fadeInUp}
              className="relative h-[300px] sm:h-[400px] lg:h-full min-h-[400px] rounded-lg overflow-hidden hidden sm:block"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-12 text-center lg:text-left">
            <Link to="/services/modular-kitchens">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-none px-8 py-6">
                Explore All Services <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section - Masonry Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <p className="text-[#7C5C3E] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Our Portfolio</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1C1A]">Recent Projects</h2>
            </div>
            <Link to="/projects" className="hidden sm:inline-flex items-center text-[#7C5C3E] font-medium hover:gap-3 gap-2 transition-all">
              View All <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-lg ${
                  project.featured ? 'sm:col-span-2 sm:row-span-2 h-[300px] sm:h-auto sm:aspect-square' : 'h-[250px] sm:h-[300px]'
                }`}
              >
                <Link to={`/projects/${project.id}`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-[#7C5C3E] text-white text-xs rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl mb-1">{project.name}</h3>
                    <p className="text-white/70 text-sm flex items-center">
                      <MapPin size={14} className="mr-1" /> {project.location}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/projects">
              <Button variant="outline" className="border-[#7C5C3E] text-[#7C5C3E] hover:bg-[#7C5C3E] hover:text-white rounded-none px-8 py-6">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Timeline */}
      <section className="py-20 sm:py-28 bg-[#F0EBE3]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-[#7C5C3E] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Our Approach</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1C1A]">How We Work</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              <div className="absolute top-8 left-0 right-0 h-px bg-[#7C5C3E]/20" />
              <div className="grid grid-cols-5 gap-8">
                {process.map((item, index) => (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#7C5C3E] text-white flex items-center justify-center text-lg font-medium relative z-10">
                      {item.step}
                    </div>
                    <h4 className="text-lg text-[#1C1C1A] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#6B6258]">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile - Vertical */}
            <div className="lg:hidden space-y-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-14 h-14 flex-shrink-0 rounded-full bg-[#7C5C3E] text-white flex items-center justify-center text-base font-medium">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg text-[#1C1C1A] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#6B6258]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Cinematic Quote Carousel */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={testimonials[activeTestimonial].image}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Quote Mark */}
            <motion.div
              {...fadeInUp}
              className="text-[#C9B49A] text-8xl sm:text-9xl font-serif leading-none mb-8 opacity-50"
            >
              "
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white text-xl sm:text-2xl lg:text-3xl leading-relaxed mb-8 italic font-light">
                  {testimonials[activeTestimonial].text}
                </p>
                <div>
                  <p className="text-white font-medium text-lg">{testimonials[activeTestimonial].name}</p>
                  <p className="text-white/60 text-sm">{testimonials[activeTestimonial].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-[#C9B49A]' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="text-[#7C5C3E] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Premium Partners</p>
            <h2 className="text-3xl sm:text-4xl text-[#1C1C1A]">Trusted Brands</h2>
            <p className="text-[#6B6258] mt-4 max-w-xl mx-auto">
              We stock and install only the finest materials from world-renowned brands
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-6"
          >
            {brands.map((brand, index) => (
              <span
                key={brand.name}
                className="text-xl sm:text-2xl lg:text-3xl font-light text-[#6B6258]/50 hover:text-[#7C5C3E] transition-colors cursor-default tracking-wider"
              >
                {brand.name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Split Layout */}
      <section className="relative min-h-[600px] lg:min-h-[700px]">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#1C1C1A]" />
          <div className="relative hidden lg:block">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Beautiful Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="max-w-xl">
            <motion.div {...fadeInUp}>
              <p className="text-[#C9B49A] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Ready to Begin?</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Let's Create Something Beautiful
              </h2>
              <p className="text-white/70 text-base sm:text-lg mb-10 leading-relaxed">
                Visit our showroom or get a free quote online. Our designers are ready to bring your vision to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-[#7C5C3E] hover:bg-[#6a4f35] text-white px-8 py-6 rounded-none">
                    Visit Showroom
                  </Button>
                </Link>
                <Link to="/get-quote">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-none">
                    Get Free Quote
                  </Button>
                </Link>
              </div>

              <div className="space-y-4 text-white/70">
                <p className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#C9B49A]" />
                  Harmu Road, Ranchi, Jharkhand
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={18} className="text-[#C9B49A]" />
                  <a href="tel:+919229950050" className="hover:text-white transition-colors">+91 92299 50050</a>
                </p>
                <p className="flex items-center gap-3">
                  <Clock size={18} className="text-[#C9B49A]" />
                  Mon–Sat 9AM–7PM | Sun 10AM–5PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
