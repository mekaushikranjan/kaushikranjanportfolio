import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect } from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star, ExternalLink, X } from 'lucide-react';

const Education = () => {
  const { theme } = useTheme();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const educationSection = document.getElementById('education');
      if (educationSection) {
        const rect = educationSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const educationData = [
    {
      title: "Master of Computer Applications",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      description: "Advanced program in Computer Applications covering software engineering, database management, and emerging technologies. Currently pursuing with focus on modern software development practices.",
      period: "2025 - 2027",
      badges: ["Ongoing", "MCA", "Computer Science"],
      type: "degree",
      icon: GraduationCap,
      color: "purple",
      achievements: ["Advanced Programming", "Software Engineering", "Database Systems"],
      image: "/software.jpg",
      certificate: "/software.jpg"
    },
    {
      title: "Bachelor of Computer Applications",
      institution: "L. N. Mishra College of Business Management, Bihar University",
      location: "Muzaffarpur, Bihar",
      description: "Comprehensive undergraduate program in Computer Applications covering programming fundamentals, data structures, algorithms, web development, and database management systems.",
      period: "2022 - 2025",
      badges: ["BCA", "Computer Applications", "Graduated"],
      type: "degree",
      icon: GraduationCap,
      color: "purple",
      achievements: ["Programming Fundamentals", "Web Development", "Database Management"],
      image: "/software.jpg",
      certificate: "/software.jpg"
    },
    {
      title: "Full Stack Web Development Bootcamp",
      institution: "Udemy",
      location: "Online",
      description: "Comprehensive bootcamp covering the complete web development stack. Completed intensive training on frontend and backend technologies, including React, Node.js, MongoDB, and modern development practices.",
      period: "2024",
      badges: ["61.5 Hours", "Completed", "Full Stack"],
      type: "certification",
      icon: Award,
      color: "orange",
      achievements: ["Frontend Development", "Backend Development", "Database Integration"],
      image: "/fullstack.jpg",
      certificate: "/fullstack.jpg"
    },
    {
      title: "MERN Stack Developer",
      institution: "GRAStech",
      location: "LN Mishra College of Business Management, Muzaffarpur, Bihar",
      description: "Project-based training on MERN stack and React Native. Comprehensive hands-on experience building full-stack applications using MongoDB, Express.js, React, Node.js, and React Native for mobile development.",
      period: "March 2025 - May 2025",
      badges: ["MERN Stack", "React Native", "Project Based"],
      type: "certification",
      icon: Award,
      color: "green",
      achievements: ["MERN Stack Mastery", "React Native", "Full-Stack Projects"],
      image: "/image.png",
      certificate: "/image.png"
    }
  ];

  const getColorClasses = (color: string, isHovered: boolean) => {
    const baseClasses = {
      purple: {
        bg: theme === 'light' ? 'bg-purple-50' : 'bg-purple-900/20',
        border: theme === 'light' ? 'border-purple-200' : 'border-purple-800',
        icon: theme === 'light' ? 'bg-purple-100 text-purple-600' : 'bg-purple-900/30 text-purple-400',
        accent: theme === 'light' ? 'text-purple-600' : 'text-purple-400',
        hover: isHovered ? 'shadow-purple-200 dark:shadow-purple-900/50' : ''
      },
      orange: {
        bg: theme === 'light' ? 'bg-orange-50' : 'bg-orange-900/20',
        border: theme === 'light' ? 'border-orange-200' : 'border-orange-800',
        icon: theme === 'light' ? 'bg-orange-100 text-orange-600' : 'bg-orange-900/30 text-orange-400',
        accent: theme === 'light' ? 'text-orange-600' : 'text-orange-400',
        hover: isHovered ? 'shadow-orange-200 dark:shadow-orange-900/50' : ''
      },
      green: {
        bg: theme === 'light' ? 'bg-green-50' : 'bg-green-900/20',
        border: theme === 'light' ? 'border-green-200' : 'border-green-800',
        icon: theme === 'light' ? 'bg-green-100 text-green-600' : 'bg-green-900/30 text-green-400',
        accent: theme === 'light' ? 'text-green-600' : 'text-green-400',
        hover: isHovered ? 'shadow-green-200 dark:shadow-green-900/50' : ''
      }
    };
    return baseClasses[color as keyof typeof baseClasses] || baseClasses.purple;
  };

  return (
    <section id="education" className={`py-16 sm:py-20 relative overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
          {/* Header Section */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 mb-6">
              <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Academic Journey</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Education & <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              My academic journey and professional certifications that shaped my expertise
            </p>
          </div>
          
          {/* Education Cards */}
          <div className="space-y-8 sm:space-y-12">
            {educationData.map((item, index) => {
              const colors = getColorClasses(item.color, hoveredCard === index);
              const IconComponent = item.icon;
              
              return (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 ${colors.bg} ${colors.border} border-2 ${colors.hover} shadow-xl hover:shadow-2xl`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      {/* Left Content */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 sm:gap-6">
                          {/* Icon */}
                          <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${colors.icon}`}>
                            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                          </div>
                          
                  <div className="flex-1">
                            {/* Type Badge */}
                            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-3 ${colors.accent} ${colors.bg}`}>
                              <Star className="w-3 h-3" />
                              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            </div>
                            
                            {/* Title */}
                            <h3 className={`text-xl sm:text-2xl font-bold font-poppins mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      {item.title}
                    </h3>
                            
                            {/* Institution & Location */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                              <p className={`font-semibold text-sm sm:text-base ${colors.accent}`}>
                                {item.institution}
                              </p>
                              <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                <MapPin className="w-3 h-3" />
                                {item.location}
                              </div>
                            </div>
                            
                            {/* Description */}
                            <p className={`mb-4 text-sm sm:text-base leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                      {item.description}
                            </p>
                            
                            {/* Achievements */}
                            <div className="mb-4">
                              <h4 className={`text-sm font-semibold mb-2 ${colors.accent}`}>Key Achievements:</h4>
                              <div className="flex flex-wrap gap-2">
                                {item.achievements.map((achievement, achievementIndex) => (
                                  <span key={achievementIndex} className={`px-2 py-1 rounded-lg text-xs font-medium ${colors.bg} ${colors.accent} border border-current/20`}>
                                    {achievement}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            {/* Badges */}
                            <div className="flex flex-wrap gap-2">
                              {item.badges.map((badge, badgeIndex) => (
                                <span key={badgeIndex} className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${colors.bg} ${colors.accent} border border-current/30`}>
                                  {badge}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Content - Period & Action */}
                      <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4">
                        {/* Period */}
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${colors.bg} ${colors.border} border`}>
                          <Calendar className="w-4 h-4" />
                          <span className={`text-sm font-semibold ${colors.accent}`}>{item.period}</span>
                        </div>
                        
                        {/* Action Button */}
                        <button 
                          onClick={() => setSelectedEducation(index)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${colors.accent} ${colors.bg} border border-current/30 hover:border-current/50`}
                        >
                          <span className="text-sm font-medium">View Details</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16 sm:mt-20">
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'} hover:scale-105 transition-transform duration-300 cursor-pointer`}>
              <span className={`text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                View Complete Resume
              </span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedEducation !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedEducation(null)}
          ></div>
          
          {/* Modal Content */}
          <div className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedEducation(null)}
              className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${theme === 'light' ? 'bg-white/90 text-gray-700 hover:bg-white' : 'bg-gray-800/90 text-gray-300 hover:bg-gray-800'}`}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Enhanced Image Container */}
            <div className="relative h-96 sm:h-[450px] md:h-[550px] overflow-hidden group">
              {/* Main Image with Parallax Effect */}
              <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700 ease-out">
                <img
                  src={educationData[selectedEducation].image}
                  alt={educationData[selectedEducation].title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Multi-layer Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20"></div>
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-700"></div>
                <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full animate-pulse delay-1000"></div>
              </div>
              
              {/* Enhanced Floating Badges */}
              <div className="absolute top-6 left-6">
                <div className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-md border ${theme === 'light' ? 'bg-white/95 text-gray-800 border-white/20' : 'bg-black/60 text-white border-white/10'}`}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    {educationData[selectedEducation].type.charAt(0).toUpperCase() + educationData[selectedEducation].type.slice(1)}
                  </div>
                </div>
              </div>
              
              <div className="absolute top-6 right-6">
                <div className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-md border ${theme === 'light' ? 'bg-white/95 text-gray-800 border-white/20' : 'bg-black/60 text-white border-white/10'}`}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {educationData[selectedEducation].period}
                  </div>
                </div>
              </div>
              
              {/* Enhanced Content Overlay with Program Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="max-w-4xl">
                  {/* Title with Glow Effect */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-3 text-white leading-tight drop-shadow-2xl">
                    {educationData[selectedEducation].title}
                  </h3>
                  
                  {/* Institution with Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <GraduationCap className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-lg sm:text-xl text-white/95 font-semibold">
                      {educationData[selectedEducation].institution}
                    </p>
                  </div>
                  
                  {/* Program Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                      <MapPin className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">{educationData[selectedEducation].location}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                      <Calendar className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">{educationData[selectedEducation].period}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-white text-sm font-medium">{educationData[selectedEducation].type.charAt(0).toUpperCase() + educationData[selectedEducation].type.slice(1)}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span className="text-white text-sm font-medium">Verified</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                      {educationData[selectedEducation].description}
                    </p>
                  </div>
                  
                  {/* Key Achievements */}
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-green-400" />
                      <span className="text-white font-semibold text-sm">Key Achievements</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {educationData[selectedEducation].achievements.map((achievement, index) => (
                        <span key={index} className="px-2 py-1 bg-green-500/20 text-green-200 text-xs font-medium rounded-full border border-green-400/30">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-16 right-16 w-24 h-24 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-20 left-1/4 w-16 h-16 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
