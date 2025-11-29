import React from 'react';
import { Element } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const contactLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Chamii391",
      isEmail: false
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/chameera-chathuranga-ba498b320",
      isEmail: false
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "chameerachathuranga40@gmail.com",
      isEmail: true
    }
  ];

  const handleEmailClick = (e, email) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
  };

  return (
    <Element name="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 mb-12 md:mb-16">
          Feel free to reach out and connect with me!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contactLinks.map((link, index) => {
            if (link.isEmail) {
              return (
                <div key={index} onClick={(e) => handleEmailClick(e, link.url)} className="group relative bg-gradient-to-br from-slate-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-blue-800/40 shadow-xl shadow-blue-900/30 hover:shadow-cyan-500/40 transition-all duration-500 hover:scale-110 hover:border-cyan-500/60 cursor-pointer">
                  <div className="text-6xl md:text-7xl mb-4 text-cyan-400">
                    {link.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                    {link.name}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base break-all">
                    {link.url}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Click to copy
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            }
            return (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-br from-slate-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-blue-800/40 shadow-xl shadow-blue-900/30 hover:shadow-cyan-500/40 transition-all duration-500 hover:scale-110 hover:border-cyan-500/60">
                <div className="text-6xl md:text-7xl mb-4 text-cyan-400">
                  {link.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                  {link.name}
                </h3>
                <p className="text-slate-400 text-sm md:text-base">
                  Connect with me
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default Contact;