import React from 'react';
import './certificates.css';
import { motion } from 'framer-motion';

const Certificates = () => {
    const certificates = [
        {
            id: 1,
            title: "Certificate Title 1",
            issuer: "Issuing Organization",
            date: "Month Year",
            description: "Brief description of what this certification covers",
            credentialId: "ABC123XYZ",
            link: "#" // Add your certificate link here
        },
        {
            id: 2,
            title: "Certificate Title 2",
            issuer: "Issuing Organization",
            date: "Month Year",
            description: "Brief description of what this certification covers",
            credentialId: "XYZ789ABC",
            link: "#" // Add your certificate link here
        }
    ];

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

                            <a 
                                href={cert.link} 
                                className="cert-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Certificate
                                <span className="arrow">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
