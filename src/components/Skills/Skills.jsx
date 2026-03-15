import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'Laravel', level: 90, color: '#ff2d20' },
    { name: 'React', level: 85, color: '#61dafb' },
    { name: 'Node.js', level: 80, color: '#339933' },
    { name: 'Python', level: 75, color: '#3776ab' },
    { name: 'Yii2', level: 80, color: '#ff5722' },
    { name: 'CodeIgniter', level: 85, color: '#dd4814' },
    { name: 'WordPress', level: 90, color: '#21759b' },
  ];

  const futureSkills = [
    'Agentic AI', 'Vibe Coding', 'LLM Integration', 'Prompt Engineering', 'RAG Architectures'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="skills-container">
          <div className="skills-group glass-panel">
            <h3 className="group-title">Core Technologies</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ 
                        width: `${skill.level}%`, 
                        background: `linear-gradient(90deg, ${skill.color}50, ${skill.color})`,
                        boxShadow: `0 0 10px ${skill.color}80`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-group glass-panel ai-focus">
            <h3 className="group-title text-gradient">The AI Frontier</h3>
            <p className="ai-description">
              Actively exploring and implementing next-generation development paradigms.
            </p>
            <div className="ai-tags">
              {futureSkills.map((tag, index) => (
                <div key={index} className="ai-tag glass-panel">
                  <span className="tag-icon">⚡</span>
                  {tag}
                </div>
              ))}
            </div>
            
            <div className="vibe-coding-visual">
               <div className="wave"></div>
               <div className="wave"></div>
               <div className="wave"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
