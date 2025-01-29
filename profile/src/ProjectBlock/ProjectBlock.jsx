import { useEffect, useRef, useState } from 'react';
import './ProjectBlock.css';

const ProjectBlock = ({ title, summary, techIcons, videoFile, imageFile }) => {
  const blockRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // If the entry is in the viewport, set the visibility to true
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // If the entry is not in the viewport, set visibility back to false
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the block is visible
      }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={blockRef}
      style={{
        ...styles.container,
        opacity: isVisible ? 1 : 0, // Fade-in effect
        transition: 'opacity 1s ease-in-out', // Smooth transition for fade-in
      }}
    >
      <div style={styles.textContainer}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.techIcons}>{techIcons}</p>
        <p style={styles.summary}>{summary}</p>
      </div>

      {videoFile && (
        <div style={styles.mediaContainer}>
          <video
            controls
            autoPlay
            loop
            muted
            style={styles.media}
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {imageFile && !videoFile && (
        <div style={styles.mediaContainer}>
          <img
            src={imageFile}
            alt="Project Image"
            style={styles.media}
          />
        </div>
      )}
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Arrange everything in a column
    background: "#3c220f",  // Slightly lighter background
    borderRadius: '45px',
    padding: '20px',
    margin: '0px',  // Space between projects
    width: '1200px'
  },
  textContainer: {
    marginBottom: '20px',  // Add space between text and media
  },
  title: {
    fontSize: '3rem',
    color: '#f5f5dc',
    fontWeight: '700',
    marginBottom: '10px',
  },
  summary: {
    fontSize: '1.4rem',
    color: '#f5f5dc',
    marginBottom: '20px',
    marginLeft: '20px',
    marginRight: '20px'
  },
  techIconsContainer: {
    display: 'flex',
    gap: '10px', // Space between icons
    flexWrap: 'wrap', // Allow icons to wrap to the next line if necessary
  },
  techIcons: {
    fontSize: '1.5rem',
    color: '#c3a184'
  },
  icon: {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
  },
  mediaContainer: {
    display: 'flex',
    justifyContent: 'center',  // Center horizontally
    alignItems: 'center',      // Center vertically (if you want the video centered within a specific height)
    margin: '20px',
    height: 'auto',  // Ensure the container height adjusts based on the content
  },
  media: {
    width: '100%',  // Makes the video responsive
    maxWidth: '800px', // Sets a max width for larger screens
    objectFit: 'cover',  // Ensures the video maintains aspect ratio
    borderRadius: '10px', // Optional: border radius for aesthetics
  },
};

export default ProjectBlock;
