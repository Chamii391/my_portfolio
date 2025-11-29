import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 shadow-lg shadow-blue-600/20 p-4 md:p-6 z-50 border-b border-blue-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between md:justify-center items-center">
        {/* Logo/Name - Mobile Only */}
        <div className="md:hidden text-cyan-400 text-xl font-bold">
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-slate-300 hover:text-cyan-400 transition-all duration-300 text-lg font-semibold hover:scale-125 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-slate-300 hover:text-cyan-400 transition-all duration-300 text-lg font-semibold hover:scale-125 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer text-slate-300 hover:text-cyan-400 transition-all duration-300 text-lg font-semibold hover:scale-125 relative group"
          >
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-slate-300 hover:text-cyan-400 transition-all duration-300 text-lg font-semibold hover:scale-125 relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-slate-300 hover:text-cyan-400 transition-all duration-300 text-lg font-semibold hover:scale-125 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-cyan-400 text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer text-slate-300 hover:text-cyan-400 transition-all duration-300 text-lg font-semibold text-center py-2"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer text-slate-300 hover:text-cyan-400 transition-all duration-300 text-lg font-semibold text-center py-2"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer text-slate-300 hover:text-cyan-400 transition-all duration-300 text-lg font-semibold text-center py-2"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer text-slate-300 hover:text-cyan-400 transition-all duration-300 text-lg font-semibold text-center py-2"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer text-slate-300 hover:text-cyan-400 transition-all duration-300 text-lg font-semibold text-center py-2"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;