import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVuedotjs, 
  SiNodedotjs, 
  SiPython, 
  SiExpress, 
  SiDjango, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiAmazon, 
  SiGit, 
  SiJavascript, 
  SiHtml5, 
  SiCss3,
  SiNpm,
  SiYarn,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiPrettier
} from 'react-icons/si';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaChevronDown,
  FaChevronUp,
  FaCheck
} from 'react-icons/fa';

const Skills = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const skillCategories = [
    {
      title: "FRONTEND DEVELOPMENT",
      icon: FaCode,
      color: "text-blue-500",
      skills: [
        { name: "React.js", icon: SiReact, color: "text-blue-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800 dark:text-white" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" }
      ]
    },
    {
      title: "BACKEND DEVELOPMENT",
      icon: FaServer,
      color: "text-green-500",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "Python", icon: SiPython, color: "text-yellow-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-600 dark:text-gray-300" },
        { name: "Django", icon: SiDjango, color: "text-green-700" },
        { name: "RESTful APIs", icon: FaServer, color: "text-green-500" },
        { name: "GraphQL", icon: FaCode, color: "text-pink-500" }
      ]
    },
    {
      title: "DATABASE & CLOUD",
      icon: FaDatabase,
      color: "text-purple-500",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
        { name: "Redis", icon: FaDatabase, color: "text-red-500" },
        { name: "MySQL", icon: FaDatabase, color: "text-blue-500" }
      ]
    },
    {
      title: "TOOLS & WORKFLOW",
      icon: FaCode,
      color: "text-orange-500",
      skills: [
        { name: "Git", icon: SiGit, color: "text-orange-500" },
        { name: "NPM", icon: SiNpm, color: "text-red-500" },
        { name: "Yarn", icon: SiYarn, color: "text-blue-400" },
        { name: "Webpack", icon: SiWebpack, color: "text-blue-600" },
        { name: "ESLint", icon: SiEslint, color: "text-purple-500" },
        { name: "Prettier", icon: SiPrettier, color: "text-gray-600" }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className={`text-3xl md:text-4xl font-bold font-poppins text-center mb-16 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Skills & <span className={`${theme === 'light' ? 'text-purple-600' : 'text-purple-400'}`}>Technologies</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Accordion Skills */}
            <div className="w-full">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className={`mb-6 border-b-2 ${
                  activeCategory === categoryIndex 
                    ? 'border-lime-400' 
                    : `${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`
                }`}>
                  {/* Accordion Header */}
                  <button
                    onClick={() => setActiveCategory(activeCategory === categoryIndex ? -1 : categoryIndex)}
                    className="w-full px-6 py-4 flex items-center justify-between transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-lime-400">{categoryIndex + 1}</span>
                      <h3 className={`text-lg font-bold font-poppins uppercase tracking-wide ${
                        activeCategory === categoryIndex 
                          ? 'text-lime-600 dark:text-lime-400' 
                          : `${theme === 'light' ? 'text-gray-900' : 'text-white'}`
                      }`}>
                        {category.title}
                      </h3>
                    </div>
                    {activeCategory === categoryIndex ? (
                      <FaChevronUp className="text-lime-400 text-xl" />
                    ) : (
                      <FaChevronDown className={`text-xl ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`} />
                    )}
                  </button>
                  
                  {/* Accordion Content */}
                  {activeCategory === categoryIndex && (
                    <div className="px-6 py-6">
                      <div className="grid grid-cols-2 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center space-x-3 p-3 transition-colors duration-200">
                            <div className="w-6 h-6 rounded-full bg-lime-400 flex items-center justify-center">
                              <FaCheck className="text-white text-xs" />
                            </div>
                            <div className="flex items-center space-x-2">
                              <skill.icon className={`${skill.color} text-lg`} size={20} />
                              <span className={`text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                                {skill.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Computer Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Computer Setup Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[6/7] max-w-md mx-auto shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 transform rotate-3 hover:rotate-6">
                  {/* Computer Image */}
                  <img 
                    src="/software.jpg" 
                    alt="Software engineer working with gadgets in room" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-lime-400 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
