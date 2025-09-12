const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Kaushik Ranjan working on coding projects" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="about-image"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold font-poppins text-foreground">
                Passionate Developer & Problem Solver
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed font-inter">
                With over 3 years of experience in software development, I specialize in creating 
                scalable web applications and mobile solutions. My journey in tech began with a 
                curiosity about how things work, which evolved into a passion for building 
                innovative digital experiences.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed font-inter">
                I thrive on challenges and am constantly learning new technologies to stay ahead 
                in the ever-evolving tech landscape. When I'm not coding, you'll find me contributing 
                to open-source projects, mentoring aspiring developers, or exploring the latest 
                tech trends.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary font-poppins" data-testid="stat-projects">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary font-poppins" data-testid="stat-experience">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
