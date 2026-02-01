
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-3">
  <img
    src="/logo.png"  // Adjust if path is /images/public/logo.png
    alt="Dynamic Eagle"
    className="
      h-12              // mobile
      md:h-16           // tablet
      lg:h-20           // desktop - bigger for impact
      w-auto
      object-contain
      drop-shadow-md    // subtle shadow for depth on dark bg
      brightness-110    // slight boost to make orange pop
      transition-transform duration-300 hover:scale-105  // fun hover effect
    "
  />
</Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive(item.path)
                  ? 'text-[#EE3124]'
                  : isScrolled ? 'text-slate-600 hover:text-[#EE3124]' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-[#EE3124] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#D6281B] transition-all hover:scale-105 active:scale-95 flex items-center shadow-lg"
          >
            Get in Touch <ChevronRight size={16} className="ml-1" />
          </Link>
        </nav>

        {/* Mobile Toggle - Improved Tap Target */}
        <button 
          className="lg:hidden p-3 rounded-xl focus:outline-none bg-slate-100/10 hover:bg-slate-100/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="text-slate-900" size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Backdrop Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-white z-40 overflow-y-auto animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col p-6 space-y-2 h-full bg-slate-50/50">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-2xl font-serif font-bold p-4 rounded-2xl transition-all ${
                  isActive(item.path) 
                    ? 'bg-[#EE3124] text-white shadow-lg' 
                    : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-8">
              <Link 
                to="/contact" 
                className="w-full bg-[#EE3124] text-white py-5 rounded-2xl text-xl font-bold flex items-center justify-center shadow-xl active:scale-95 transition-transform"
              >
                Contact Us Now <ChevronRight size={24} className="ml-2" />
              </Link>
            </div>
            
            <div className="mt-auto pt-10 pb-6 text-center text-slate-400 text-sm">
              <p>+27 87 550 3221</p>
              <p>info@dynamiceagle.co.za</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
