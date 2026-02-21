import { motion } from 'motion/react';
import { Users, Award, Target, Zap, CheckCircle2 } from 'lucide-react';
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

export function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Designers' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Quality First',
      description: 'We never compromise on the quality of materials or craftsmanship'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'Your vision and satisfaction drive everything we do'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Constantly evolving with latest design trends and technologies'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results every time'
    },
  ];

  const capabilities = [
    'In-house design studio with 3D visualization',
    'State-of-the-art manufacturing facility',
    'Dedicated project management team',
    'Quality control at every stage',
    '24/7 customer support',
    'Nationwide service network',
    'Sustainable and eco-friendly practices',
    'Extended warranty on all products'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769430838012-8e1270d41f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZnVybml0dXJlJTIwbWFudWZhY3R1cmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTY2MzIyMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">Crafting Spaces, Creating Experiences</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              With over 15 years of expertise, we transform ordinary spaces into extraordinary living experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2011, InterioInn began with a simple vision: to make premium, custom interior solutions accessible to everyone. What started as a small workshop has grown into one of India's leading interior design and manufacturing companies.
                </p>
                <p>
                  Today, we operate a state-of-the-art manufacturing facility spanning 50,000 sq ft, equipped with the latest CNC machinery and woodworking technology. Our team of 50+ skilled craftsmen and designers work together to bring your vision to life.
                </p>
                <p>
                  From modular kitchens to complete home makeovers, we've completed over 500 projects across residential and commercial spaces. Every project is a testament to our commitment to quality, innovation, and customer satisfaction.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="relative h-[500px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769430838012-8e1270d41f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZnVybml0dXJlJTIwbWFudWZhY3R1cmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTY2MzIyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Manufacturing Facility"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-accent">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp} className="bg-white rounded-2xl p-10 border border-border">
              <h3 className="mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted name in interior solutions, setting new standards in design excellence, quality craftsmanship, and customer satisfaction. We envision spaces that not only look beautiful but enhance the quality of life for those who inhabit them.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white rounded-2xl p-10 border border-border">
              <h3 className="mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional interior solutions through innovative design, superior craftsmanship, and personalized service. We are committed to using sustainable practices, premium materials, and cutting-edge technology to create spaces that inspire and endure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center text-secondary">
                  {value.icon}
                </div>
                <h4 className="mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capability */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="h-64 rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2MzIxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Workshop 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden mt-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765277789183-a08a084312bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3YXJkcm9iZSUyMGNsb3NldCUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Workshop 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden -mt-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjE1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Workshop 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden mt-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1737467042207-7fc6318d3e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZnVybml0dXJlJTIwaGFyZHdhcmUlMjBmaXR0aW5nc3xlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Workshop 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <h2 className="mb-6">Manufacturing Excellence</h2>
              <p className="text-muted-foreground mb-6">
                Our 50,000 sq ft state-of-the-art facility is equipped with the latest CNC machinery, ensuring precision and consistency in every piece we create.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">Why Choose InterioInn</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that expertise and dedication make
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="bg-gradient-to-br from-secondary to-primary text-white rounded-2xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white mb-4">Complete Control</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Unlike dealers, we manufacture in-house, giving us complete quality control and the ability to customize every detail to your preferences.
                  </p>
                </div>
                <div>
                  <h3 className="text-white mb-4">Transparent Pricing</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    No hidden costs or surprises. Our direct manufacturing approach ensures you get the best value for your investment.
                  </p>
                </div>
                <div>
                  <h3 className="text-white mb-4">Expert Design Team</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Our award-winning designers bring years of experience and fresh perspectives to every project, ensuring stunning results.
                  </p>
                </div>
                <div>
                  <h3 className="text-white mb-4">Timely Delivery</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    We understand the importance of deadlines. Our streamlined process ensures your project is completed on time, every time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
