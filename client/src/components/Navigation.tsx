import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Initialize scroll state on mount
    setScrolled(window.scrollY > 50);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav className={`mx-auto transition-all duration-500 ease-in-out rounded-2xl border border-border/50 backdrop-blur-md shadow-lg ${
        scrolled 
          ? 'bg-background/95 max-w-lg' 
          : 'bg-background/80 max-w-4xl'
      }`}>
        <div className="px-6">
          <div className={`flex justify-between items-center transition-all duration-500 ${
            scrolled ? 'h-12' : 'h-16'
          }`}>
            {/* Profile Image, Name and Available for Work Text */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold transition-all duration-300 ${
                scrolled ? 'w-8 h-8 text-sm' : 'w-10 h-10'
              }`} data-testid="profile-image">
                KR
              </div>
              <div className="flex flex-col">
                <span className={`font-bold font-poppins gradient-text transition-all duration-300 ${
                  scrolled ? 'text-base' : 'text-xl'
                }`} data-testid="profile-name">
                  KAUSHIK RANJAN
                </span>
                {scrolled && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full pulse-dot"></div>
                    <span className="text-xs font-medium text-accent" data-testid="available-for-work">
                      Available for work
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center space-x-1 transition-all duration-500 ${
              scrolled ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100 scale-100'
            }`}>
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm"
                    data-testid={`nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
            </div>
            
            {/* Mobile Actions */}
            <div className="md:hidden flex items-center">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`text-foreground hover:text-primary focus:outline-none transition-opacity duration-300 ${
                  scrolled ? 'opacity-70 hover:opacity-100' : 'opacity-100'
                }`}
                data-testid="mobile-menu-button"
              >
                {isOpen ? <X size={scrolled ? 16 : 20} /> : <Menu size={scrolled ? 16 : 20} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md rounded-b-2xl">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors duration-300"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
