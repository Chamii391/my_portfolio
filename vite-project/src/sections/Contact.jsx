import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { BsSend } from 'react-icons/bs';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('chameerachathuranga40@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/Chamii391",
      username: "@Chamii391",
      gradient: "from-gray-600 to-gray-800",
      hoverGradient: "group-hover:from-gray-500 group-hover:to-gray-700"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/chameera-chathuranga-ba498b320",
      username: "Chameera Chathuranga",
      gradient: "from-blue-600 to-blue-800",
      hoverGradient: "group-hover:from-blue-500 group-hover:to-blue-700"
    }
  ];

  return (
    <Element name="contact" className="min-h-screen bg-[#0a0a0f] relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div ref={sectionRef} className="relative z-10 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <BsSend className="text-blue-400" />
            <span className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider">Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500" />
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-blue-500" />
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Main Contact Card */}
        <div 
          className={`mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="relative group">
            
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10">
              
              {/* Top Section */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-8 pb-8 border-b border-white/10">
                
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="text-4xl sm:text-5xl font-bold text-white">CC</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-[#0a0a0f]" />
                </div>

                {/* Info */}
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Chameera Chathuranga
                  </h3>
                  <p className="text-blue-400 font-medium mb-3">
                    Software Engineer
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-400 text-sm">
                    <HiOutlineLocationMarker />
                    <span>Sri Lanka</span>
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div className="mb-8">
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">Email Address</p>
                <div 
                  onClick={handleEmailCopy}
                  className="flex items-center justify-between gap-4 p-4 bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl cursor-pointer transition-all duration-300 group/email"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <HiOutlineMail className="text-blue-400 text-lg" />
                    </div>
                    <span className="text-slate-300 text-sm sm:text-base break-all">
                      chameerachathuranga40@gmail.com
                    </span>
                  </div>
                  <div className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    copied 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-white/5 text-slate-400 group-hover/email:bg-blue-500/20 group-hover/email:text-blue-400'
                  }`}>
                    {copied ? (
                      <span className="flex items-center gap-1">
                        <FaCheck size={10} />
                        Copied!
                      </span>
                    ) : (
                      'Copy'
                    )}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">Social Profiles</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${social.gradient} ${social.hoverGradient} rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-lg`}>
                        {social.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                          {social.name}
                        </h4>
                        <p className="text-slate-500 text-xs truncate">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
            <a
              href="mailto:chameerachathuranga40@gmail.com"
              className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl text-white font-semibold transition-all duration-300"
            >
              <FaEnvelope />
              <span>Send Me an Email</span>
            </a>
          </div>
          <p className="text-slate-500 text-xs mt-4">
            I'll respond within 24 hours
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Contact;