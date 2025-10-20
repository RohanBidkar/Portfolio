import React from 'react';
import { motion } from 'framer-motion';
import Lightning from '../reactbits/Lightning';
import './Contact.css';

// Import social media icons
import LinkedInIcon from '../assets/socials/linkedIn.svg';
import InstagramIcon from '../assets/socials/instagram.svg';
import WhatsAppIcon from '../assets/socials/whatsApp.svg';
import GitHubIcon from '../assets/logos/github.svg';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/rohan-bidkar-558077287', // Replace with your LinkedIn URL
    gradient: 'linear-gradient(135deg, rgba(0, 119, 181, 0.3) 0%, rgba(0, 160, 220, 0.3) 100%)',
    color: 'rgba(0, 119, 181, 0.5)'
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    link: 'https://www.instagram.com/therohanbidkar?igsh=MWRqY3QwZjU0enh0eQ==', // Replace with your Instagram URL
    gradient: 'linear-gradient(135deg, rgba(131, 58, 180, 0.3) 0%, rgba(253, 29, 29, 0.3) 50%, rgba(252, 175, 69, 0.3) 100%)',
    color: 'rgba(228, 64, 95, 0.5)'
  },
  {
    name: 'WhatsApp',
    icon: WhatsAppIcon,
    link: 'https://wa.me/+918007780051', // Replace with your WhatsApp URL (https://wa.me/YOUR_PHONE_NUMBER)
    gradient: 'linear-gradient(135deg, rgba(37, 211, 102, 0.3) 0%, rgba(18, 140, 126, 0.3) 100%)',
    color: 'rgba(37, 211, 102, 0.5)'
  },
  {
    name: 'GitHub',
    icon: GitHubIcon,
    link: 'https://github.com/RohanBidkar', // Replace with your GitHub URL
    gradient: 'linear-gradient(135deg, rgba(110, 84, 148, 0.3) 0%, rgba(64, 120, 192, 0.3) 100%)',
    color: 'rgba(110, 84, 148, 0.5)'
  }
];

export default function Contact() {
  return (
    <div id="contact" className="contact-section">
      {/* Lightning Background */}
      <div className="contact-lightning-bg">
        <Lightning
          hue={260}
          xOffset={0}
          speed={-0.2}
          intensity={0.5}
          size={0.5}
        />
      </div>

      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="contact-title">Let's Connect! 🚀</h1>
        <p className="contact-subtitle">Find me on these platforms</p>
      </motion.div>

      <div className="contact-cards-container">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -5,
              scale: 1.02
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              '--card-gradient': social.gradient,
              '--card-color': social.color
            }}
          >
            <div className="contact-card-inner">
              <div className="contact-card-glow"></div>
              
              <motion.div 
                className="contact-icon-wrapper"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <img src={social.icon} alt={social.name} className="contact-icon" />
              </motion.div>

              <h3 className="contact-card-name">{social.name}</h3>

              <motion.div 
                className="contact-card-arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}


