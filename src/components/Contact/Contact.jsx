import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <div className="contact-container">
          <div className="contact-info glass-panel">
            <h3 className="contact-subtitle">Get In Touch</h3>
            <p className="contact-text">
              Whether you have a question, a project proposal, or just want to explore the possibilities of <span className="highlight">AI in Web Development</span>, my inbox is always open.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <a href="mailto:yogesh@example.com" className="detail-value text-gradient hover-underline">
                  yogesh@example.com
                </a>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">Global / Remote</span>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-btn glass-panel">GitHub</a>
              <a href="#" className="social-btn glass-panel">LinkedIn</a>
              <a href="#" className="social-btn glass-panel">X / Twitter</a>
            </div>
          </div>

          <form className="contact-form glass-panel" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" className="form-input" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-input" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" rows="5" className="form-input resize-none" placeholder="Tell me about your project..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <span className="btn-glow"></span>
            </button>
          </form>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Yogesh Gupta. Crafted with React & Vibe Coding.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
