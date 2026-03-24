import { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

type ProductCategory = 'All' | 'Handles' | 'Hinges' | 'Drawer Systems' | 'Lighting' | 'Accessories';

export function HardwarePage() {
  const [activeFilter, setActiveFilter] = useState<ProductCategory>('All');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const categories: ProductCategory[] = ['All', 'Handles', 'Hinges', 'Drawer Systems', 'Lighting', 'Accessories'];

  const products = [
    {
      id: 1,
      name: 'Premium Cabinet Handles',
      category: 'Handles',
      brand: 'Hafele',
      image: 'https://images.unsplash.com/photo-1737467042207-7fc6318d3e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZnVybml0dXJlJTIwaGFyZHdhcmUlMjBmaXR0aW5nc3xlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Elegant stainless steel handles with brushed finish',
    },
    {
      id: 2,
      name: 'Soft-Close Hinges',
      category: 'Hinges',
      brand: 'Hettich',
      image: 'https://images.unsplash.com/photo-1756079664354-34944e001f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiYXRocm9vbSUyMGludGVyaW9yJTIwbWFyYmxlfGVufDF8fHx8MTc3MTY2MzIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Premium quality hinges with soft-close mechanism',
    },
    {
      id: 3,
      name: 'Modular Drawer System',
      category: 'Drawer Systems',
      brand: 'Blum',
      image: 'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MTY2MzIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Full extension drawer slides with smooth operation',
    },
    {
      id: 4,
      name: 'LED Cabinet Lighting',
      category: 'Lighting',
      brand: 'Hafele',
      image: 'https://images.unsplash.com/photo-1762807039386-35cf41decf51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0diUyMHVuaXQlMjBlbnRlcnRhaW5tZW50JTIwY2VudGVyfGVufDF8fHx8MTc3MTY2MzIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Energy-efficient LED strips for cabinets',
    },
    {
      id: 5,
      name: 'Pull-Out Baskets',
      category: 'Accessories',
      brand: 'Ebco',
      image: 'https://images.unsplash.com/photo-1765277789183-a08a084312bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3YXJkcm9iZSUyMGNsb3NldCUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Chrome-plated storage baskets for easy access',
    },
    {
      id: 6,
      name: 'Designer Handles',
      category: 'Handles',
      brand: 'Godrej',
      image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxNTk1NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Contemporary designs in multiple finishes',
    },
    {
      id: 7,
      name: 'Corner Solutions',
      category: 'Accessories',
      brand: 'Hafele',
      image: 'https://images.unsplash.com/photo-1748887522222-ae67e761fb64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGluaW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzE1ODYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Maximize corner storage with smart fittings',
    },
    {
      id: 8,
      name: 'Glass Door Fittings',
      category: 'Hinges',
      brand: 'Hettich',
      image: 'https://images.unsplash.com/photo-1651440204216-548382747b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3MTY1OTQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Specialized fittings for glass cabinet doors',
    },
    {
      id: 9,
      name: 'Smart Lighting System',
      category: 'Lighting',
      brand: 'Hafele',
      image: 'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NzE2NTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Motion sensor activated cabinet lighting',
    },
  ];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Premium Hardware & Fittings in Ranchi | Hafele, Hettich, Ebco | Interio Inn</title>
        <meta name="description" content="Buy premium kitchen and furniture hardware in Ranchi. Authorized dealer for Hafele, Hettich, Ebco. Soft-close hinges, drawer systems, handles at best prices." />
        <link rel="canonical" href="https://interioinn.com/hardware" />
      </Helmet>
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1737467042207-7fc6318d3e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZnVybml0dXJlJTIwaGFyZHdhcmUlMjBmaXR0aW5nc3xlbnwxfHx8fDE3NzE2NjMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Premium Hardware"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">Premium Hardware & Fittings</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover our curated selection of high-quality hardware from world-renowned brands
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search products..."
                className="pl-10"
              />
            </div>
            <div className="flex overflow-x-auto gap-3 w-full md:w-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? 'default' : 'outline'}
                  className={`flex-shrink-0 ${activeFilter === category ? 'bg-secondary hover:bg-secondary/90' : ''}`}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      {product.brand}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-secondary mb-2">{product.category}</div>
                  <h4 className="mb-2">{product.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <Dialog open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        Enquire Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Product Enquiry</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <Label>Product</Label>
                          <Input value={product.name} readOnly className="mt-2" />
                        </div>
                        <div>
                          <Label>Your Name</Label>
                          <Input placeholder="Enter your name" className="mt-2" />
                        </div>
                        <div>
                          <Label>Email</Label>
                          <Input type="email" placeholder="Enter your email" className="mt-2" />
                        </div>
                        <div>
                          <Label>Phone</Label>
                          <Input type="tel" placeholder="Enter your phone" className="mt-2" />
                        </div>
                        <div>
                          <Label>Message</Label>
                          <Input placeholder="Any specific requirements?" className="mt-2" />
                        </div>
                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                          Submit Enquiry
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Trusted Brands</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We partner with the world's leading hardware manufacturers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
            {['Hafele', 'Hettich', 'Blum', 'Ebco', 'Godrej'].map((brand, index) => (
              <motion.div
                key={brand}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center h-24 bg-background rounded-xl border border-border hover:border-secondary transition-colors"
              >
                <span className="text-xl font-semibold text-muted-foreground">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6">Need Help Choosing?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our hardware experts can help you select the perfect fittings for your project
            </p>
            <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
              Talk to an Expert
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
