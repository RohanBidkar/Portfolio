import LaserFlow from '../reactbits/LaserFlow.jsx';
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// NOTE: You can also adjust the variables in the shader for super detailed customization



// Image Example Interactive Reveal Effect
export default function LaserFlowBoxExample() {
  const revealImgRef = useRef(null);
  const [suggestion, setSuggestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
//     <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
//   <LaserFlow 
  
//   horizontalSizing = {5}
//   verticalSizing = {10}
//   decay = {3.0}
//   falloffStart = {0.5}
//   color="#8b5cf6"
//   />
// </div>
    <div
      id="suggestion"
      style={{ 
        height: '800px', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#000000'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#8b5cf6"
        verticalSizing={isMobile ? 10 : 0.8}
        wispIntensity={10}
        fogIntensity={0}
      />
      
      <motion.div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: isMobile ? 'translate(-50%, -50%)' : 'translateX(-50%)',
          width: isMobile ? '90%' : '86%',
          height: isMobile ? 'auto' : '45%',
          maxWidth: isMobile ? '400px' : 'none',
          backgroundColor: '#060010',
          borderRadius: '20px',
          border: '2px solid #8b5cf6',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: isMobile ? '30px 20px' : '40px',
          zIndex: 6,
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.05)'
        }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.05)',
            '0 0 30px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(139, 92, 246, 0.1)',
            '0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.05)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.h2
          style={{
            fontSize: '2rem',
            marginBottom: '30px',
            background: 'linear-gradient(135deg, #a855f7 0%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 900,
            textAlign: 'center'
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Give Your Valueable Suggestion 
        </motion.h2>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              action="https://formsubmit.co/rohanbidkar2005@gmail.com"
              method="POST"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}
              onSubmit={(e) => {
                // Create particles before form submits
                const newParticles = Array.from({ length: 30 }, (_, i) => ({
                  id: i,
                  x: Math.random() * 100,
                  y: Math.random() * 100,
                  scale: Math.random() * 1.5 + 0.5,
                  delay: Math.random() * 0.5
                }));
                setParticles(newParticles);
                setSubmitted(true);
              }}
            >
              <motion.input
                type="text"
                name="suggestion"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="Your Suggestion..."
                required
                style={{
                  width: '100%',
                  padding: '20px',
                  fontSize: '1.2rem',
                  borderRadius: '15px',
                  border: '2px solid #8b5cf6',
                  backgroundColor: 'rgba(139, 92, 246, 0.1)',
                  color: 'white',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                whileFocus={{
                  scale: 1.02,
                  borderColor: '#ec4899',
                  boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)'
                }}
              />
              
              <input type="hidden" name="_subject" value="New Suggestion from Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <motion.button
                type="submit"
                style={{
                  padding: '18px 40px',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  border: '2px solid #8b5cf6',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                  color: 'white',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139, 92, 246, 0.8)' }}
                whileTap={{ scale: 0.95 }}
              >
                
                Submit 
                
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ fontSize: '5rem' }}
              >
                🎉
              </motion.div>
              <motion.h3
                style={{
                  fontSize: '2rem',
                  color: '#ec4899',
                  textAlign: 'center'
                }}
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                Suggestion Submitted!
              </motion.h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
                Thanks for your suggestion!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Particle explosion effect */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: `hsl(${Math.random() * 360}, 100%, 70%)`
            }}
            animate={{
              x: (particle.x - 50) * 10,
              y: (particle.y - 50) * 10,
              scale: [particle.scale, 0],
              opacity: [1, 0]
            }}
            transition={{
              duration: 1.5,
              delay: particle.delay,
              ease: 'easeOut'
            }}
          />
        ))}
      </motion.div>

      <img
        ref={revealImgRef}
        src="/path/to/image.jpg"
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-50%',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.3,
          pointerEvents: 'none',
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        }}
      />
    </div>
  );
}