import { useState } from 'react';
import { Link } from 'react-router';
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function Footer() {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowToast(true);
      setEmail('');
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <footer className="bg-[#1C1C1A] text-white">
      {/* Brand Statement */}
      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-12">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
            <span className="text-3xl font-bold">Interio<span className="text-[#C9B49A]">Inn</span></span>
          </h2>
          <p className="text-white/50 mt-4 max-w-md text-sm lg:text-base">
            Complete Interior Solutions — Design, Manufacturing, and Installation under one roof.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase text-white/80 mb-6">About</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-white/60 hover:text-[#C9B49A] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/60 hover:text-[#C9B49A] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/60 hover:text-[#C9B49A] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-[#C9B49A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase text-white/80 mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services/modular-kitchens" className="text-white/60 hover:text-[#C9B49A] transition-colors">
                  Modular Kitchens
                </Link>
              </li>
              <li>
                <Link to="/services/wardrobes" className="text-white/60 hover:text-[#C9B49A] transition-colors">
                  Wardrobes
                </Link>
              </li>
              <li>
                <Link to="/services/living-room" className="text-white/60 hover:text-[#C9B49A] transition-colors">
                  Living Room
                </Link>
              </li>
              <li>
                <Link to="/services/office-interiors" className="text-white/60 hover:text-[#C9B49A] transition-colors">
                  Office Interiors
                </Link>
              </li>
              <li>
                <Link to="/hardware" className="text-white/60 hover:text-[#C9B49A] transition-colors">
                  Hardware & Fittings
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase text-white/80 mb-6">Connect</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C9B49A] flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Harmu Road, Ranchi,<br />Jharkhand - 834002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#C9B49A] flex-shrink-0" />
                <a href="tel:+919229950050" className="text-white/60 hover:text-[#C9B49A] transition-colors">
                  +91 92299 50050
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#C9B49A] flex-shrink-0" />
                <a href="mailto:info@interioinn.com" className="text-white/60 hover:text-[#C9B49A] transition-colors">
                  info@interioinn.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C9B49A] hover:text-[#C9B49A] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C9B49A] hover:text-[#C9B49A] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C9B49A] hover:text-[#C9B49A] transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C9B49A] hover:text-[#C9B49A] transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase text-white/80 mb-6">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">
              Get the latest updates on interior trends and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-none pr-24 h-12"
              />
              <Button
                type="submit"
                className="absolute right-0 top-0 h-12 bg-[#7C5C3E] hover:bg-[#6a4f35] text-white rounded-none px-4"
              >
                Subscribe
              </Button>
            </form>
            {showToast && (
              <div className="mt-3 text-sm text-[#C9B49A]">
                Thank you! We'll be in touch soon.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>&copy; 2026 Interio Inn. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="#" className="hover:text-[#C9B49A] transition-colors">Privacy Policy</Link>
              <span className="text-white/20">|</span>
              <span>Made in Ranchi</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
