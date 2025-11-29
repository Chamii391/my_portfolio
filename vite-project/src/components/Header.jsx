import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0f]/95 backdrop-blur-md py-4 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between md:justify-center">
            
            {/* Logo - Mobile Only */}
            <div className="md:hidden">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={closeMenu}
              >
                <span className="text-xl font-bold text-white">
                  CC<span className="text-blue-500">.</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex justify-center items-center">
              <ul className="flex items-center space-x-12">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                      onSetActive={() => setActiveSection(item.to)}
                      className={`relative text-sm font-medium uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                        activeSection === item.to
                          ? 'text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-2 left-0 h-px bg-blue-500 transition-all duration-300 ${
                          activeSection === item.to ? 'w-full' : 'w-0'
                        }`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors duration-300 relative z-[110]"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[105] bg-[#0a0a0f] overflow-y-auto">
          
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 py-5">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
              onClick={closeMenu}
            >
              <span className="text-xl font-bold text-white">
                CC<span className="text-blue-500">.</span>
              </span>
            </Link>
            
            <button
              onClick={closeMenu}
              className="p-2 text-slate-300 hover:text-white transition-colors duration-300"
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
            
            {/* Nav Items */}
            <nav>
              <ul className="flex flex-col items-center space-y-8">
                {navItems.map((item, index) => (
                  <li
                    key={item.to}
                    className="animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={closeMenu}
                      className={`text-3xl font-light uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                        activeSection === item.to
                          ? 'text-white'
                          : 'text-slate-500 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Divider */}
            <div className="w-16 h-px bg-white/10 my-10" />

            {/* Social Links */}
            <div className="flex items-center gap-8 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
              <a 
                href="https://github.com/Chamii391" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                GitHub
              </a>
              <span className="w-1 h-1 bg-slate-600 rounded-full" />
              <a 
                href="https://www.linkedin.com/in/chameera-chathuranga-ba498b320" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Header;