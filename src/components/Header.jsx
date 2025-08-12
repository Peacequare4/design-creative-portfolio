import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="new-logo-design-creative.png" alt="Design Creative Logo" className="h-13 w-auto"/>
            <div>
              <h1 className="text-xl font-bold text-dc-blue">Arassedé Delapaix</h1>
              <p className="text-sm text-gray-600">Design Creative</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-dc-blue transition-colors duration-300 font-medium relative group"
                style={{ 
                  transform: `rotate(${index * 15}deg)`,
                  transformOrigin: 'center',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = `rotate(${index * 15 + 360}deg) scale(1.1)`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = `rotate(${index * 15}deg) scale(1)`;
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dc-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a href="https://wa.me/237692981267?text=Bonjour%2C%20je%20souhaite%20demander%20un%20devis%20gratuit." target="_blank" rel="noopener noreferrer" className="hidden md:block bg-dc-orange hover:bg-dc-orange/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
            Devis Gratuit
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-dc-blue transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a href="https://wa.me/237692981267?text=Bonjour%2C%20je%20souhaite%20demander%20un%20devis%20gratuit." target="_blank" rel="noopener noreferrer" className="bg-dc-orange hover:bg-dc-orange/90 text-white w-full mt-4 px-6 py-3 rounded-md font-medium transition-colors text-center">
                  Devis Gratuit
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

