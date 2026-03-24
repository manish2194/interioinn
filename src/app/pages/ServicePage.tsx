import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router';
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
};

export function ServicePage() {
  const { serviceId } = useParams();

  const services: Record<string, {
    title: string;
    description: string;
    heroImage: string;
    overview: string;
    benefits: string[];
    process: { step: string; description: string }[];
    faqs: { q: string; a: string }[];
    gallery: string[];
    features: { title: string; description: string }[];
  }> = {
    'modular-kitchens': {
      title: 'Modular Kitchens',
      description: 'Transform your cooking space with contemporary modular kitchen designs',
      heroImage: 'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2MzIxOHww&ixlib=rb-4.1.0&q=80&w=1920',
      overview: 'Our modular kitchens combine functionality with aesthetic appeal. Each design is customized to your space, cooking habits, and style preferences. We use premium materials and hardware to ensure durability and ease of use.',
      features: [
        { title: 'Smart Storage', description: 'Maximize every inch with innovative storage solutions' },
        { title: 'Premium Hardware', description: 'Hafele & Hettich fittings for smooth operation' },
        { title: 'Custom Designs', description: 'Tailored to your space and lifestyle' },
      ],
      benefits: [
        'Smart storage solutions that maximize space',
        'Easy to clean and maintain surfaces',
        'Customizable layouts to fit any space',
        'Premium quality materials and fittings',
        'Soft-close mechanisms on all drawers',
        'Variety of finishes from matte to high-gloss'
      ],
      process: [
        { step: 'Space Assessment', description: 'Our designers visit your home to understand your kitchen requirements' },
        { step: '3D Design', description: 'We create detailed 3D visualizations of your modular kitchen' },
        { step: 'Manufacturing', description: 'Precision manufacturing in our state-of-the-art facility' },
      ],
      faqs: [
        { q: 'What materials do you use for modular kitchens?', a: 'We use premium materials including marine plywood, MDF, and particle board with various finishes like laminate, acrylic, and PU paint.' },
        { q: 'How long does installation take?', a: 'Typically, a modular kitchen installation takes 7-10 days depending on the size and complexity of the design.' },
        { q: 'Do you provide a warranty?', a: 'Yes, we provide a 5-year warranty on all modular kitchen products against manufacturing defects.' },
        { q: 'Can I customize the design?', a: 'Absolutely! Every kitchen is designed according to your specific requirements, space, and preferences.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      ]
    },
    'wardrobes': {
      title: 'Wardrobes',
      description: 'Custom closets designed for your lifestyle and storage needs',
      heroImage: 'https://images.unsplash.com/photo-1765277789183-a08a084312bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3YXJkcm9iZSUyMGNsb3NldCUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1920',
      overview: 'Our custom wardrobes are designed to organize your clothing and accessories efficiently while adding elegance to your bedroom. Each wardrobe is tailored to your storage needs and space constraints.',
      features: [
        { title: 'Custom Configuration', description: 'Internal layouts designed for your specific needs' },
        { title: 'Door Options', description: 'Sliding, hinged, or walk-in configurations' },
        { title: 'Integrated Lighting', description: 'LED lighting for easy visibility' },
      ],
      benefits: [
        'Customized internal configurations',
        'Sliding or hinged door options',
        'Optimized storage for clothes, shoes, and accessories',
        'Mirror and lighting integration',
        'Choice of materials and finishes',
        'Space-efficient designs'
      ],
      process: [
        { step: 'Needs Analysis', description: 'Understanding your storage requirements and space' },
        { step: 'Design Creation', description: '3D visualization with internal layout options' },
        { step: 'Production', description: 'Precision crafting in our workshop' },
      ],
      faqs: [
        { q: 'What types of wardrobes do you offer?', a: 'We offer sliding door wardrobes, hinged door wardrobes, walk-in closets, and reach-in closets, all customizable to your needs.' },
        { q: 'Can you work with odd-shaped spaces?', a: 'Yes, we specialize in creating custom solutions for any space, including corners and sloped ceilings.' },
        { q: 'What internal fittings are available?', a: 'We offer hanging rods, shelves, drawers, shoe racks, accessories trays, trouser hangers, and LED lighting.' },
        { q: 'How do I maintain my wardrobe?', a: 'Regular dusting and occasional cleaning with a damp cloth is sufficient. Avoid harsh chemicals on the surfaces.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1765277789183-a08a084312bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        'https://images.unsplash.com/photo-1558997519-83ea9252edf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      ]
    },
    'living-room': {
      title: 'Living Room Furniture',
      description: 'Elegant furniture pieces that define comfort and style',
      heroImage: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxNTk1NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1920',
      overview: 'Create a living space that reflects your personality with our custom-designed furniture. From TV units to sofas, coffee tables to display units, every piece is crafted to perfection.',
      features: [
        { title: 'Custom Sizing', description: 'Furniture built to fit your exact space' },
        { title: 'Premium Materials', description: 'Quality woods and upholstery fabrics' },
        { title: 'Design Flexibility', description: 'Modern, contemporary, or traditional styles' },
      ],
      benefits: [
        'Custom-sized furniture to fit your space',
        'Wide range of styles from modern to traditional',
        'Premium upholstery and wood finishes',
        'Integrated storage solutions',
        'Durable construction for long-lasting use',
        'Coordinated design elements'
      ],
      process: [
        { step: 'Style Consultation', description: 'Discuss your aesthetic preferences and functional needs' },
        { step: 'Design Development', description: 'Detailed drawings and material selection' },
        { step: 'Delivery & Setup', description: 'Careful installation and arrangement' },
      ],
      faqs: [
        { q: 'Can you match existing furniture?', a: 'Yes, we can create pieces that complement your existing furniture in style, color, and finish.' },
        { q: 'Do you offer upholstery services?', a: 'Yes, we provide a wide selection of fabrics and leather for custom upholstery.' },
        { q: 'What wood types do you use?', a: 'We work with various woods including teak, oak, walnut, and engineered wood depending on your budget and preferences.' },
        { q: 'Can I see samples before ordering?', a: 'Absolutely! We have a showroom with samples of finishes, fabrics, and completed furniture pieces.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        'https://images.unsplash.com/photo-1762807039386-35cf41decf51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      ]
    },
    'office-interiors': {
      title: 'Office Interiors',
      description: 'Professional workspaces that inspire productivity and creativity',
      heroImage: 'https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjE1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1920',
      overview: 'Design a workspace that boosts productivity and reflects your brand identity. We create functional, aesthetic office environments from reception areas to conference rooms.',
      features: [
        { title: 'Ergonomic Design', description: 'Furniture that promotes employee wellbeing' },
        { title: 'Brand Integration', description: 'Spaces that reflect your company identity' },
        { title: 'Flexible Layouts', description: 'Adaptable configurations for collaboration' },
      ],
      benefits: [
        'Ergonomic furniture for employee wellbeing',
        'Efficient space utilization',
        'Professional aesthetic that impresses clients',
        'Integrated technology solutions',
        'Flexible layouts for collaboration',
        'Sustainable and eco-friendly materials'
      ],
      process: [
        { step: 'Requirements Gathering', description: 'Understanding your business needs and culture' },
        { step: 'Concept Design', description: 'Creating mood boards and design concepts' },
        { step: 'Execution', description: 'Coordinated installation with minimal disruption' },
      ],
      faqs: [
        { q: 'Do you handle large office projects?', a: 'Yes, we have experience designing and executing office spaces from 1,000 to 50,000+ sq ft.' },
        { q: 'Can you work with our existing furniture?', a: 'Absolutely, we can incorporate your existing furniture into the new design where appropriate.' },
        { q: 'What about cable management?', a: 'We provide comprehensive cable management solutions to keep your office organized and professional.' },
        { q: 'Do you offer maintenance services?', a: 'Yes, we provide annual maintenance contracts for office furniture and interiors.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      ]
    },
    'hardware-fittings': {
      title: 'Hardware & Fittings',
      description: 'Premium quality fixtures that add functionality and elegance',
      heroImage: 'https://images.unsplash.com/photo-1737467042207-7fc6318d3e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZnVybml0dXJlJTIwaGFyZHdhcmUlMjBmaXR0aW5nc3xlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1920',
      overview: 'Complete your interior with our range of premium hardware and fittings. From handles to hinges, we stock quality products from leading international brands.',
      features: [
        { title: 'International Brands', description: 'Hafele, Hettich, Ebco, and more' },
        { title: 'Soft-Close Technology', description: 'Premium mechanisms for smooth operation' },
        { title: 'Wide Selection', description: 'Thousands of designs and finishes' },
      ],
      benefits: [
        'Wide selection of designs and finishes',
        'Durable and long-lasting products',
        'Soft-close technology available',
        'Coordinated hardware sets',
        'International brands',
        'Expert installation guidance'
      ],
      process: [
        { step: 'Selection', description: 'Browse our extensive catalog or visit our showroom' },
        { step: 'Consultation', description: 'Our experts help you choose the right products' },
        { step: 'Delivery', description: 'Timely delivery to your location' },
      ],
      faqs: [
        { q: 'Which brands do you carry?', a: 'We stock hardware from Hettich, Hafele, Ebco, Godrej, and other premium brands.' },
        { q: 'Can I see samples before buying?', a: 'Yes, our showroom has working samples of various hardware products.' },
        { q: 'Do you provide installation?', a: 'While we primarily supply hardware, we can recommend trusted installers or provide installation as part of a larger project.' },
        { q: 'What is your return policy?', a: 'Unused hardware in original packaging can be returned within 7 days with the receipt.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1737467042207-7fc6318d3e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      ]
    },
    'complete-interiors': {
      title: 'Complete Interiors',
      description: 'End-to-end turnkey interior solutions for your entire home',
      heroImage: 'https://images.unsplash.com/photo-1748887522222-ae67e761fb64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGluaW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzE1ODYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1920',
      overview: 'Get your entire home designed and executed under one roof. From floor to ceiling, we handle every aspect of your interior project with precision and care.',
      features: [
        { title: 'Single Point Contact', description: 'One team for your entire project' },
        { title: 'Cohesive Design', description: 'Unified aesthetics throughout your home' },
        { title: 'Project Management', description: 'Timely completion with quality assurance' },
      ],
      benefits: [
        'Single point of contact for entire project',
        'Cohesive design across all rooms',
        'Cost-effective bundled pricing',
        'Streamlined project management',
        'Quality assurance at every stage',
        'EMI options available'
      ],
      process: [
        { step: 'Complete Assessment', description: 'Thorough evaluation of your entire space' },
        { step: 'Unified Design', description: 'Coordinated design for all rooms' },
        { step: 'Phased Execution', description: 'Systematic room-by-room completion' },
      ],
      faqs: [
        { q: 'What does complete interiors include?', a: 'It covers all furniture, modular units, lighting, electrical fittings, paint, wallpaper, and decor for your entire home.' },
        { q: 'How long does a complete interior project take?', a: 'Depending on the scope, a full home interior typically takes 8-12 weeks from design to handover.' },
        { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible payment milestones and EMI options through Bajaj Finserv.' },
        { q: 'Can I customize individual rooms differently?', a: 'Absolutely! While we ensure a cohesive feel, each room can have its own unique character.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1748887522222-ae67e761fb64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      ]
    },
  };

  const service = services[serviceId || 'modular-kitchens'] || services['modular-kitchens'];

  const relatedServices = Object.entries(services)
    .filter(([key]) => key !== serviceId)
    .slice(0, 3)
    .map(([key, value]) => ({ id: key, ...value }));

  const getServiceMeta = () => {
    const titles: Record<string, string> = {
      'modular-kitchens': 'Modular Kitchens in Ranchi | Custom Kitchen Design | Interio Inn',
      'wardrobes': 'Custom Wardrobes in Ranchi | Sliding & Walk-in Closets | Interio Inn',
      'living-room': 'Living Room Furniture in Ranchi | TV Units, Sofas | Interio Inn',
      'office-interiors': 'Office Interiors in Ranchi | Commercial Design | Interio Inn',
      'hardware-fittings': 'Premium Hardware & Fittings | Hafele, Hettich | Interio Inn',
      'complete-interiors': 'Complete Home Interiors in Ranchi | Turnkey Solutions | Interio Inn',
    };
    const descriptions: Record<string, string> = {
      'modular-kitchens': 'Design your dream modular kitchen in Ranchi. Visit our 15,000 sq ft showroom for 3D designs, premium hardware from Hafele & Hettich.',
      'wardrobes': 'Custom wardrobes and walk-in closets in Ranchi. Sliding doors, smart storage solutions. Visit our showroom for designs.',
      'living-room': 'Transform your living room with custom furniture. TV units, sofas, coffee tables designed and manufactured in Ranchi.',
      'office-interiors': 'Professional office interior design in Ranchi. Ergonomic furniture, modern workspaces for Jharkhand businesses.',
      'hardware-fittings': 'Premium furniture hardware in Ranchi. Authorized dealer for Hafele, Hettich, Ebco. Best prices guaranteed.',
      'complete-interiors': 'Complete home interior solutions in Ranchi. Design, manufacture, install under one roof. EMI options available.',
    };
    return {
      title: titles[serviceId || 'modular-kitchens'] || service.title,
      description: descriptions[serviceId || 'modular-kitchens'] || service.description,
    };
  };

  const meta = getServiceMeta();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://interioinn.com/services/${serviceId}`} />
      </Helmet>
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm text-white/60 mb-6"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/60">Services</span>
            <ChevronRight size={14} />
            <span className="text-[#C9B49A]">{service.title}</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Key Features - 3 Column Grid */}
      <section className="py-16 bg-[#F0EBE3]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#7C5C3E]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#7C5C3E]" />
                </div>
                <h3 className="text-xl text-[#1C1C1A] mb-2">{feature.title}</h3>
                <p className="text-[#6B6258]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview + CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <p className="text-[#7C5C3E] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Overview</p>
              <h2 className="text-3xl sm:text-4xl text-[#1C1C1A] mb-6">
                Why Choose Our {service.title}
              </h2>
              <p className="text-[#6B6258] text-lg leading-relaxed mb-8">
                {service.overview}
              </p>
              <Link to="/get-quote">
                <Button className="bg-[#7C5C3E] hover:bg-[#6a4f35] text-white rounded-none px-8 py-6">
                  Get a Quote for {service.title}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </motion.div>

            {/* Gallery Mosaic */}
            <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={service.gallery[0]}
                    alt={`${service.title} 1`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={service.gallery[1]}
                    alt={`${service.title} 2`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="h-64 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={service.gallery[2]}
                    alt={`${service.title} 3`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#1C1C1A]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12">
            <p className="text-[#C9B49A] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Benefits</p>
            <h2 className="text-3xl sm:text-4xl text-white">Key Benefits</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 border border-white/10 rounded-lg hover:border-[#C9B49A]/30 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-[#C9B49A] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-[#7C5C3E] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Our Process</p>
            <h2 className="text-3xl sm:text-4xl text-[#1C1C1A]">
              How We Deliver Your {service.title}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start bg-[#F0EBE3] p-6 sm:p-8 rounded-lg"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#7C5C3E] text-white flex items-center justify-center font-medium flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h4 className="text-xl text-[#1C1C1A] mb-2">{step.step}</h4>
                  <p className="text-[#6B6258]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#F0EBE3]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="text-[#7C5C3E] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl text-[#1C1C1A]">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <span className="text-left font-medium text-[#1C1C1A]">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B6258] pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12">
            <p className="text-[#7C5C3E] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Explore More</p>
            <h2 className="text-3xl sm:text-4xl text-[#1C1C1A]">You Might Also Like</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((relatedService, index) => (
              <motion.div
                key={relatedService.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/services/${relatedService.id}`}>
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <ImageWithFallback
                      src={relatedService.gallery[0]}
                      alt={relatedService.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  </div>
                  <h3 className="text-xl text-[#1C1C1A] group-hover:text-[#7C5C3E] transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-[#6B6258] text-sm mt-1">{relatedService.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1C1C1A]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-[#C9B49A] text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">Ready to Start?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Interested in {service.title}?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Let's discuss your project and create something amazing together.
              Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote">
                <Button size="lg" className="w-full sm:w-auto bg-[#7C5C3E] hover:bg-[#6a4f35] text-white px-10 py-6 rounded-none">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-10 py-6 rounded-none">
                  Visit Showroom
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
