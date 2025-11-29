import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';

const Skills = () => {
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

  const skillsData = [
    {
      category: "Frontend Development",
      icon: "🎨",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      gradient: "from-purple-500 to-pink-500",
      skills: ["Node.js", "Express.js", "Flask", "PHP", "Laravel"]
    },
    {
      category: "Programming Languages",
      icon: "💻",
      gradient: "from-orange-500 to-red-500",
      skills: ["Python", "Java", "C", "C++", "C#", "SQL"]
    },
    {
      category: "AI / Machine Learning",
      icon: "🤖",
      gradient: "from-cyan-500 to-blue-500",
      skills: ["Supervised Learning", "Unsupervised Learning", "ANN", "CNN", "RNN", "TensorFlow"]
    }
  ];

  return (
    <Element name="skills" className="min-h-screen bg-[#0a0a0f] relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
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
      <div ref={sectionRef} className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider">Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500" />
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-blue-500" />
          </div>
        </div>

        {/* Skills Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="group relative h-full">
                
                {/* Subtle Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 h-full transition-all duration-500 group-hover:border-white/20">
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 pb-5 border-b border-white/10">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-2xl sm:text-3xl">{category.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {category.category}
                      </h3>
                      <p className="text-xs text-slate-500">{category.skills.length} technologies</p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/skill"
                      >
                        <div className="px-3 py-2.5 bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-lg text-center transition-all duration-300 hover:bg-white/[0.05] hover:scale-105 cursor-default">
                          <span className="text-xs sm:text-sm font-medium text-slate-400 group-hover/skill:text-white transition-colors duration-300">
                            {skill}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skills;