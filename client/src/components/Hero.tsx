import { Github, Linkedin, Twitter, Mail, ChevronDown, Hand } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Layout - Split Text with Central Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[70vh]">
          
          {/* Left Side - Name and "SOFTWARE" */}
          <div className="text-left lg:text-right hero-text-animate">
            <h2 className="text-lg md:text-xl font-medium text-muted-foreground font-inter mb-2 tracking-wide">
              KAUSHIK RANJAN
            </h2>
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold font-poppins leading-none theme-transition ${
              theme === 'dark' ? 'text-white hero-text-contrast' : 'text-gray-900'
            }`}>
              SOFT
              <br />
              WARE
            </h1>
          </div>

          {/* Center - Professional Image with Animated Dot */}
          <div className="relative flex justify-center">
            <div className="relative hero-professional-image">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600" 
                alt="Kaushik Ranjan - Software Developer" 
                className="w-72 h-96 md:w-80 md:h-[450px] lg:w-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                data-testid="hero-professional-image"
              />
              
              {/* Animated Green Dot with Hand Icon */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent rounded-full pulse-green flex items-center justify-center shadow-xl">
                <Hand className="text-accent-foreground text-2xl transform rotate-12" />
              </div>
            </div>
          </div>

          {/* Right Side - "DEVELOPER" */}
          <div className="text-left hero-text-animate-right">
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold font-poppins leading-none theme-transition ${
              theme === 'dark' ? 'text-white hero-text-contrast' : 'text-gray-900'
            }`}>
              DEVE
              <br />
              LOPER
            </h1>
            <p className={`text-lg md:text-xl font-inter mt-6 max-w-sm leading-relaxed theme-transition ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a US-based software developer and 
              full-stack developer.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            data-testid="button-view-work"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            data-testid="button-contact"
          >
            Get In Touch
          </button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12">
          <a href="#" className={`transition-colors duration-300 text-2xl ${
            theme === 'dark' ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
          }`} data-testid="link-github">
            <Github />
          </a>
          <a href="#" className={`transition-colors duration-300 text-2xl ${
            theme === 'dark' ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
          }`} data-testid="link-linkedin">
            <Linkedin />
          </a>
          <a href="#" className={`transition-colors duration-300 text-2xl ${
            theme === 'dark' ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
          }`} data-testid="link-twitter">
            <Twitter />
          </a>
          <a href="#" className={`transition-colors duration-300 text-2xl ${
            theme === 'dark' ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'
          }`} data-testid="link-email">
            <Mail />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className={`text-xl ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`} />
      </div>
    </section>
  );
};

export default Hero;
