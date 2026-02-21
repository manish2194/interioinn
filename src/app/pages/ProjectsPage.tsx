import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import Masonry from 'react-responsive-masonry';
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

type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Kitchen' | 'Office';

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const projects = [
    {
      id: '1',
      name: 'Luxury Penthouse',
      location: 'Mumbai',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      height: 'tall'
    },
    {
      id: '2',
      name: 'Modern Modular Kitchen',
      location: 'Pune',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2MzIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      height: 'normal'
    },
    {
      id: '3',
      name: 'Contemporary Villa',
      location: 'Bangalore',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1771327811795-6197403af846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGludGVyaW9yJTIwZGVzaWduJTIwYmVkcm9vbXxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      height: 'short'
    },
    {
      id: '4',
      name: 'Fine Dining Restaurant',
      location: 'Delhi',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1651440204216-548382747b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3MTY1OTQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      height: 'tall'
    },
    {
      id: '5',
      name: 'Corporate Office',
      location: 'Hyderabad',
      category: 'Office',
      image: 'https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNjE1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      height: 'normal'
    },
    {
      id: '6',
      name: 'Elegant Living Room',
      location: 'Chennai',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxNTk1NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      height: 'short'
    },
    {
      id: '7',
      name: 'Minimalist Dining',
      location: 'Kolkata',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1748887522222-ae67e761fb64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGluaW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzE1ODYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      height: 'normal'
    },
    {
      id: '8',
      name: 'Contemporary Bathroom',
      location: 'Gurgaon',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1756079664354-34944e001f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiYXRocm9vbSUyMGludGVyaW9yJTIwbWFyYmxlfGVufDF8fHx8MTc3MTY2MzIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      height: 'tall'
    },
    {
      id: '9',
      name: 'Modern Entertainment Unit',
      location: 'Ahmedabad',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1762807039386-35cf41decf51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0diUyMHVuaXQlMjBlbnRlcnRhaW5tZW50JTIwY2VudGVyfGVufDF8fHx8MTc3MTY2MzIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      height: 'normal'
    },
    {
      id: '10',
      name: 'Custom Wardrobe Design',
      location: 'Jaipur',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1765277789183-a08a084312bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3YXJkcm9iZSUyMGNsb3NldCUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      height: 'short'
    },
  ];

  const categories: ProjectCategory[] = ['All', 'Residential', 'Commercial', 'Kitchen', 'Office'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const getHeight = (height: string) => {
    switch (height) {
      case 'tall': return 'h-[600px]';
      case 'short': return 'h-[350px]';
      default: return 'h-[450px]';
    }
  };

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
            <h1 className="mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of exceptional interior transformations across residential and commercial spaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? 'default' : 'outline'}
                className={activeFilter === category ? 'bg-secondary hover:bg-secondary/90' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Masonry columnsCount={3} gutter="24px">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl ${getHeight(project.height)} cursor-pointer`}
              >
                <Link to={`/projects/${project.id}`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs mb-3">
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
          </Masonry>
        </div>
      </section>

      <Footer />
    </div>
  );
}
