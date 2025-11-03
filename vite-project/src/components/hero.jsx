import React from 'react';
import Spline from '@splinetool/react-spline';
import GooeyNav from '../reactbits/GooeyNav'
import './hero.css';
import './hero-responsive.css';
import ElectricBorder from '../reactbits/ElectricBorder.jsx';
import Logo from '../assets/logo.png.jpg';

export default function Hero() {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const items = isMobile 
        ? [
            { label: "Home", href: "#hero" },
            { label: "Stacks", href: "#stacks" },
            { label: "Projects", href: "#projects" },
            { label: "Certificates", href: "#certificates" },
          ]
        : [
            { label: "Home", href: "#hero" },
            { label: "Stacks", href: "#stacks" },
            { label: "Certificates", href: "#certificates" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
            { label: "Suggestion", href: "#suggestion" },
          ];

    const AnimatedText = ({ text }) => {
        const words = text.split(' ');
        return (
            <span>
                {words.map((word, index) => (
                    <span
                        key={index}
                        style={{
                            display: 'inline-block',
                            opacity: 0,
                            animation: `fadeInWord 0.5s ease-in-out ${index * 0.1}s forwards`,
                            marginRight: '0.3em'
                        }}
                    >
                        {word}
                    </span>
                ))}
            </span>
        );
    };

    return (
        <div id="hero" className="hero-wrapper">
            <div className='animated-orbs'>
                <div className='orb orb-1'></div>
                <div className='orb orb-2'></div>
                <div className='orb orb-3'></div>
            </div>
            <div className="container">
                <header className="hero-header">
                    <div className='logo-container'>
                        <img className='logo' src={Logo} alt="Logo" />
                    </div>
                    <nav className='navbar'>
                        {isMobile ? (
                            <div className='mobile-nav'>
                                {items.map((item, index) => (
                                    <a 
                                        key={index} 
                                        href={item.href} 
                                        className='mobile-nav-item'
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <GooeyNav
                                items={items}
                                particleCount={15}
                                particleDistances={[90, 10]}
                                particleR={100}
                                initialActiveIndex={0}
                                animationTime={600}
                                timeVariance={300}
                                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                            />
                        )}
                    </nav>
                </header>

                <div className='robot-container'>
                    <div className='robot'>
                        {/* <Spline scene="https://prod.spline.design/mMkJsqndhdePJxv5/scene.splinecode" /> */}
                        <Spline scene="https://prod.spline.design/vRBYHq5G1Hgg9HKS/scene.splinecode" />
                    </div>
                </div>

                <main className="hero-main">
                    <ElectricBorder
                        color="#552bb1ff"
                        speed={1}
                        chaos={0.5}
                        thickness={4}
                        style={{ borderRadius: 16 }}
                    >
                        <div className="content">
                            <div className="tag-box">
                                <div className="tag">Hi,Welcome to my Portfolio</div>
                            </div>
                            <h1>I am <br /> Rohan Bidkar</h1>
                            <h3>
                                <AnimatedText text="I'm a passionate web developer skilled in the MERN stack." />
                                <br />
                                <AnimatedText text="I love turning ideas into fast, user-friendly digital experiences." />
                                <br />
                                <AnimatedText text="Currently exploring React and DSA." />
                            </h3>
                        </div>
                    </ElectricBorder>
                </main>
            </div>
        </div>
    )
}
