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
      category: "Frontend",
      icon: "🎨",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Flask", "Node.js", "Express.js", "PHP"]
    },
    {
      category: "Languages & Tools",
      icon: "🛠️",
      skills: ["C", "C++", "C#", "Java", "Python", "MySQL", "PostgreSQL", "Git"]
    },
    {
      category: "AI / ML",
      icon: "🤖",
      skills: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Deep Learning",
        "Reinforcement Learning",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Pandas & NumPy"
      ]
    }
  ];

  return (
    <Element name="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 py-20 px-4 md:px-8">
      <div ref={sectionRef} className="max-w-6xl mx-auto w-full">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 text-transparent bg-clip-text">
            Skills & Technologies
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillsData.map((category, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-slate-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-800/40 shadow-xl shadow-blue-900/30 hover:shadow-cyan-500/30 transition-all duration-500 hover:border-cyan-500/60 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-cyan-500/30">
                <div className="text-3xl md:text-4xl transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="group relative px-3 py-2 bg-gradient-to-br from-slate-800/70 to-blue-900/50 text-slate-200 rounded-lg border border-cyan-500/20 hover:border-cyan-400/70 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 text-xs md:text-sm font-medium hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/40 cursor-default"
                  >
                    <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skills;