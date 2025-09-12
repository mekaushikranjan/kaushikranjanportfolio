import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const BottomThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-background/90 backdrop-blur-md border border-border/50 rounded-full px-2 py-2 shadow-lg touch-manipulation">
        <div className="relative flex items-center w-20 h-8">
          {/* Background track */}
          <div className="absolute inset-0 bg-secondary rounded-full"></div>
          
          {/* Sliding indicator */}
          <div 
            className={`absolute w-8 h-6 bg-primary rounded-full shadow-sm transition-all duration-300 ease-in-out top-1 flex items-center justify-center ${
              theme === 'light' ? 'left-1' : 'left-11'
            }`}
          >
            {theme === 'light' ? (
              <Sun size={14} className="text-primary-foreground" />
            ) : (
              <Moon size={14} className="text-primary-foreground" />
            )}
          </div>
          
          {/* Clickable button */}
          <button
            onClick={toggleTheme}
            className="relative w-full h-full rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            data-testid="bottom-theme-toggle"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {/* Left icon (Sun) */}
            <div className={`absolute left-2 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${
              theme === 'light' ? 'opacity-0' : 'opacity-50'
            }`}>
              <Sun size={12} className="text-muted-foreground" />
            </div>
            
            {/* Right icon (Moon) */}
            <div className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${
              theme === 'dark' ? 'opacity-0' : 'opacity-50'
            }`}>
              <Moon size={12} className="text-muted-foreground" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomThemeToggle;