import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Software Developer',
      company: 'Codefire Technologies',
      period: 'May 2025 - Present',
      description: 'Developing robust software solutions and leveraging modern development practices to deliver high-quality applications.',
      techStack: ['React', 'Laravel', 'Python', 'Node.js'],
    },
    {
      id: 2,
      role: 'PHP Developer',
      company: 'Tech2Globe Web Solutions',
      period: 'Jan 2024 - April 2025',
      description: 'Worked as a full-time PHP developer building and maintaining backend architectures, RESTful APIs, and implementing complex business logic.',
      techStack: ['PHP', 'Laravel', 'Yii2', 'CodeIgniter', 'MySQL'],
    },
    {
      id: 3,
      role: 'Web Developer Intern',
      company: 'Tech2Globe Web Solutions',
      period: 'July 2023 - Dec 2023',
      description: 'Six-month internship gaining foundational experience in web development, assisting with frontend and backend tasks, and learning software lifecycle processes.',
      techStack: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress'],
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-header">
          <h2 className="section-title">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <span className="timeline-period text-gradient">{exp.period}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tech">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
