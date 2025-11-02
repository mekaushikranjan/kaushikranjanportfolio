import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const BottomThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <div className="relative">
        {/* Dark gray pill-shaped background */}
        <div className="bg-gray-800 rounded-full px-1 py-1 shadow-lg">
          <div className="relative flex items-center w-10 h-5">
            {/* White circular indicator */}
            <div 
              className={`absolute w-3 h-3 bg-white rounded-full shadow-sm transition-all duration-300 ease-in-out top-1 ${
                theme === 'light' ? 'left-1' : 'left-6'
              }`}
            />
            
            {/* Clickable button */}
            <button
              onClick={toggleTheme}
              className="relative w-full h-full rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-800"
              data-testid="bottom-theme-toggle"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomThemeToggle;