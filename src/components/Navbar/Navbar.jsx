import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled glass-panel' : ''}`}>
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo">
          <span className="text-gradient">&lt;</span>
          DevPortfolio
          <span className="text-gradient">/&gt;</span>
        </a>

        <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active glass-panel' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <a 
                href={link.href} 
                className="nav-links"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a href="#contact" className="nav-cta glass-panel" onClick={() => setIsMobileMenuOpen(false)}>
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
