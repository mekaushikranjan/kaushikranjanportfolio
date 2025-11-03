import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-6 sm:py-8 relative z-40 ${theme === 'light' ? 'bg-blue-600' : 'bg-lime-100'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Top Row - Contact and Social Information */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 py-4 sm:py-6">
          {/* Email */}
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className={`text-xs sm:text-sm ${theme === 'light' ? 'text-white' : 'text-black'}`}>Email :</span>
            <span className={`font-bold text-xs sm:text-sm ${theme === 'light' ? 'text-white' : 'text-black'}`}>mritunjaykaushik1803@gmail.com</span>
          </div>
          
          {/* Phone */}
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className={`text-xs sm:text-sm ${theme === 'light' ? 'text-white' : 'text-black'}`}>Phone :</span>
            <span className={`font-bold text-xs sm:text-sm ${theme === 'light' ? 'text-white' : 'text-black'}`}>+91 9507126383</span>
          </div>
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className={`text-xs sm:text-sm ${theme === 'light' ? 'text-white' : 'text-black'}`}>Location :</span>
            <span className={`font-bold text-xs sm:text-sm ${theme === 'light' ? 'text-white' : 'text-black'}`}>Punjab, India</span>
          </div>  
          {/* Social Media */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className={`text-xs sm:text-sm ${theme === 'light' ? 'text-white' : 'text-black'}`}>Social Media :</span>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="https://github.com/mekaushikranjan" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme === 'light' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} transition-colors duration-300`}
                data-testid="footer-github"
                aria-label="GitHub Profile"
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mekaushikranjan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme === 'light' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} transition-colors duration-300`}
                data-testid="footer-linkedin"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://x.com/ikaushikranjan3" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme === 'light' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} transition-colors duration-300`}
                data-testid="footer-twitter"
                aria-label="Twitter/X Profile"
              >
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href="mailto:mritunjaykaushik1803@gmail.com" 
                className={`${theme === 'light' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} transition-colors duration-300`}
                data-testid="footer-email"
                aria-label="Email Contact"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider with neon dot */}
        <div className="relative flex items-center justify-center py-3 sm:py-4">
          <div className={`flex-1 h-px ${theme === 'light' ? 'bg-white/30' : 'bg-black/30'}`}></div>
          <div className={`absolute w-2 h-2 ${theme === 'light' ? 'bg-lime-200' : 'bg-green-600'} rounded-full animate-pulse`}></div>
          <div className={`flex-1 h-px ${theme === 'light' ? 'bg-white/30' : 'bg-black/30'}`}></div>
        </div>
        
        {/* Bottom Row - Copyright and Attribution */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 sm:gap-4 py-3 sm:py-4">
          {/* Copyright */}
          <div className={`text-xs sm:text-sm text-center lg:text-left ${theme === 'light' ? 'text-white' : 'text-black'}`}>
            © Copyright 2025. All Rights Reserved by{' '}
            <span className={`underline cursor-pointer ${theme === 'light' ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors duration-300`}>
              Kaushik Ranjan
            </span>
          </div>
          
          {/* Created by */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <span className={`text-xs sm:text-sm ${theme === 'light' ? 'text-white' : 'text-black'}`}>Created by</span>
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden`}>
                  <img 
                    src="/kaushikimage2.png" 
                    alt="Kaushik Ranjan - Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className={`underline cursor-pointer ${theme === 'light' ? 'hover:text-gray-300' : 'hover:text-gray-600'} transition-colors duration-300 font-medium text-xs sm:text-sm ${theme === 'light' ? 'text-white' : 'text-black'}`}>
                  Kaushik Ranjan
                </span>
              </div>
            </div>
            <div className="bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-sm border">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">R</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-800 font-medium">Made in React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
