import React from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import profileImage from '../assets/propic.jpg';

const Home = () => {
  return (
    <Element name="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 pt-20 px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="relative group animate-fade-in">
          <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur opacity-30"></div>
          <img 
            src={profileImage} 
            alt="Chameera Chathuranga" 
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400/80 shadow-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-2xl space-y-6">
          <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-3">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 text-transparent bg-clip-text">
                Chameera Chathuranga
              </span>
            </h1>
            <div className="h-1 w-32 md:w-40 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto md:mx-0 rounded-full"></div>
          </div>
          
          <div className="text-2xl md:text-3xl font-medium text-slate-200 h-20 md:h-24 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <Typewriter
              options={{ 
                strings: [
                  'Undergraduate Software Engineer',
                  'AI & Machine Learning Enthusiast',
                  'Full Stack Developer',
                  'Problem Solver & Innovator'
                ], 
                autoStart: true, 
                loop: true,
                delay: 80,
                deleteSpeed: 50
              }}
            />
          </div>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            Dedicated software engineering student at LNBTI Japanese University, specializing in AI/ML technologies and full-stack development. Passionate about creating innovative solutions that make a meaningful impact.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-medium">
              Software Engineering
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 text-sm font-medium">
              AI/ML
            </span>
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-medium">
              Full Stack
            </span>
          </div>

          {/* Explore Projects Button */}
          <div className="pt-6 animate-slide-in-right" style={{ animationDelay: '1s' }}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 cursor-pointer"
            >
              <span>Explore My Projects</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-in-right {
          opacity: 0;
          animation: slideInRight 0.6s ease-out forwards;
        }
      `}</style>
    </Element>
  );
};

export default Home;