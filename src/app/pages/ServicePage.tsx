import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { CheckCircle2, ArrowRight } from 'lucide-react';
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
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function ServicePage() {
  const { serviceId } = useParams();

  const services: Record<string, any> = {
    'modular-kitchens': {
      title: 'Modular Kitchens',
      description: 'Transform your cooking space with our contemporary modular kitchen designs',
      heroImage: 'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2MzIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Our modular kitchens combine functionality with aesthetic appeal. Each design is customized to your space, cooking habits, and style preferences. We use premium materials and hardware to ensure durability and ease of use.',
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
        { step: 'Material Selection', description: 'Choose from a wide range of finishes, colors, and hardware' },
        { step: 'Manufacturing', description: 'Precision manufacturing in our state-of-the-art facility' },
        { step: 'Installation', description: 'Expert installation team ensures perfect fitting' }
      ],
      faqs: [
        { q: 'What materials do you use for modular kitchens?', a: 'We use premium materials including marine plywood, MDF, and particle board with various finishes like laminate, acrylic, and PU paint.' },
        { q: 'How long does installation take?', a: 'Typically, a modular kitchen installation takes 7-10 days depending on the size and complexity of the design.' },
        { q: 'Do you provide a warranty?', a: 'Yes, we provide a 5-year warranty on all modular kitchen products against manufacturing defects.' },
        { q: 'Can I customize the design?', a: 'Absolutely! Every kitchen is designed according to your specific requirements, space, and preferences.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2MzIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxNTk1NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1748887522222-ae67e761fb64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGluaW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzE1ODYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ]
    },
    'wardrobes': {
      title: 'Wardrobes',
      description: 'Custom closets designed for your lifestyle and storage needs',
      heroImage: 'https://images.unsplash.com/photo-1765277789183-a08a084312bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3YXJkcm9iZSUyMGNsb3NldCUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Our custom wardrobes are designed to organize your clothing and accessories efficiently while adding elegance to your bedroom. Each wardrobe is tailored to your storage needs and space constraints.',
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
        { step: 'Material Choice', description: 'Select from premium finishes and hardware' },
        { step: 'Production', description: 'Precision crafting in our workshop' },
        { step: 'Installation', description: 'Professional fitting and finishing' }
      ],
      faqs: [
        { q: 'What types of wardrobes do you offer?', a: 'We offer sliding door wardrobes, hinged door wardrobes, walk-in closets, and reach-in closets, all customizable to your needs.' },
        { q: 'Can you work with odd-shaped spaces?', a: 'Yes, we specialize in creating custom solutions for any space, including corners and sloped ceilings.' },
        { q: 'What internal fittings are available?', a: 'We offer hanging rods, shelves, drawers, shoe racks, accessories trays, trouser hangers, and LED lighting.' },
        { q: 'How do I maintain my wardrobe?', a: 'Regular dusting and occasional cleaning with a damp cloth is sufficient. Avoid harsh chemicals on the surfaces.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1765277789183-a08a084312bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3YXJkcm9iZSUyMGNsb3NldCUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1771327811795-6197403af846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGludGVyaW9yJTIwZGVzaWduJTIwYmVkcm9vbXxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1762807039386-35cf41decf51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0diUyMHVuaXQlMjBlbnRlcnRhaW5tZW50JTIwY2VudGVyfGVufDF8fHx8MTc3MTY2MzIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      ]
    },
    'living-room': {
      title: 'Living Room Furniture',
      description: 'Elegant furniture pieces that define comfort and style',
      heroImage: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxNTk1NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Create a living space that reflects your personality with our custom-designed furniture. From TV units to sofas, coffee tables to display units, every piece is crafted to perfection.',
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
        { step: 'Space Planning', description: 'Optimal furniture layout for your living room' },
        { step: 'Design Development', description: 'Detailed drawings and material selection' },
        { step: 'Crafting', description: 'Expert craftsmen bring designs to life' },
        { step: 'Delivery & Setup', description: 'Careful installation and arrangement' }
      ],
      faqs: [
        { q: 'Can you match existing furniture?', a: 'Yes, we can create pieces that complement your existing furniture in style, color, and finish.' },
        { q: 'Do you offer upholstery services?', a: 'Yes, we provide a wide selection of fabrics and leather for custom upholstery.' },
        { q: 'What wood types do you use?', a: 'We work with various woods including teak, oak, walnut, and engineered wood depending on your budget and preferences.' },
        { q: 'Can I see samples before ordering?', a: 'Absolutely! We have a showroom with samples of finishes, fabrics, and completed furniture pieces.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxNTk1NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1748887522222-ae67e761fb64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGluaW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzE1ODYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ]
    },
    'office-interiors': {
      title: 'Office Interiors',
      description: 'Professional workspaces that inspire productivity and creativity',
      heroImage: 'https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjE1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Design a workspace that boosts productivity and reflects your brand identity. We create functional, aesthetic office environments from reception areas to conference rooms.',
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
        { step: 'Space Planning', description: 'Optimizing layout for workflow and collaboration' },
        { step: 'Concept Design', description: 'Creating mood boards and design concepts' },
        { step: 'Execution', description: 'Coordinated installation with minimal disruption' },
        { step: 'Final Touches', description: 'Adding branding and finishing elements' }
      ],
      faqs: [
        { q: 'Do you handle large office projects?', a: 'Yes, we have experience designing and executing office spaces from 1,000 to 50,000+ sq ft.' },
        { q: 'Can you work with our existing furniture?', a: 'Absolutely, we can incorporate your existing furniture into the new design where appropriate.' },
        { q: 'What about cable management?', a: 'We provide comprehensive cable management solutions to keep your office organized and professional.' },
        { q: 'Do you offer maintenance services?', a: 'Yes, we provide annual maintenance contracts for office furniture and interiors.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjE1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1651440204216-548382747b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3MTY1OTQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1762807039386-35cf41decf51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0diUyMHVuaXQlMjBlbnRlcnRhaW5tZW50JTIwY2VudGVyfGVufDF8fHx8MTc3MTY2MzIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      ]
    },
    'hardware-fittings': {
      title: 'Hardware & Fittings',
      description: 'Premium quality fixtures that add functionality and elegance',
      heroImage: 'https://images.unsplash.com/photo-1737467042207-7fc6318d3e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZnVybml0dXJlJTIwaGFyZHdhcmUlMjBmaXR0aW5nc3xlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Complete your interior with our range of premium hardware and fittings. From handles to hinges, we stock quality products from leading brands.',
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
        { step: 'Order', description: 'We source from trusted suppliers and manufacturers' },
        { step: 'Delivery', description: 'Timely delivery to your location' },
        { step: 'Installation Support', description: 'Guidance for proper installation' }
      ],
      faqs: [
        { q: 'Which brands do you carry?', a: 'We stock hardware from Hettich, Hafele, Ebco, Godrej, and other premium brands.' },
        { q: 'Can I see samples before buying?', a: 'Yes, our showroom has working samples of various hardware products.' },
        { q: 'Do you provide installation?', a: 'While we primarily supply hardware, we can recommend trusted installers or provide installation as part of a larger project.' },
        { q: 'What is your return policy?', a: 'Unused hardware in original packaging can be returned within 7 days with the receipt.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1737467042207-7fc6318d3e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZnVybml0dXJlJTIwaGFyZHdhcmUlMjBmaXR0aW5nc3xlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1756079664354-34944e001f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiYXRocm9vbSUyMGludGVyaW9yJTIwbWFyYmxlfGVufDF8fHx8MTc3MTY2MzIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2MzIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      ]
    },
  };

  const service = services[serviceId || 'modular-kitchens'];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-white mb-6">{service.title}</h1>
            <p className="text-xl text-white/90 mb-8">
              {service.description}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Get a Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">Gallery</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.gallery.map((image: string, index: number) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative h-80 rounded-2xl overflow-hidden group"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">Key Benefits</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-background p-6 rounded-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to delivering your perfect {service.title.toLowerCase()}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {service.process.map((step: any, index: number) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start bg-white p-8 rounded-2xl border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="mb-2">{step.step}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq: any, index: number) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 border-none">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="text-left font-medium">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Schedule a Consultation
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
