import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'React', 'Laravel', 'AI', 'Python'];

  const projectsData = [
    {
      id: 1,
      title: 'Agentic Workflow Manager',
      category: 'AI',
      techStack: ['React', 'Python', 'LLMs'],
      description: 'An AI-powered dashboard for orchestrating autonomous agents in complex workflows, featuring real-time state visualization and prompt iterative tuning.',
      image: 'gradient-bg-1', // Placeholder class for background
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'Laravel',
      techStack: ['Laravel', 'Vue.js', 'MySQL'],
      description: 'A scalable e-commerce backend built with Laravel featuring dynamic pricing, inventory management, and a seamless REST API for frontends.',
      image: 'gradient-bg-2',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      category: 'React',
      techStack: ['React', 'Node.js', 'WebSockets'],
      description: 'Interactive data visualization dashboard processing high-frequency events via WebSockets, utilizing robust charting libraries.',
      image: 'gradient-bg-3',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Creative Agency CMS',
      category: 'Laravel',
      techStack: ['Yii2', 'PHP', 'Tailwind'],
      description: 'Custom headless CMS crafted for creative agencies to manage portfolios dynamically, focusing on high performance and SEO.',
      image: 'gradient-bg-4',
      link: '#',
      github: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter || project.techStack.includes(activeFilter));

  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`project-card-${index}`);
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="projects-filter">
          {filterTabs.map((tab) => (
            <button 
              key={tab} 
              className={`filter-btn ${activeFilter === tab ? 'active glass-panel' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              id={`project-card-${index}`}
              className="project-card glass-panel"
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <div className="card-border"></div>
              
              <div className={`project-image-container ${project.image}`}>
                <div className="project-overlay">
                  <div className="project-links">
                     <a href={project.github} className="icon-link">{'</>'}</a>
                     <a href={project.link} className="icon-link">{'↗'}</a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="project-tech-item">{tech}</span>
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

export default Projects;
