import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { Clock, ArrowRight } from 'lucide-react';
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

export const blogPosts = [
  {
    id: 'modular-kitchen-ranchi',
    title: 'How to Choose the Perfect Modular Kitchen for Your Ranchi Home',
    category: 'Kitchens',
    date: '2025-01-15',
    readTime: '5 min',
    excerpt: 'A complete guide to modular kitchen materials, layouts, and finishes best suited for homes in Ranchi\'s climate and lifestyle.',
    image: 'https://images.unsplash.com/photo-1703243373837-9f96a7d565d1?w=600&h=400&fit=crop',
    content: `
      <p>When it comes to designing a modular kitchen in Ranchi, there are several factors unique to Jharkhand's climate and lifestyle that you need to consider. The humidity levels, local cooking habits, and space constraints all play a crucial role in determining the perfect kitchen design for your home.</p>

      <h2>Understanding Ranchi's Climate Requirements</h2>
      <p>Ranchi experiences moderate rainfall and humidity throughout the year. This means your kitchen materials need to be moisture-resistant. We recommend marine plywood with waterproof laminate finishes for the base cabinets, especially near the sink area.</p>

      <h2>Popular Kitchen Layouts in Jharkhand Homes</h2>
      <p>Based on our experience completing over 850 kitchens across Ranchi, Jamshedpur, and Dhanbad, we've found that L-shaped and U-shaped kitchens work best for Indian cooking styles. These layouts provide ample counter space for preparation while keeping the cooking triangle efficient.</p>

      <h2>Material Selection Guide</h2>
      <p>For countertops, granite remains the most popular choice in Jharkhand due to its heat resistance and durability. However, we're seeing increased interest in quartz surfaces for their uniform appearance and low maintenance requirements.</p>

      <h2>Hardware That Lasts</h2>
      <p>Investing in quality hardware from brands like Hafele and Hettich ensures your kitchen functions smoothly for years. Soft-close hinges, pull-out baskets, and corner solutions are must-haves for modern Ranchi kitchens.</p>

      <h2>Budget Considerations</h2>
      <p>A basic modular kitchen in Ranchi starts from around ₹1.5 lakhs for a 100 sq ft kitchen. Premium kitchens with imported finishes and top-tier hardware can go up to ₹5-8 lakhs. Our team at Interio Inn can help you maximize value within any budget.</p>
    `
  },
  {
    id: 'wardrobe-design-2025',
    title: 'Wardrobe Design Trends for 2025: What\'s Hot in Interior Design',
    category: 'Wardrobes',
    date: '2025-02-10',
    readTime: '4 min',
    excerpt: 'From sliding doors to walk-in closets — explore the wardrobe designs our Ranchi clients are loving in 2025.',
    image: 'https://images.unsplash.com/photo-1765277789183-a08a084312bf?w=600&h=400&fit=crop',
    content: `
      <p>Wardrobe design has evolved significantly in recent years. At our 15,000 sq ft showroom in Ranchi, we've noticed distinct trends that our clients from across Jharkhand are embracing in 2025.</p>

      <h2>Sliding Door Wardrobes Take Center Stage</h2>
      <p>Space optimization is key in modern homes. Sliding door wardrobes save valuable floor space compared to hinged doors, making them perfect for compact bedrooms common in Ranchi apartments.</p>

      <h2>Walk-in Closets for Luxury Homes</h2>
      <p>For larger homes in areas like Harmu, Bariatu, and Ashok Nagar, walk-in closets are becoming increasingly popular. These dedicated dressing spaces add a touch of luxury while providing superior organization.</p>

      <h2>Smart Internal Organization</h2>
      <p>Today's wardrobes feature specialized zones for everything: pull-out shoe racks, trouser hangers, accessory drawers, and even integrated LED lighting. Our clients appreciate how these features make daily routines more efficient.</p>

      <h2>Finish Trends</h2>
      <p>Matte finishes in warm tones like walnut and oak are trending. High-gloss whites remain popular for contemporary interiors, while textured laminates offer a middle ground between style and practicality.</p>

      <h2>Customization is Key</h2>
      <p>No two wardrobes at Interio Inn are the same. We design each piece based on your specific storage needs, available space, and aesthetic preferences. Visit our Ranchi showroom to see these trends in person.</p>
    `
  },
  {
    id: 'home-interior-budget',
    title: 'Complete Home Interior in Rs 5-10 Lakhs: Is It Possible in Jharkhand?',
    category: 'Budget Guide',
    date: '2025-02-28',
    readTime: '7 min',
    excerpt: 'Breaking down the real cost of a complete home interior in Ranchi and how to maximize value without compromising quality.',
    image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?w=600&h=400&fit=crop',
    content: `
      <p>One of the most common questions we receive at Interio Inn is: "Can I get complete home interiors within ₹5-10 lakhs?" The answer is yes — with smart planning and the right partner.</p>

      <h2>Understanding the Cost Breakdown</h2>
      <p>For a typical 2BHK apartment in Ranchi (800-1000 sq ft), here's how your budget typically distributes:</p>
      <ul>
        <li>Modular Kitchen: ₹1.5-2.5 lakhs (30%)</li>
        <li>Wardrobes (2): ₹1-1.5 lakhs (20%)</li>
        <li>Living Room Furniture: ₹1-1.5 lakhs (20%)</li>
        <li>Bedroom Furniture: ₹80k-1.2 lakhs (15%)</li>
        <li>Miscellaneous (TV unit, shoe rack, etc.): ₹70k-1 lakh (15%)</li>
      </ul>

      <h2>Where to Save</h2>
      <p>Opt for pre-laminated boards instead of veneer for hidden surfaces. Choose local granite over imported marble for countertops. Use MDF instead of solid wood for decorative panels.</p>

      <h2>Where to Invest</h2>
      <p>Never compromise on kitchen hardware — cheap hinges and channels will fail within months. Invest in good quality mattresses and sofas as they directly impact daily comfort.</p>

      <h2>The Interio Inn Advantage</h2>
      <p>As Jharkhand's only complete interior solution company — handling design, manufacturing, and installation under one roof — we eliminate middleman costs. Our EMI options through Bajaj Finserv make premium interiors accessible to every Ranchi family.</p>

      <h2>Real Project Examples</h2>
      <p>We recently completed a 3BHK in Harmu Housing Colony within ₹8.5 lakhs, including modular kitchen, 3 wardrobes, TV unit, and complete bedroom furniture. Visit our showroom to see more such projects.</p>
    `
  },
  {
    id: 'hardware-matters',
    title: 'Why Hardware is the Most Important Part of Your Modular Kitchen',
    category: 'Hardware',
    date: '2025-03-05',
    readTime: '4 min',
    excerpt: 'Hafele vs Hettich vs Ebco — understanding which hardware brand suits your kitchen and budget.',
    image: 'https://images.unsplash.com/photo-1737467042207-7fc6318d3e5b?w=600&h=400&fit=crop',
    content: `
      <p>Your modular kitchen's longevity depends more on hardware quality than any other component. As an authorized dealer for Hafele, Hettich, and Ebco in Ranchi, we often help clients navigate this crucial decision.</p>

      <h2>Why Hardware Matters</h2>
      <p>Kitchen cabinets are opened and closed thousands of times each year. Poor quality hinges wear out quickly, causing doors to sag. Cheap drawer channels make smooth operation impossible within months.</p>

      <h2>Hettich: The Balanced Choice</h2>
      <p>German-engineered Hettich hardware offers excellent quality at mid-range prices. Their soft-close hinges and drawer systems are our most recommended products for Ranchi homes. Expect 15-20 year lifespan with proper use.</p>

      <h2>Hafele: Premium Performance</h2>
      <p>For clients who want the absolute best, Hafele's German products offer unmatched smoothness and durability. Their lift-up systems, pull-out units, and corner solutions are worth the premium for serious home cooks.</p>

      <h2>Ebco: Budget-Friendly Reliability</h2>
      <p>Indian brand Ebco provides good quality at lower price points. Ideal for rental properties or budget-conscious projects where you still want decent performance.</p>

      <h2>Our Recommendation</h2>
      <p>At Interio Inn, we typically recommend Hettich for most Ranchi kitchens — it hits the sweet spot of quality and value. Visit our Harmu Road showroom to see working demonstrations of all three brands.</p>
    `
  },
  {
    id: 'office-interior-ranchi',
    title: 'Modern Office Interiors in Ranchi: Trends for Jharkhand Businesses',
    category: 'Commercial',
    date: '2025-03-15',
    readTime: '6 min',
    excerpt: 'How Ranchi businesses are transforming their workspaces to boost productivity and impress clients.',
    image: 'https://images.unsplash.com/photo-1651602855717-9f79c72893cc?w=600&h=400&fit=crop',
    content: `
      <p>As Ranchi emerges as an important business hub in Eastern India, local companies are investing in professional office interiors. From IT startups in Nucleus Mall to established firms on Main Road, here's how Jharkhand businesses are redesigning their workspaces.</p>

      <h2>Open Plan vs Cabin Culture</h2>
      <p>While the global trend leans toward open offices, Ranchi businesses often prefer a hybrid approach. We typically design 60% open workspace with glass-partitioned cabins for management and meeting rooms.</p>

      <h2>Ergonomic Furniture is Non-Negotiable</h2>
      <p>Employee health and productivity go hand in hand. Adjustable chairs, sit-stand desks, and proper monitor placement are becoming standard in Ranchi offices. Our commercial division sources ergonomic solutions from leading brands.</p>

      <h2>Reception Areas That Impress</h2>
      <p>First impressions matter. Modern Ranchi offices feature welcoming reception areas with comfortable seating, brand-aligned decor, and professional lighting. These spaces set the tone for client interactions.</p>

      <h2>Meeting Rooms for Collaboration</h2>
      <p>Video conferencing has made meeting room design crucial. Good acoustics, proper lighting for cameras, and cable management for tech integration are key considerations we address.</p>

      <h2>Sustainability in Office Design</h2>
      <p>Forward-thinking Jharkhand businesses are choosing sustainable materials and energy-efficient solutions. LED lighting, low-VOC paints, and recyclable furniture components reduce environmental impact.</p>

      <h2>Cost Considerations</h2>
      <p>Office interiors in Ranchi typically cost ₹800-2000 per sq ft depending on complexity and finish quality. Interio Inn offers complete office solutions from design to execution, ensuring consistent quality throughout.</p>
    `
  }
];

export function BlogPage() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Interior Design Blog | Tips & Trends for Ranchi Homes | Interio Inn</title>
        <meta name="description" content="Interior design tips, trends, and guides for homes in Ranchi and Jharkhand. Learn about modular kitchens, wardrobes, home interiors, and budget planning." />
        <link rel="canonical" href="https://interioinn.com/blog" />
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
            <h1 className="mb-6">Interior Design Blog</h1>
            <p className="text-xl text-muted-foreground">
              Tips, trends, and insights for your home and office interiors in Ranchi and Jharkhand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow group"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime} read</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-secondary text-sm font-medium">
                      Read More <ArrowRight className="ml-2" size={16} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Ready to Start Your Interior Project?</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Visit our 15,000 sq ft showroom in Ranchi or get a free consultation today
            </p>
            <Link to="/get-quote">
              <button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-medium">
                Get Free Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
