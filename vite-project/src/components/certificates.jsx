import React, { useState } from 'react';
import './certificates.css';
import { motion, AnimatePresence } from 'framer-motion';
import devlopmentCert from '../assets/socials/devlopment.jpg';
import dsaCert from '../assets/socials/dsa.jpg';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            id: 1,
            title: " Delta (Full Stack Web Development)",
            issuer: "Apna Collage",
            date: "OCT 2025",
            description: "Complete MERN Stack Frontend & React , Backend & Database",
            credentialId: "68ded18f1582459f1b02d686",
            image: devlopmentCert
        },
        {
            id: 2,
            title: " Alpha (DSA with Java).",
            issuer: "Apna Collage",
            date: "OCT 2025",
            description: " Arrays,Stacks,Trees,DP,Graphs etc.",
            credentialId: "68e8005e10614ff1a407d256",
            image: dsaCert
        }
    ];

    const openModal = (cert) => {
        console.log('Opening modal for:', cert.title);
        setSelectedCert(cert);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        console.log('Closing modal');
        setSelectedCert(null);
        document.body.style.overflow = 'unset'; // Restore scrolling
    };

    return (
        <div className="certificates-wrapper" id="certificates">
            {/* Animated Background */}
            <div className="cert-background">
                <div className="floating-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`
                        }}></div>
                    ))}
                </div>
                <div className="gradient-orbs">
                    <div className="cert-orb cert-orb-1"></div>
                    <div className="cert-orb cert-orb-2"></div>
                    <div className="cert-orb cert-orb-3"></div>
                </div>
            </div>
            
            <div className="certificates-container">
                <motion.h2 
                    className="certificates-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Certifications
                </motion.h2>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            className="certificate-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="cert-header">
                                <div className="cert-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 15L8 19L9.5 14L5 11H10L12 6L14 11H19L14.5 14L16 19L12 15Z" 
                                              fill="url(#grad)" />
                                        <circle cx="12" cy="12" r="10" stroke="url(#grad)" strokeWidth="1.5"/>
                                        <defs>
                                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#8b5cf6" />
                                                <stop offset="100%" stopColor="#ffffff" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="cert-info">
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                </div>
                            </div>

                            <div className="cert-details">
                                <p className="cert-date">{cert.date}</p>
                                <p className="cert-description">{cert.description}</p>
                                <p className="cert-id">Credential ID: {cert.credentialId}</p>
                            </div>

                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    openModal(cert);
                                }}
                                className="cert-link"
                                type="button"
                                style={{ position: 'relative', zIndex: 10 }}
                            >
                                View Certificate
                                <span className="arrow">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div 
                        className="cert-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div 
                            className="cert-modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="cert-modal-close" onClick={closeModal}>
                                ✕
                            </button>
                            <img 
                                src={selectedCert.image} 
                                alt={selectedCert.title}
                                className="cert-modal-image"
                            />
                            <div className="cert-modal-info">
                                <h3>{selectedCert.title}</h3>
                                <p>{selectedCert.issuer}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Certificates;
