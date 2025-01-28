import React from 'react';
import gitlabImg from './assets/gitlab.png'
import githubImg from './assets/github.png'
import linkedinImg from './assets/linkedin.png'
import envelopeImg from './assets/mail.png'
const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:christinachiappini@gmail.com';
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.iconsContainer}>
        {/* Envelope Image for Email */}
        <img
          src={envelopeImg}
          alt="Email Icon"
          onClick={handleEmailClick}
          style={styles.icon}
        />

        {/* LinkedIn Image */}
        <a href="https://www.linkedin.com/in/christina-chiappini-5598a2299/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer">
          <img src={linkedinImg} alt="LinkedIn" style={styles.icon} />
        </a>

        {/* GitHub Image */}
        <a href="https://github.com/Cripsy-Chicken" target="_blank" rel="noopener noreferrer">
          <img src={githubImg} alt="GitHub" style={styles.icon} />
        </a>

        {/* GitLab Image */}
        <a href="https://gitlab.com/christina_chiappini" target="_blank" rel="noopener noreferrer">
          <img src={gitlabImg} alt="GitLab" style={styles.icon} />
        </a>
      </div>

      <p style={styles.footerText}>
        Yes, I did also create thsi site :)<br />
        2025 Christina R. Chiappini
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '2000px',  // Set max width for the footer
    width: '100%',  // Ensure it takes full width within maxWidth
    margin: '0 auto',  // Center the footer horizontally
  },
  iconsContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '10px',
  },
  icon: {
    width: '100px',
    height: '100px',
    cursor: 'pointer',
    padding: '20px'
  },
  footerText: {
    fontSize: '14px',
    marginTop: '10px',
  },
};

export default Footer;
