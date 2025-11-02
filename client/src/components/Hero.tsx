import { ChevronDown, Hand } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect } from 'react';

const Hero = () => {
  const { theme } = useTheme();
  const [showHi, setShowHi] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHi(prev => !prev);
    }, 4000); // Show "Hi" for 4 seconds, then hand waves for 4 seconds (2 waves)

    return () => clearInterval(interval);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        {/* Main Hero Layout - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh]">
          
          {/* Left Side - Name and "SOFTWARE" */}
          <div className="text-center lg:text-right hero-text-animate order-1 lg:order-1">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-muted-foreground font-inter mb-1 sm:mb-2 tracking-wide">
              KAUSHIK RANJAN
            </h2>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold font-poppins leading-tight sm:leading-none theme-transition ${
              theme === 'dark' ? 'text-white hero-text-contrast' : 'text-gray-900'
            }`}>
              SOFTWARE
            </h1>
          </div>

          {/* Center - Professional Image with Animated Dot */}
          <div className="relative flex justify-center order-2 lg:order-2 my-4 sm:my-6 md:my-8">
            <div className="relative hero-professional-image">
              <img 
                src="/image1.jpg" 
                alt="Kaushik Ranjan - Software Developer" 
                className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-[450px] 2xl:w-96 2xl:h-[500px] object-cover rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl"
                data-testid="hero-professional-image"
              />
              
              {/* Animated Green Dot with Hand Icon / Hi Text */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-5 md:-left-5 lg:-bottom-6 lg:-left-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-accent rounded-full pulse-green flex items-center justify-center shadow-lg sm:shadow-xl">
                {showHi ? (
                  <span className="text-accent-foreground text-sm sm:text-base md:text-lg lg:text-xl font-bold">Hi</span>
                ) : (
                  <Hand className="text-accent-foreground text-lg sm:text-xl md:text-2xl transform rotate-12 animate-wave" />
                )}
              </div>
            </div>
          </div>

          {/* Right Side - "DEVELOPER" */}
          <div className="text-center lg:text-left hero-text-animate-right order-3 lg:order-3">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold font-poppins leading-tight sm:leading-none theme-transition ${
              theme === 'dark' ? 'text-white hero-text-contrast' : 'text-gray-900'
            }`}>
              DEVELOPER
            </h1>
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl font-inter mt-3 sm:mt-4 md:mt-6 max-w-xs sm:max-w-sm mx-auto lg:mx-0 leading-relaxed theme-transition ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a software developer and 
              full-stack developer.
            </p>
          </div>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className={`text-lg sm:text-xl ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`} />
      </div>
    </section>
  );
};

export default Hero;
