import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services/modular-kitchens',
      submenu: [
        { name: 'Modular Kitchens', path: '/services/modular-kitchens' },
        { name: 'Wardrobes', path: '/services/wardrobes' },
        { name: 'Living Room', path: '/services/living-room' },
        { name: 'Office Interiors', path: '/services/office-interiors' },
        { name: 'Hardware & Fittings', path: '/services/hardware-fittings' },
        { name: 'Complete Interiors', path: '/services/complete-interiors' },
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Hardware', path: '/hardware' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isServiceActive = () => {
    return location.pathname.startsWith('/services');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className={`text-2xl font-light tracking-tight transition-colors ${
              isScrolled ? 'text-[#1C1C1A]' : 'text-white'
            }`}>
              <span className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-[#1C1C1A]' : 'text-white'}`}>
                Interio<span className="text-[#7C5C3E]">Inn</span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <>
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        isScrolled
                          ? isServiceActive()
                            ? 'text-[#7C5C3E]'
                            : 'text-[#1C1C1A] hover:text-[#7C5C3E]'
                          : isServiceActive()
                            ? 'text-[#C9B49A]'
                            : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <motion.div
                        initial={false}
                        className="bg-white rounded-lg shadow-xl py-3 min-w-[220px] border border-[#7C5C3E]/10"
                      >
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            className={`block px-5 py-2.5 text-sm transition-colors ${
                              location.pathname === sublink.path
                                ? 'text-[#7C5C3E] bg-[#F0EBE3]'
                                : 'text-[#1C1C1A] hover:bg-[#F0EBE3] hover:text-[#7C5C3E]'
                            }`}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </motion.div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`relative text-sm font-medium transition-colors ${
                      isScrolled
                        ? isActive(link.path)
                          ? 'text-[#7C5C3E]'
                          : 'text-[#1C1C1A] hover:text-[#7C5C3E]'
                        : isActive(link.path)
                          ? 'text-[#C9B49A]'
                          : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                          isScrolled ? 'bg-[#7C5C3E]' : 'bg-[#C9B49A]'
                        }`}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/get-quote">
              <Button
                className={`rounded-none px-6 py-5 text-sm transition-all ${
                  isScrolled
                    ? 'bg-[#7C5C3E] hover:bg-[#6a4f35] text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm'
                }`}
              >
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#1C1C1A]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-[#7C5C3E]/10 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`w-full flex items-center justify-between py-3 text-sm font-medium ${
                          isServiceActive() ? 'text-[#7C5C3E]' : 'text-[#1C1C1A]'
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.name}
                                to={sublink.path}
                                className={`block py-2 text-sm ${
                                  location.pathname === sublink.path
                                    ? 'text-[#7C5C3E]'
                                    : 'text-[#6B6258] hover:text-[#7C5C3E]'
                                }`}
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block py-3 text-sm font-medium ${
                        isActive(link.path) ? 'text-[#7C5C3E]' : 'text-[#1C1C1A]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <Link to="/get-quote">
                  <Button className="w-full bg-[#7C5C3E] hover:bg-[#6a4f35] text-white rounded-none py-5">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
