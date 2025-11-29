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
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md py-4 shadow-lg shadow-slate-900/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        
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
                  
                  {/* Underline indicator */}
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

        {/* Mobile Menu Button - Right aligned */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-300 hover:text-white transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-slate-950/90 backdrop-blur-lg transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu - Full Screen Centered */}
      <div
        className={`md:hidden fixed inset-0 flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors duration-300"
        >
          <FaTimes size={24} />
        </button>

        {/* Mobile Nav Items */}
        <nav>
          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <li
                key={item.to}
                className={`transform transition-all duration-500 ${
                  isOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: isOpen ? `${index * 100}ms` : '0ms' }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={closeMenu}
                  className={`text-2xl font-light uppercase tracking-widest cursor-pointer transition-all duration-300 ${
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
      </div>
    </header>
  );
};

export default Header;