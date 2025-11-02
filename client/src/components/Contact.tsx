import { useState, useEffect, useRef } from 'react';
import { Send, Loader, Hand } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: 'Name',
    email: 'Email',
    service: '',
    message: "Message"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showHi, setShowHi] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHi(prev => !prev);
    }, 4000); // Show "Hi" for 4 seconds, then hand waves for 4 seconds (2 waves)

    return () => clearInterval(interval);
  }, []);

  // Cursor tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: 'Name',
          email: 'Email',
          service: '',
          message: "Message"
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`pt-12 pb-20 relative block overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      {/* Lime Cursor Dot */}
      <div 
        className="fixed w-4 h-4 bg-lime-400 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: cursorPosition.x + 16,
          top: cursorPosition.y + 12,
          boxShadow: '0 0 20px rgba(163, 230, 53, 0.6), 0 0 40px rgba(163, 230, 53, 0.3)'
        }}
      />
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title */}
        <h2 className={`text-4xl md:text-5xl font-bold font-poppins text-center mb-16 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
          CONTACT <span className="text-purple-600">ME</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Portrait Image */}
          <div className="relative mb-16 sm:mb-20 lg:mb-0">
            <div className={`relative rounded-2xl overflow-visible aspect-[3/4] max-w-md mx-auto ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'}`}>
              {/* Portrait Image */}
              <img 
                src="/image3.jpg" 
                alt="Kaushik Ranjan - Software Developer" 
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Lime green hand button overlay */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-5 md:-left-5 lg:-bottom-6 lg:-left-6 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-lime-400 rounded-full flex items-center justify-center shadow-xl z-10">
                {showHi ? (
                  <span className="text-green-800 text-lg sm:text-xl font-bold">Hi</span>
                ) : (
                  <Hand className="text-green-800 text-xl sm:text-2xl transform rotate-12 animate-wave" />
                )}
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className={`${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 uppercase tracking-wide">
              LET'S WORK TOGETHER
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-white/80'}`}>
              Let's build something impactful together—whether it's your brand, your website, or your next big idea.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lime-400 font-medium mb-2 text-sm">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`rounded-lg focus:border-lime-400 focus:ring-lime-400 ${theme === 'light' ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500' : 'bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500'}`}
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lime-400 font-medium mb-2 text-sm">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`rounded-lg focus:border-lime-400 focus:ring-lime-400 ${theme === 'light' ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500' : 'bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500'}`}
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              {/* Service Dropdown */}
              <div>
                <label htmlFor="service" className="block text-lime-400 font-medium mb-2 text-sm">
                  Service Needed ?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg px-3 py-2 focus:border-lime-400 focus:ring-lime-400 ${theme === 'light' ? 'bg-white border border-gray-300 text-gray-900' : 'bg-gray-800 border border-gray-700 text-gray-300'}`}
                  data-testid="select-service"
                >
                  <option value="" className={theme === 'light' ? 'text-gray-500' : 'text-gray-500'}>Select...</option>
                  <option value="web-development" className={theme === 'light' ? 'text-gray-900' : 'text-gray-300'}>Web Development</option>
                  <option value="mobile-development" className={theme === 'light' ? 'text-gray-900' : 'text-gray-300'}>Mobile Development</option>
                  <option value="ui-ux-design" className={theme === 'light' ? 'text-gray-900' : 'text-gray-300'}>UI/UX Design</option>
                  <option value="consulting" className={theme === 'light' ? 'text-gray-900' : 'text-gray-300'}>Consulting</option>
                </select>
              </div>
              
              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-lime-400 font-medium mb-2 text-sm">
                  What Can I Help You...
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`rounded-lg focus:border-lime-400 focus:ring-lime-400 resize-none ${theme === 'light' ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500' : 'bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500'}`}
                  required
                  data-testid="input-message"
                />
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-start">
                <Button 
                  type="submit" 
                  className={`w-32 border border-lime-400 text-lime-400 font-poppins font-bold py-6 px-8 rounded-3xl transition-all duration-300 uppercase tracking-wide hover:bg-lime-400 hover:text-black ${theme === 'light' ? 'bg-white' : 'bg-black'}`}
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                {isSubmitting ? (
                  <>
                    <Loader className="mr-2 animate-spin" size={16} />
                    Sending...
                  </>
                ) : (
                  'SUBMIT'
                )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
