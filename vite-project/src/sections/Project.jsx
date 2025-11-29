import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import agroImage from '../assets/agros.png';
import laptopImage from '../assets/laptop.png';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const projects = [
    {
      id: 1,
      title: "Laptop Price Predictor",
      stack: "Python, Machine Learning",
      description:
        "A machine learning project that predicts laptop prices based on features like brand, specs, and condition.",
      image: laptopImage,
      github: "https://github.com/Chamii391/Laptop-price-Predictor",
    },
    {
      id: 2,
      title: "AgroConnect",
      stack: "MERN Stack",
      description:
        "Digital platform connecting farmers with buyers and government agencies for agricultural commerce.",
      image: agroImage,
      github: "https://github.com/SE02-SAD-Group-Project2025/AgroConnect",
    },
  ];

  return (
    <Element
      name="projects"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 py-20 px-4 md:px-8"
    >
      <div ref={sectionRef} className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gradient-to-br from-slate-900/60 to-blue-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-800/40 shadow-xl shadow-blue-900/30 hover:shadow-cyan-500/30 transition-all duration-500 hover:border-cyan-500/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-40 md:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Optional: very light overlay for subtle effect */}
                <div className="absolute inset-0 bg-black/5"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 mb-3 transition-colors duration-300">
                  {project.stack}
                </p>

                <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-5 transition-colors duration-300">
                  {project.description}
                </p>

                {/* View Project Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/30"
                >
                  <span>View Project</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
