import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 overflow-hidden">
      
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        
        {/* Top Curve Decoration */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

        <div className="px-6 py-16 md:py-20">
          <div className="max-w-lg mx-auto text-center">
            
            {/* Back to Top Button */}
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="inline-block mb-10 cursor-pointer group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/30 transition-all duration-300 group-hover:-translate-y-2">
                  <HiArrowUp className="text-white text-xl" />
                </div>
              </div>
            </Link>

            {/* Thank You Text */}
            <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-4">
              Thank you for visiting
            </p>

            {/* Name with Gradient */}
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Chameera Chathuranga
              </span>
            </h3>

            {/* Decorative Element */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
              <span className="w-3 h-3 border-2 border-blue-500 rotate-45" />
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500" />
            </div>

            {/* Quote */}
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 max-w-sm mx-auto">
              "Building digital experiences that make a difference"
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

            {/* Copyright with Style */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-slate-500 text-sm">
                Designed & Built with 
                <span className="text-red-500 mx-1">♥</span>
              </p>
              <p className="text-slate-600 text-xs uppercase tracking-widest">
                © {currentYear} All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;