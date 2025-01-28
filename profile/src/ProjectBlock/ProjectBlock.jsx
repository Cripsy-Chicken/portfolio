import React from 'react';

const ProjectBlock = ({ title, summary, techIcons, videoFile, imageFile }) => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.techIcons}>{techIcons}</p>
        <p style={styles.summary}>{summary}</p>
      </div>

      {/* Local video file */}
      {videoFile && (
        <div style={styles.mediaContainer}>
          <video
            controls
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
    width: '100%',
    background: "#3c220f",  // Slightly lighter background
    borderRadius: '45px',
    padding: '20px',
    margin: '30px',  // Space between projects
  },
  textContainer: {
    marginBottom: '20px',  // Add space between text and media
  },
  title: {
    fontSize: '3rem',
    color: '#9c6f44',
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
    marginTop: '20px',
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
