import React from 'react';
import { Element, Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { HiArrowDown } from 'react-icons/hi';
import profileImage from '../assets/propic.jpg';

const Home = () => {
  return (
    <Element
      name="home"
      className="min-h-screen bg-[#0a0a0f] relative"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]" />
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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-20 lg:pt-20 lg:pb-20 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-slate-400 text-sm">Available for opportunities</span>
            </div>

            {/* Main Title - FIXED PADDING */}
            <div className="mb-6">
              <span className="text-slate-400 text-lg sm:text-xl font-normal block mb-3">
                Hello, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white block pb-1">Chameera</span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent block pb-2">
                  Chathuranga
                </span>
              </h1>
            </div>

            {/* Animated Typewriter */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="w-10 h-[2px] bg-gradient-to-r from-blue-500 to-transparent" />
              <div className="text-lg sm:text-xl lg:text-2xl text-slate-300 h-8">
                <Typewriter
                  options={{
                    strings: [
                      'Software Engineer',
                      'Full Stack Developer',
                      'AI/ML Enthusiast',
                      'Problem Solver'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Passionate Software Engineering undergraduate at LNBTI Japanese University. 
              Transforming ideas into elegant digital solutions through clean code and innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="group relative cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300" />
                <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center gap-2">
                  <span className="text-white font-semibold">View My Work</span>
                  <HiArrowDown className="text-white group-hover:translate-y-1 transition-transform" />
                </div>
              </Link>
              
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Profile Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="flex flex-col items-center">
              
              {/* Image Container with Ring */}
              <div className="relative mb-8">
                
                {/* Rotating Circle */}
                <div className="absolute -inset-5 flex items-center justify-center">
                  <div className="w-full h-full border border-blue-500/20 rounded-full animate-spin-slow" />
                </div>

                {/* Glowing Dots */}
                <div className="absolute -inset-5 flex items-center justify-center animate-spin-slow">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                  </div>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-purple-600/30 rounded-full blur-2xl" />
                
                {/* Profile Image */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1">
                  <img
                    src={profileImage}
                    alt="Chameera Chathuranga"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="w-full max-w-[280px]">
                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                  
                  {/* Title */}
                  <p className="text-slate-500 text-xs uppercase tracking-[0.2em] text-center mb-4">
                    Expertise
                  </p>
                  
                  {/* Tags Grid */}
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg text-blue-300 text-xs font-medium tracking-wide hover:border-blue-500/40 transition-colors cursor-default">
                      Full Stack
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-lg text-purple-300 text-xs font-medium tracking-wide hover:border-purple-500/40 transition-colors cursor-default">
                      AI/ML
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 rounded-lg text-cyan-300 text-xs font-medium tracking-wide hover:border-cyan-500/40 transition-colors cursor-default">
                      Software Eng.
                    </span>
                  </div>
                  
                  {/* Decorative Line */}
                  <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-white/5">
                    <span className="w-6 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                    <span className="text-slate-600 text-[10px] uppercase tracking-widest">LNBTI</span>
                    <span className="w-6 h-px bg-gradient-to-l from-transparent via-blue-500/50 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer group">
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate-600 text-xs uppercase tracking-wider group-hover:text-slate-400 transition-colors">
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-white/20 group-hover:border-white/40 rounded-full flex justify-center pt-2 transition-colors">
              <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
            </div>
          </div>
        </Link>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </Element>
  );
};

export default Home;