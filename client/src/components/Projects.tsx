import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

const Projects = () => {
  const { theme } = useTheme();
  const [visibleProjects, setVisibleProjects] = useState(2);

  const allProjects = [
    {
      title: "Streamify - Live Streaming Platform",
      description: "A full-stack live streaming platform built with modern technologies, allowing users to stream, create, and connect. Features real-time video streaming, user authentication, content discovery, and interactive live chat. Built with cutting-edge web technologies for seamless streaming experiences.",
      image: "/streamify.png",
      category: "Full-Stack Development",
      technologies: ["Nest.js", "Cloudflare", "LiveKit", "PostgreSQL", "Vite", "React", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Luxury Dubai Real Estate",
      description: "A premium real estate platform showcasing exclusive properties in Dubai's most prestigious locations. Features property listings, virtual tours, market insights, and investment advisory services. Built with modern web technologies for a seamless luxury experience.",
      image: "/luxuryDubai.png",
      category: "Web Development",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      liveUrl: "https://real-state-swart-eight.vercel.app/",
      githubUrl: "https://github.com/mekaushikranjan/RealState"
    },
    {
      title: "Royal Drive - Luxury Car Rental",
      description: "Premium luxury car rental platform for Dubai featuring an extensive fleet of supercars, luxury vehicles, and SUVs. Includes booking system, location-based search, premium insurance coverage, and 24/7 concierge services for an exceptional rental experience.",
      image: "/Royaldrive.png",
      category: "Web Development",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "https://rental-cars-swart.vercel.app/",
      githubUrl: "https://github.com/mekaushikranjan/RentalCars"
    },
    {
      title: "Skyline Estates",
      description: "Luxury real estate platform connecting buyers with premium properties worldwide. Features property listings, virtual tours, investment advisory, and exclusive membership programs. Designed for high-end clientele seeking prestigious real estate opportunities.",
      image: "/skyline.png",
      category: "Web Development",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://skyline-estate.vercel.app/",
      githubUrl: "https://github.com/mekaushikranjan/SKyline-Estate"
    },
    {
      title: "FaceVault - AI Photo Organizer",
      description: "AI-powered photo management application that automatically organizes photos by detecting and grouping faces. Features smart album creation, secure cloud storage, and intuitive interface for easily managing and accessing memories across devices.",
      image: "/facevault.png",
      category: "AI & Web Development",
      technologies: ["React", "AI/ML", "Face Detection", "Cloud Storage", "TypeScript"],
      liveUrl: "https://face-vault.vercel.app/",
      githubUrl: "https://github.com/mekaushikranjan/facevalutbackend"
    },
    {
      title: "Happyhome - Home Renovation Services",
      description: "Premium home renovation and interior design platform offering comprehensive renovation services. Features service galleries, consultation booking, project showcases, and a modern interface designed to help clients transform their living spaces.",
      image: "/Happyhome.png",
      category: "Web Development",
      technologies: ["React", "Node.js", "Tailwind CSS", "REST API"],
      liveUrl: "https://happyhome-frontend.onrender.com/",
      githubUrl: "https://github.com/mekaushikranjan/HappyHome-frontend"
    }
  ];

  // Get currently visible projects
  const projects = allProjects.slice(0, visibleProjects);

  // Handle load more functionality
  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 2, allProjects.length));
  };

  // Check if there are more projects to load
  const hasMoreProjects = visibleProjects < allProjects.length;



  return (
    <section id="projects" className={`w-full py-20 pt-20 relative block ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold font-poppins mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          Featured <span className={`${theme === 'light' ? 'text-purple-600' : 'text-purple-400'}`}>Projects</span>
        </h2>
        <p className={`text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
        </p>
      </div>
      
      {/* Projects Container with Fixed Heights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 relative">
        {/* Projects Grid with Explicit Heights */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="w-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] bg-white/5 backdrop-blur-sm border border-white/10 relative z-10"
              style={{ minHeight: '200px' }}
            >
              {/* Project Image with All Content Overlayed */}
              <div className="relative w-full overflow-hidden isolate" style={{ height: '600px' }}>
                <img 
                  src={project.image}
                  alt={`${project.title} project showcase`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Dark Overlay Gradient for Better Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="inline-block bg-purple-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg border border-white/20">
                    {project.category}
                  </span>
                </div>
                
                {/* All Content Overlayed on Image */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-10">
                  {/* Project Title */}
                  <h3 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-lg leading-relaxed mb-6 text-white/90 drop-shadow-md max-w-3xl">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30 hover:border-white/50"
                    >
                      <ExternalLink size={16} className="inline mr-2" /> Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 bg-transparent text-white hover:bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white/50"
                    >
                      <Github size={16} className="inline mr-2" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Projects Button */}
        {hasMoreProjects && (
          <div className="text-center mt-20 py-10 relative z-20">
            <button 
              onClick={handleLoadMore}
              className={`group px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 border-2 inline-flex items-center cursor-pointer z-20 ${
                theme === 'light' 
                  ? 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-white shadow-lg' 
                  : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-black shadow-lg'
              }`}
            >
              View More Projects
              <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        )}
        
        {/* All Projects Loaded Message */}
        {!hasMoreProjects && (
          <div className="text-center mt-20 py-10">
            <p className={`text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              🎉 All projects loaded! Check back soon for more amazing work.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
