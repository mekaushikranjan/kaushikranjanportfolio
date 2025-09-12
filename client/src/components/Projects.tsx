import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration, and advanced filtering options.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Real-time weather tracking application with predictive analytics, interactive maps, and detailed forecasting capabilities.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "TypeScript", "APIs"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Platform",
      description: "Feature-rich social networking platform with real-time messaging, content sharing, and advanced privacy controls.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "Comprehensive e-learning platform with course management, progress tracking, and interactive assessment tools.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Django", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Personal Finance Tracker",
      description: "Smart finance management app with budget tracking, expense categorization, and financial goal setting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Python", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const getTechColors = (tech: string) => {
    const colorMap: { [key: string]: string } = {
      'React': 'bg-primary/10 text-primary',
      'Node.js': 'bg-accent/10 text-accent',
      'MongoDB': 'bg-secondary/10 text-secondary-foreground',
      'Vue.js': 'bg-primary/10 text-primary',
      'Python': 'bg-accent/10 text-accent',
      'PostgreSQL': 'bg-secondary/10 text-secondary-foreground',
      'TypeScript': 'bg-accent/10 text-accent',
      'APIs': 'bg-secondary/10 text-secondary-foreground',
      'Socket.io': 'bg-secondary/10 text-secondary-foreground',
      'Django': 'bg-accent/10 text-accent',
      'AWS': 'bg-secondary/10 text-secondary-foreground',
      'React Native': 'bg-primary/10 text-primary',
      'Chart.js': 'bg-secondary/10 text-secondary-foreground'
    };
    return colorMap[tech] || 'bg-primary/10 text-primary';
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card bg-card border border-border rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={project.image}
                  alt={`${project.title} project showcase`}
                  className="w-full h-48 object-cover"
                  data-testid={`project-image-${index}`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-poppins mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 rounded-full text-sm ${getTechColors(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="text-primary hover:text-primary/80 transition-colors duration-300 flex items-center"
                      data-testid={`project-live-${index}`}
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center"
                      data-testid={`project-github-${index}`}
                    >
                      <Github size={16} className="mr-1" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              data-testid="button-view-all-projects"
            >
              View All Projects
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
