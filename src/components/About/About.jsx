import './About.css';
import profileImg from '../../assets/yash.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-header">
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="title-line"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image-container glass-panel">
            <div className="about-image-placeholder" style={{ backgroundImage: `url(${profileImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="image-overlay" style={{ background: 'linear-gradient(to bottom, transparent, rgba(4, 5, 8, 0.3))' }}></div>
            </div>
            <div className="experience-badge glass-panel">
              <span className="years">2+</span>
              <span className="text">Years of<br/>Experience</span>
            </div>
          </div>
          
          <div className="about-text-container">
            <h3 className="about-subtitle">Developing With Purpose</h3>
            <p className="about-description">
              I am a passionate software developer dedicated to crafting robust, scalable, and visually stunning digital solutions. With expertise spanning <span className="highlight">Laravel, React, Node, and Python</span>, I thrive on bridging the gap between elegant frontend interfaces and powerful backend architectures.
            </p>
            <p className="about-description">
              Currently, my journey is deeply focused on the intersection of web development and Artificial Intelligence. I am actively exploring <span className="highlight">Agentic AI and Vibe Coding</span>, pushing the boundaries of what autonomous systems can achieve when integrated with modern web frameworks.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card glass-panel">
                <span className="stat-number text-gradient">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-card glass-panel">
                <span className="stat-number text-gradient">Full</span>
                <span className="stat-label">Stack Expertise</span>
              </div>
              <div className="stat-card glass-panel">
                <span className="stat-number text-gradient">AI</span>
                <span className="stat-label">Integration Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
