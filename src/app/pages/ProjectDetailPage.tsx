import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function ProjectDetailPage() {
  const { projectId } = useParams();

  // Mock project data
  const project = {
    id: projectId,
    name: 'Luxury Penthouse Interior',
    location: 'Mumbai, Maharashtra',
    category: 'Residential',
    date: 'December 2025',
    area: '3,500 sq ft',
    duration: '4 months',
    heroImage: 'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A sophisticated penthouse transformation featuring contemporary design elements, custom furniture, and premium finishes throughout. This project exemplifies our ability to create luxurious living spaces that blend functionality with aesthetic excellence.',
    challenge: 'The client wanted an open-plan living space that maintained distinct zones for different activities while maximizing natural light and showcasing panoramic city views.',
    solution: 'We designed a flowing layout with custom furniture pieces that define spaces without blocking light. Floor-to-ceiling windows were framed with minimal treatments, and a neutral palette with rich wood accents created warmth and sophistication.',
    features: [
      'Custom-designed modular kitchen with Italian marble countertops',
      'Built-in entertainment unit with concealed storage',
      'Walk-in wardrobe with automated lighting',
      'Premium hardware and fittings throughout',
      'Smart home integration',
      'Designer lighting fixtures'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxNTk1NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2MzIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1771327811795-6197403af846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGludGVyaW9yJTIwZGVzaWduJTIwYmVkcm9vbXxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1756079664354-34944e001f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiYXRocm9vbSUyMGludGVyaW9yJTIwbWFyYmxlfGVufDF8fHx8MTc3MTY2MzIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1762807039386-35cf41decf51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0diUyMHVuaXQlMjBlbnRlcnRhaW5tZW50JTIwY2VudGVyfGVufDF8fHx8MTc3MTY2MzIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Image */}
      <section className="relative h-[80vh] overflow-hidden">
        <ImageWithFallback
          src={project.heroImage}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Link to="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              Back to Projects
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-4">
                {project.category}
              </div>
              <h1 className="text-white mb-4">{project.name}</h1>
              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  {project.date}
                </div>
                <div className="flex items-center">
                  <Tag size={18} className="mr-2" />
                  {project.area}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <motion.div {...fadeInUp}>
                <h2 className="mb-6">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              <motion.div {...fadeInUp}>
                <h3 className="mb-4">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div {...fadeInUp}>
                <h3 className="mb-4">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              <motion.div {...fadeInUp}>
                <h3 className="mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              <motion.div {...fadeInUp} className="bg-background rounded-2xl p-8 sticky top-32">
                <h4 className="mb-6">Project Details</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <div className="font-medium">{project.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Category</div>
                    <div className="font-medium">{project.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Area</div>
                    <div className="font-medium">{project.area}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Duration</div>
                    <div className="font-medium">{project.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Completion</div>
                    <div className="font-medium">{project.date}</div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <Link to="/contact" className="block">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                      Start Your Project
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">Project Gallery</h2>
            <p className="text-lg text-muted-foreground">
              Explore the transformation in detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">More Projects</h2>
            <p className="text-lg text-muted-foreground">
              Explore our other transformations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: '2',
                name: 'Modern Villa',
                location: 'Bangalore',
                category: 'Residential',
                image: 'https://images.unsplash.com/photo-1771327811795-6197403af846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGludGVyaW9yJTIwZGVzaWduJTIwYmVkcm9vbXxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                id: '3',
                name: 'Fine Dining Restaurant',
                location: 'Delhi',
                category: 'Commercial',
                image: 'https://images.unsplash.com/photo-1651440204216-548382747b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3MTY1OTQyNXww&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                id: '4',
                name: 'Corporate Office',
                location: 'Hyderabad',
                category: 'Office',
                image: 'https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjE1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
            ].map((relatedProject, index) => (
              <motion.div
                key={relatedProject.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl h-96 cursor-pointer"
              >
                <Link to={`/projects/${relatedProject.id}`}>
                  <ImageWithFallback
                    src={relatedProject.image}
                    alt={relatedProject.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs mb-3">
                      {relatedProject.category}
                    </div>
                    <h3 className="text-white mb-2">{relatedProject.name}</h3>
                    <p className="text-white/80 text-sm flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {relatedProject.location}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
