import { Link } from 'react-router';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Interio<span className="text-accent">Inn</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Complete Interior Solutions. From custom furniture manufacturing to turnkey interior execution, we bring your dream spaces to life.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Projects</Link></li>
              <li><Link to="/hardware" className="text-primary-foreground/80 hover:text-accent transition-colors">Hardware & Products</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/modular-kitchens" className="text-primary-foreground/80 hover:text-accent transition-colors">Modular Kitchens</Link></li>
              <li><Link to="/services/wardrobes" className="text-primary-foreground/80 hover:text-accent transition-colors">Wardrobes</Link></li>
              <li><Link to="/services/living-room" className="text-primary-foreground/80 hover:text-accent transition-colors">Living Room Furniture</Link></li>
              <li><Link to="/services/office-interiors" className="text-primary-foreground/80 hover:text-accent transition-colors">Office Interiors</Link></li>
              <li><Link to="/services/hardware-fittings" className="text-primary-foreground/80 hover:text-accent transition-colors">Hardware & Fittings</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">123 Design Street, Interior City, IN 560001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/80 hover:text-accent transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@interioinn.com" className="text-primary-foreground/80 hover:text-accent transition-colors">info@interioinn.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="max-w-md">
            <h4 className="font-semibold mb-3">Subscribe to Our Newsletter</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">Get the latest updates on interior trends and our projects.</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>&copy; 2026 InterioInn. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
