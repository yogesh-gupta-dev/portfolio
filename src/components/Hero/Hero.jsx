import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      
      heroRef.current.style.setProperty('--mouseX', `${x}deg`);
      heroRef.current.style.setProperty('--mouseY', `${-y}deg`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-content container">
        <div className="hero-text">
          <h2 className="greeting">Hello World, I'm</h2>
          <h1 className="name">Yogesh <span className="text-gradient">Gupta</span></h1>
          
          <div className="role-container">
            <span className="role-text">Software Developer | 2+ Years Exp.</span>
          </div>

          <p className="description">
            Specializing in <span className="highlight">Laravel</span>, <span className="highlight">React</span>, <span className="highlight">Python</span>, and Node.js. 
            Currently diving deep into <span className="highlight">Agentic AI & Vibe Coding</span> to build the future of intelligent applications.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary glass-panel">View My Work</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-visuals">
          <div className="tech-stack-sphere">
            {/* We'll simulate a 3D float effect with CSS */}
            <div className="tech-icon laravel">Laravel</div>
            <div className="tech-icon react">React</div>
            <div className="tech-icon python">Python</div>
            <div className="tech-icon ai">Agentic AI</div>
            <div className="tech-icon node">Node</div>
            <div className="center-glow"></div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span><span></span><span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
