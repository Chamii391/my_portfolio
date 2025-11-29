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

  return (
    <Element name="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 py-20 px-4 md:px-8">
      <div ref={sectionRef} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
      
        <div className="space-y-8">
          {/* Introduction */}
          <div className={`bg-gradient-to-r from-slate-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-blue-800/30 shadow-xl shadow-blue-900/20 hover:shadow-cyan-500/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-5">
              I am an undergraduate software engineer at <span className="text-cyan-400 font-semibold">LNBTI Japanese University</span>, dedicated to developing innovative technological solutions that address real-world challenges through code.
            </p>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              My expertise spans across software development, artificial intelligence, and full-stack engineering. I am committed to continuous learning and leveraging cutting-edge technologies to build impactful applications.
            </p>
          </div>

          {/* AI/ML Journey */}
          <div className={`bg-gradient-to-r from-slate-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-blue-800/30 shadow-xl shadow-blue-900/20 hover:shadow-cyan-500/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl transform hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">AI/ML Journey</h3>
            </div>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
              My journey in <span className="text-cyan-400 font-semibold">Artificial Intelligence</span> and <span className="text-cyan-400 font-semibold">Machine Learning</span> began with a profound interest in understanding how machines can learn from data and make intelligent decisions autonomously.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-cyan-400">▹</div>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  <span className="text-cyan-400 font-medium">Foundation:</span> Started with <span className="text-blue-400 font-medium">Python programming</span>, data preprocessing, and exploratory data analysis to understand the fundamentals of working with datasets.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-cyan-400">▹</div>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  <span className="text-cyan-400 font-medium">Machine Learning:</span> Progressed to implementing <span className="text-blue-400 font-medium">supervised and unsupervised learning algorithms</span>, including regression, classification, and clustering models using Scikit-learn.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-cyan-400">▹</div>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  <span className="text-cyan-400 font-medium">Deep Learning:</span> Advanced to building <span className="text-blue-400 font-medium">neural networks</span> with TensorFlow and Keras, experimenting with CNNs, RNNs, and various architectures for complex problem-solving.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-cyan-400">▹</div>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  <span className="text-cyan-400 font-medium">Current Focus:</span> Developing end-to-end AI solutions, optimizing model performance, and exploring emerging technologies to establish myself as a proficient <span className="text-cyan-400 font-semibold">AI/ML Engineer</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className={`bg-gradient-to-r from-slate-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-blue-800/30 shadow-xl shadow-blue-900/20 hover:shadow-cyan-500/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.6s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Areas of Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* AI/ML Engineering */}
              <div className="group bg-gradient-to-br from-slate-800/60 to-blue-900/40 rounded-xl p-6 md:p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 cursor-default">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">🤖</div>
                <h4 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors duration-300">AI/ML Engineering</h4>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">Developing intelligent systems, predictive models, and data-driven solutions</p>
              </div>

              {/* Software Engineering */}
              <div className="group bg-gradient-to-br from-slate-800/60 to-blue-900/40 rounded-xl p-6 md:p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 cursor-default">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">💻</div>
                <h4 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors duration-300">Software Engineering</h4>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">Building robust, scalable, and maintainable software architectures</p>
              </div>

              {/* Full Stack Development */}
              <div className="group bg-gradient-to-br from-slate-800/60 to-blue-900/40 rounded-xl p-6 md:p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 cursor-default">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">🚀</div>
                <h4 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors duration-300">Full Stack Development</h4>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">Creating comprehensive end-to-end web and mobile applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;