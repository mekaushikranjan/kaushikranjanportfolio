import { useEffect, useState } from 'react';
import { Code, Server, Database } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      title: "Frontend Development",
      icon: Code,
      color: "text-primary",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-accent",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 92 },
        { name: "Express.js", level: 85 },
        { name: "Django", level: 78 }
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "text-secondary-foreground",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 82 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-16">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-card border border-border rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <category.icon className={`${category.color} text-2xl mr-3`} size={28} />
                  <h3 className="text-xl font-semibold font-poppins">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`skill-bar h-2 rounded-full ${
                            category.color === 'text-primary' ? 'bg-primary' :
                            category.color === 'text-accent' ? 'bg-accent' :
                            'bg-secondary-foreground'
                          }`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transition: 'width 1.5s ease-in-out'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Technology Icons */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold font-poppins mb-8">Technologies I Work With</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'Python', icon: '🐍' },
                { name: 'JavaScript', icon: '🟨' },
                { name: 'Git', icon: '📚' },
                { name: 'Docker', icon: '🐳' },
                { name: 'AWS', icon: '☁️' },
                { name: 'MongoDB', icon: '🍃' }
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-xs text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
