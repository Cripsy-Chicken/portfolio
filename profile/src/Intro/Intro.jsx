import React from 'react';

const Intro = ({ name, greeting, imageSrc, altText, text }) => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={imageSrc} alt={altText} style={styles.image} />
      </div>
      <div style={styles.textContainer}>
        {/* Greeting in beige, left-aligned */}
        <p style={styles.greeting}> {greeting} </p>
        {/* Name in brown and uppercase, left-aligned */}
        <p style={styles.name}>
          <span style={styles.inlineText}>I'm </span>
          {name.toUpperCase()}
        </p>
        {/* The rest of the text */}
        <p style={styles.inlineText}>{text}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    background: "#271300",
    borderRadius: '45px',
    padding: '0px',
    marginTop: '40px'
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px', // Optional: add border radius to image for better aesthetics
  },
  textContainer: {
    flex: 2,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',  // Stack text vertically
    alignItems: 'flex-start',  // Align all text to the left
    justifyContent: 'center',  // Center text vertically within the container
    // fontFamily: "'Helvetica Neue', Arial, sans-serif",
    // fontSize: '1.5rem',  // Adjust font size for better readability
    // fontWeight: 400,  // Regular font weight for text
    // lineHeight: 1.5,  // Adjust line height for clarity
    marginBottom: '40px',
    textAlign: 'left',  // Explicitly set text alignment to left
    lineHeight: 1.2
  },
  name: {
    color: '#9c6f44',  // Brown color for the name
    fontSize: '4.5rem',  // Larger font size for the name
    fontWeight: 700,  // Bold font weight for the name
    margin: '0px',  // Add some space below the name
    lineHeight: 1,
  },
  greeting: {
    color: '#f5f5dc',  // Beige color for "Hi there"
    fontSize: '3rem',  // Adjust font size for the greeting
    fontWeight: 400,  // Regular font weight
    margin: '0px',  // Add some space below the greeting
    display: 'inline',  // Ensures the greeting stays on the same line
    lineHeight: 2.5
  },
  inlineText: {
    color: '#f5f5dc',  // Beige color for "I'm"
    fontSize: '1.5rem',  // Same font size as greeting for consistency
    fontWeight: 400,  // Regular font weight
    margin: '0px',
    lineHeight: 2
  },
};

export default Intro;
