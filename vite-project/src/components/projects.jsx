import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './projects.css';

const ProjectCard = ({ project, index }) => {
  const [activeProject, setActiveProject] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      onHoverStart={() => setActiveProject(true)}
      onHoverEnd={() => setActiveProject(false)}
    >
      <div className="project-card-inner" style={{ background: project.gradient }}>
        <div className="project-content">
          <motion.div 
            className="project-number"
            animate={{ 
              scale: activeProject ? 1.2 : 1,
              rotate: activeProject ? 10 : 0
            }}
          >
            {String(project.id).padStart(2, '0')}
          </motion.div>

          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>

          <div className="project-tech">
            {project.tech.map((tech, i) => (
              <motion.span 
                key={i} 
                className="tech-tag"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="project-images">
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                className="project-image-wrapper"
                initial={{ opacity: 0, x: -50, rotateY: -90 }}
                animate={isInView ? { 
                  opacity: 1, 
                  x: 0, 
                  rotateY: 0 
                } : { 
                  opacity: 0, 
                  x: -50, 
                  rotateY: -90 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + (i * 0.15),
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: i === 1 ? 0 : (i === 0 ? -5 : 5),
                  zIndex: 10
                }}
                style={{ zIndex: 3 - i }}
                onClick={() => setSelectedImage(img)}
              >
                <div 
                  className="project-image"
                  style={{ 
                    backgroundImage: `url(${img})`
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <motion.div
              className="image-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="image-modal-content"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
                <img src={selectedImage} alt="Project view" />
              </motion.div>
            </motion.div>
          )}

          <motion.a
            href={project.link}
            className="project-button"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Project</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        <div className="project-glow"></div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    
    
    {
      id: 1,
      title: "Zerodha Clone Web App",
      description: "Next Gen Trading Platform inspired by Zerodha -Experience lightning-fast order execution, intuitive charting tools, and a clean, clutter-free interface.",
      tech: ["MongoDB", "Cors", "Express", "React", "Passport","React-Router"],
      images: [
        new URL('../assets/projects/zerodha1.png', import.meta.url).href,
        new URL('../assets/projects/zerodha2.png', import.meta.url).href,
        new URL('../assets/projects/zerodha3.png', import.meta.url).href,
        new URL('../assets/projects/zerodha4.png', import.meta.url).href
      ],
      link: "https://zerodha-1-b2nt.onrender.com/",
      gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)"
    },
    {
      id: 2,
      title: "Instatalk - Real time chat app ",
      description: "I have built InstaTalk — a full‑stack real‑time chat app offering both P2P and room for chatting based on React + Vite, Node/Express, Socket.io for WebSocket, MongoDB/Mongoose for persistent storage, and JWT/bcrypt for auth. Production-ready build and deployment automated via Render , ideal demo of real-time systems and secure API design.",
      tech: ["Socket.io", "MongoDB", "Cors", "Express", "React", ],
      images: [
        new URL('../assets/projects/instatalk1.png', import.meta.url).href,
        new URL('../assets/projects/instatalk2.png', import.meta.url).href,
        new URL('../assets/projects/instatalk3.png', import.meta.url).href
      ],
      link: "https://zerodha-1-b2nt.onrender.com/",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)"
    },
    {
      id: 3,
      title: "Ecommerce Site",
      description: "A fast, responsive, and user-friendly shopping platform powered by React. Enjoy dynamic product listings, seamless navigation, mobile-optimized design, secure checkout, and a scalable architecture — all crafted to deliver a smooth and engaging online shopping experience.",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      images: [
        new URL('../assets/projects/ecom1.png', import.meta.url).href,
        new URL('../assets/projects/ecom2.png', import.meta.url).href,
        new URL('../assets/projects/ecom3.png', import.meta.url).href,
        new URL('../assets/projects/ecom4.png', import.meta.url).href
      ],
      link: "https://shopease-ecommerce-mof2.onrender.com/",
      gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)"
    },
    {
      id: 4,
      title: " Google Gemini ChatBot",
      description: "A clean and responsive AI chatbot web app built with React that connects to the Google Gemini API to provide intelligent, real-time answers to your questions",
      tech: ["Vite", "React", "Geamini API"],
      images: [
        new URL('../assets/projects/gemini1.png', import.meta.url).href,
        new URL('../assets/projects/gemini2.png', import.meta.url).href,
        new URL('../assets/projects/gemini3.png', import.meta.url).href
      ],
      link: "https://gemini-clone-1-jzou.onrender.com/",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <div className="projects-bg-orbs">
        <div className="projects-orb projects-orb-1"></div>
        <div className="projects-orb projects-orb-2"></div>
        <div className="projects-orb projects-orb-3"></div>
      </div>

      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="projects-title">Featured Projects</h1>
        <p className="projects-subtitle">Showcasing my best work in web development</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;