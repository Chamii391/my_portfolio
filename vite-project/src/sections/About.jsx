import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';

const About = () => {
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

  const expertise = [
    {
      icon: '🤖',
      gradient: 'from-blue-500 to-cyan-500',
      title: 'AI/ML Engineering',
      description: 'Developing intelligent systems and predictive models'
    },
    {
      icon: '💻',
      gradient: 'from-purple-500 to-pink-500',
      title: 'Software Engineering',
      description: 'Building robust and scalable architectures'
    },
    {
      icon: '🚀',
      gradient: 'from-cyan-500 to-blue-500',
      title: 'Full Stack Development',
      description: 'Creating end-to-end web applications'
    }
  ];

  const journey = [
    {
      label: 'Foundation',
      tech: 'Python, Data Analysis',
      description: 'Started with Python programming, data preprocessing, and exploratory data analysis.'
    },
    {
      label: 'Machine Learning',
      tech: 'Scikit-learn, Pandas',
      description: 'Implemented supervised and unsupervised learning algorithms including regression and classification.'
    },
    {
      label: 'Deep Learning',
      tech: 'TensorFlow, Keras',
      description: 'Built neural networks, CNNs, and RNNs for complex problem-solving.'
    },
    {
      label: 'Generative AI',
      tech: 'LLMs, Diffusion Models',
      description: 'Exploring cutting-edge generative models, prompt engineering, and large language model applications.',
      highlight: true
    }
  ];

  return (
    <Element name="about" className="min-h-screen bg-[#0a0a0f] relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
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
            <span className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider">Get to know me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500" />
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-blue-500" />
          </div>
        </div>

        {/* Introduction Card */}
        <div 
          className={`mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-5">
                I am an undergraduate software engineer at{' '}
                <span className="text-blue-400 font-semibold">LNBTI Japanese University</span>, 
                dedicated to developing innovative technological solutions that address real-world challenges.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                My expertise spans <span className="text-blue-400 font-semibold">AI/ML</span>, {' '}
                <span className="text-purple-400 font-semibold">Software Engineering</span>, and {' '}
                <span className="text-cyan-400 font-semibold">Full-Stack Development</span>. 
                I am committed to continuous learning and leveraging cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>

        {/* AI/ML Journey Card */}
        <div 
          className={`mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
              
              {/* Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    AI/ML Journey
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">From basics to Generative AI</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed mb-8">
                My journey in Artificial Intelligence and Machine Learning began with understanding how machines 
                learn from data and make intelligent decisions autonomously.
              </p>

              {/* Timeline */}
              <div className="space-y-6">
                {journey.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex gap-4">
                      
                      {/* Timeline Line */}
                      <div className="flex flex-col items-center pt-1">
                        <div className={`w-3 h-3 rounded-full ${step.highlight ? 'bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse' : 'bg-blue-500'}`} />
                        {index !== journey.length - 1 && (
                          <div className="w-px h-full bg-gradient-to-b from-blue-500/50 to-transparent mt-2" />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h4 className={`font-semibold ${step.highlight ? 'text-yellow-400 text-base sm:text-lg' : 'text-blue-400 text-sm sm:text-base'}`}>
                            {step.label}
                          </h4>
                          {step.highlight && (
                            <span className="px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <p className="text-slate-600 text-xs sm:text-sm mb-2">{step.tech}</p>
                        
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Highlight Box for Generative AI */}
                        {step.highlight && (
                          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 rounded-xl">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">✨</span>
                              <div>
                                <h5 className="text-white font-semibold text-sm sm:text-base mb-1">
                                  Focus Areas
                                </h5>
                                <ul className="space-y-1 text-xs sm:text-sm text-slate-400">
                                  <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-yellow-500 rounded-full" />
                                    Large Language Models (LLMs)
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-yellow-500 rounded-full" />
                                    Prompt Engineering & Fine-tuning
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-yellow-500 rounded-full" />
                                    AI-Powered Applications
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          style={{ transitionDelay: '0.6s' }}
        >
          {/* Title */}
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Areas of Expertise
            </h3>
            <p className="text-slate-500 text-sm sm:text-base">What I bring to the table</p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                {/* Animated Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 group-hover:border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-500 h-full group-hover:-translate-y-2">
                  
                  {/* Icon with Gradient Background */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <span className="text-3xl sm:text-4xl">{item.icon}</span>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`mt-4 pt-4 border-t border-white/5`}>
                    <div className={`w-12 h-1 bg-gradient-to-r ${item.gradient} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;