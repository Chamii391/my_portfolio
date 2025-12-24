import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import agroImage from '../assets/agros.png';
import laptopImage from '../assets/laptop.png';
import catDogImage from '../assets/clasifire.png';
import churnImage from '../assets/churm.png';
import cardioImage from '../assets/heart.png';
import stockImage from '../assets/stock.png';
import mindEmotionImage from '../assets/emotion.png';
import agroMindImage from '../assets/agroai.png';
import shoeMartImage from '../assets/shoe.png';

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
      title: "MindEmotion",
      tags: [
        "TensorFlow",
        "Transformers",
        "Groq LLM",
        "Flask",
        "React",
        "Generative AI"
      ],
      description:
        "AI-powered mental health support system featuring emotion analysis, a supportive chatbot, coping strategy generation, and calming image generation using deep learning and generative AI.",
      image: mindEmotionImage,
      github: "https://github.com/Chamii391/Mind_Imotion"
    }
    ,
      {
      id: 2,
      title: "AgroMind",
      tags: [
        "Scikit-learn",
        "XGBoost",
        "TensorFlow / Keras (CNN)",
        "Flask",
        "React",
        "Tailwind CSS",
        "Generative AI (Agri Chatbot)"
      ],
      description:
        "AI-powered smart agriculture platform providing crop suitability prediction, plant disease detection from leaf images, crop yield prediction, smart irrigation recommendations using real-time weather data, and an agriculture-focused AI chatbot for reliable farming guidance.",
      image: agroMindImage,
      github: "https://github.com/Chamii391/AgroMind-AI"
}
,

      {
        id: 3,
        title: "ShoeMart",
        tags: [
          "React",
          "Node.js",
          "Express.js",
          "Flask (AI Microservice)",
          "SQL Server",
          "JWT Authentication",
          "AI Chatbot",
          "Generative AI (Product Content)"
        ],
        description:
          "Smart shoe retail management system supporting online and in-store sales with real-time inventory synchronization. Includes WhatsApp-based ordering, delivery tracking, admin dashboards, and POS system integration. Features a Flask-based AI service for chatbot support and automatic product name and description generation to enhance product management.",
        image: shoeMartImage,
        github: "https://github.com/Chamii391/ShoeMart-Web"
      }
,

    
    {
      id: 4,
      title: "AgroConnect",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      description: "Digital platform connecting farmers with buyers and government agencies for agricultural commerce.",
      image: agroImage,
      github: "https://github.com/SE02-SAD-Group-Project2025/AgroConnect"
    },
    {
      id: 5,
      title: "Laptop Price Predictor",
      tags: ["Python", "Machine Learning", "Scikit-learn"],
      description: "A machine learning project that predicts laptop prices based on features like brand, specs, and condition.",
      image: laptopImage,
      github: "https://github.com/Chamii391/Laptop-price-Predictor"
    },
    {
      id: 6,
      title: "Cat vs Dog Classifier",
      tags: ["TensorFlow", "CNN", "Streamlit"],
      description: "Deep learning CNN model that classifies images as cats or dogs with a Streamlit web app.",
      image: catDogImage,
      github: "https://github.com/Chamii391/catdog-classifier-app"
    },
    {
      id: 7,
      title: "Customer Churn Prediction",
      tags: ["TensorFlow", "Keras", "Streamlit"],
      description: "Deep learning model that predicts whether a customer is likely to churn, deployed as Streamlit app.",
      image: churnImage,
      github: "https://github.com/Chamii391/customer-churn-prediction"
    },
    {
      id: 8,
      title: "Heart Disease Prediction",
      tags: ["TensorFlow", "Flask", "API"],
      description: "Deep learning-based API that predicts heart disease risk using the Cardio dataset.",
      image: cardioImage,
      github: "https://github.com/Chamii391/heart-disease-prediction-api"
    },
    {
      id: 9,
      title: "Stock Market Prediction",
      tags: ["RNN", "LSTM", "TensorFlow"],
      description: "Deep learning model using RNN/LSTM to forecast stock prices from historical market data.",
      image: stockImage,
      github: "https://github.com/Chamii391/Stockmarket_prediction"
    }
  ];

  return (
    <Element name="projects" className="min-h-screen bg-[#0a0a0f] relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6">
      
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
      <div ref={sectionRef} className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider">My Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500" />
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-blue-500" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative h-full">
                
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-2">
                  
                  {/* Image Container */}
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
                    
                    {/* Hover Overlay with Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#0a0a0f]/70 backdrop-blur-sm">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 hover:bg-blue-600 border border-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 hover:bg-blue-600 border border-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-5 sm:p-6">
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] sm:text-xs text-slate-400 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 rounded-xl text-sm font-medium text-slate-300 hover:text-white text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>View Project</span>
                      <FiExternalLink className="group-hover/btn:translate-x-1 transition-transform duration-300" size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
          <a
            href="https://github.com/Chamii391"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 group"
          >
            <FiGithub size={18} />
            <span>View More on GitHub</span>
            <FiExternalLink className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Projects;