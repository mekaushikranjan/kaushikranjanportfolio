import { Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="floating-animation mb-8">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="Kaushik Ranjan - Professional headshot" 
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-primary/20"
              data-testid="hero-image"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6">
            Hi, I'm <span className="gradient-text">Kaushik Ranjan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-inter">
            A passionate <span className="text-primary font-semibold">Software Developer</span> crafting innovative digital solutions 
            with modern technologies and creative problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl" data-testid="link-github">
              <Github />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl" data-testid="link-linkedin">
              <Linkedin />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl" data-testid="link-twitter">
              <Twitter />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl" data-testid="link-email">
              <Mail />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-muted-foreground text-xl" />
      </div>
    </section>
  );
};

export default Hero;
