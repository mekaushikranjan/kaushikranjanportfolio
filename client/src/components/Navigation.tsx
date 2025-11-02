import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show welcome message on every page load/refresh
    setShowWelcome(true);
    
    // Auto-hide welcome message after 2 seconds
    setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    // Initialize scroll state on mount
    setScrolled(window.scrollY > 50);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      <nav className={`mx-auto transition-all duration-500 ease-in-out rounded-3xl backdrop-blur-md shadow-lg border-2 ${
        scrolled
          ? 'max-w-72' 
          : showWelcome
          ? 'max-w-72'
          : 'max-w-4xl'
      } ${theme === 'light' 
        ? 'bg-white/95 border-gray-300' 
        : 'bg-black/95 border-gray-700'
      }`}>
        <div className="px-6">
          <div className={`flex justify-between items-center transition-all duration-500 ${
            scrolled ? 'h-16' : 'h-16'
          }`}>
            {/* Profile Image, Name and Available for Work Text */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className={`rounded-full overflow-hidden transition-all duration-300 ${
                scrolled || showWelcome ? 'w-8 h-8' : 'w-10 h-10'
              }`} data-testid="profile-image">
                <img 
                  src="/image2.jpg"
                  alt="Kaushik Ranjan - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                {/* Name shows when NOT scrolled and NOT showing welcome */}
                {!scrolled && !showWelcome && (
                  <span className={`font-bold font-poppins text-xl transition-all duration-300 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`} data-testid="profile-name">
                    KAUSHIK RANJAN
                  </span>
                )}
                {/* Welcome message shows when showWelcome is true */}
                {showWelcome && (
                  <div className="flex items-center space-x-1  animate-fade-in">
                    <span className={`text-md font-medium text-accent ${theme === 'light' ? 'text-black' : 'text-white'}`} data-testid="welcome-message">
                      Welcome to my portfolio!
                    </span>
                  </div>
                )}
                {/* Available for work shows when scrolled and NOT showing welcome */}
                {scrolled && !showWelcome && (
                  <div className="flex items-center justify-center space-x-2 ml-4">
                    <span className="text-md font-medium text-accent" data-testid="available-for-work">
                      Available for work
                    </span>
                    <button className="w-3 h-3 bg-accent rounded-full pulse-dot hover:scale-110 transition-transform duration-200"></button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center space-x-1 transition-all duration-500 ${
              scrolled || showWelcome ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100 scale-100'
            }`}>
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative overflow-hidden transition-all duration-300 font-medium text-sm group ${
                        item.id === 'contact' 
                          ? `${theme === 'light' ? 'bg-black text-white px-4 py-2 rounded-lg shadow-sm hover:shadow-lg' : 'bg-white text-gray-900 px-4 py-2 rounded-lg shadow-sm hover:shadow-lg'}`
                          : `${theme === 'light' ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'}`
                      }`}
                      data-testid={`nav-${item.id}`}
                    >
                      <span className="relative z-10 transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                        {item.label}
                      </span>
                      <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out group-hover:translate-y-0 translate-y-full group-hover:opacity-100 ${
                        theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                      }`}>
                        {item.label}
                      </span>
                    </button>
                ))}
              </div>
              
            </div>
            
            {/* Mobile Actions */}
            <div className="md:hidden flex items-center">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none transition-opacity duration-300 ${
                  scrolled || showWelcome ? 'opacity-70 hover:opacity-100' : 'opacity-100'
                } ${theme === 'light' ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'}`}
                data-testid="mobile-menu-button"
              >
                {isOpen ? <X size={scrolled || showWelcome ? 16 : 20} /> : <Menu size={scrolled || showWelcome ? 16 : 20} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className={`md:hidden backdrop-blur-md rounded-b-2xl border-b-2 ${theme === 'light' 
            ? 'border-t border-gray-200/50 border-b-gray-200/50 bg-white/95' 
            : 'border-t border-gray-800/50 border-b-gray-800/50 bg-black/95'
          }`}>
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative overflow-hidden block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 group ${
                    item.id === 'contact'
                      ? `${theme === 'light' ? 'bg-black text-white shadow-sm hover:shadow-lg' : 'bg-white text-gray-900 shadow-sm hover:shadow-lg'}`
                      : `${theme === 'light' 
                          ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100' 
                          : 'text-gray-300 hover:text-blue-400 hover:bg-gray-900'
                        }`
                  }`}
                  data-testid={`mobile-nav-${item.id}`}
                >
                  <span className="relative z-10 transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                    {item.label}
                  </span>
                  <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out group-hover:translate-y-0 translate-y-full group-hover:opacity-100 ${
                    theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                  }`}>
                    {item.label}
                  </span>
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
