import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { blogPosts } from './BlogPage';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function BlogPostPage() {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="pt-32 pb-24 min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-secondary hover:underline">
              Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.id === postId);
  const relatedPosts = blogPosts.filter(p => p.id !== postId).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{post.title} | Interio Inn Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://interioinn.com/blog/${post.id}`} />
      </Helmet>
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-secondary mb-6">
              <ArrowLeft size={18} className="mr-2" />
              Back to Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full">
                {post.category}
              </span>

              <h1 className="mt-4 mb-6">{post.title}</h1>

              <div className="flex items-center text-muted-foreground mb-8">
                <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span className="mx-3">•</span>
                <Clock size={16} className="mr-1" />
                <span>{post.readTime} read</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden h-64 md:h-96"
            >
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.article
            {...fadeInUp}
            className="max-w-3xl mx-auto prose prose-lg"
          >
            <div
              className="text-muted-foreground leading-relaxed space-y-4 [&>h2]:text-foreground [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto bg-gradient-to-r from-secondary/10 to-accent/20 rounded-2xl p-8 text-center">
            <h3 className="mb-4">Need Help With Your Interior Project?</h3>
            <p className="text-muted-foreground mb-6">
              Visit our showroom in Ranchi or get a free consultation today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-quote">
                <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-lg font-medium">
                  Get Free Quote
                </button>
              </Link>
              <Link to="/contact">
                <button className="border border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-2 rounded-lg font-medium">
                  Visit Showroom
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="mb-4">Related Articles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow group"
              >
                <Link to={`/blog/${relatedPost.id}`}>
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-secondary">{relatedPost.category}</span>
                    <h4 className="text-sm font-semibold mt-2 group-hover:text-secondary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center text-secondary text-sm font-medium mt-3">
                      Read More <ArrowRight className="ml-1" size={14} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
