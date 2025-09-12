import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ShopEase Redesign Sprint",
      description: "Redesigned the checkout e-commerce app to enhance user experience. Focused on simplifying navigation, optimizing the checkout process, and incorporating a sleek.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "UI / UX Design",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management Platform",
      description: "Collaborative workspace application with real-time updates, team collaboration, and advanced project management features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Web Development",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Real-time weather tracking application with predictive analytics, interactive maps, and detailed forecasting capabilities.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Data Visualization",
      technologies: ["React", "TypeScript", "D3.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Connect Platform",
      description: "Feature-rich social networking platform with real-time messaging, content sharing, and advanced privacy controls.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Mobile Development",
      technologies: ["React Native", "Node.js", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "Comprehensive e-learning platform with course management, progress tracking, and interactive assessment tools.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Web Development",
      technologies: ["Vue.js", "Django", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Personal Finance Tracker",
      description: "Smart finance management app with budget tracking, expense categorization, and financial goal setting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Mobile Development",
      technologies: ["React Native", "Python", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const getCategoryColors = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'UI / UX Design': 'category-badge',
      'Web Development': 'bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide',
      'Data Visualization': 'bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide',
      'Mobile Development': 'bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide'
    };
    return colorMap[category] || 'category-badge';
  };

  const getTechColors = (tech: string) => {
    const colorMap: { [key: string]: string } = {
      'React': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Node.js': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'MongoDB': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
      'Vue.js': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Python': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'PostgreSQL': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'TypeScript': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'D3.js': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Socket.io': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
      'Django': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'AWS': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'React Native': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
      'Chart.js': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300'
    };
    return colorMap[tech] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
  };

  return (
    <section id="projects" className="py-20 fluid-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card-animate modern-project-card rounded-2xl overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={`${project.title} project showcase`}
                    className="w-full h-48 object-cover"
                    data-testid={`project-image-${index}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={getCategoryColors(project.category)}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-poppins mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 rounded-full text-xs font-medium ${getTechColors(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="text-primary hover:text-primary/80 transition-colors duration-300 flex items-center text-sm font-medium"
                      data-testid={`project-live-${index}`}
                    >
                      <ExternalLink size={14} className="mr-1" /> Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center text-sm font-medium"
                      data-testid={`project-github-${index}`}
                    >
                      <Github size={14} className="mr-1" /> GitHub
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
