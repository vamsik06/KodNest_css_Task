import React from 'react';
import { Link } from 'react-router-dom';

const LearnCSSContent = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // Change to column to center content vertically and horizontally
        minHeight: '100vh',
        backgroundColor: '#f5f5f5', // Background color for the full viewport
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          width: '80%',
          maxWidth: '800px',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for modern look
          fontFamily: "'Poppins', sans-serif",
          color: '#333',
        }}
      >
        <h1
          style={{
            color: '#333',
            fontSize: '32px',
            marginBottom: '20px',
          }}
        >
          Learn CSS: Styling Your Webpage
        </h1>

        <h3 style={{ color: '#FFFFF', marginBottom: '10px' }}>The Solution to Plain Webpages:🌟</h3>
        <p>
          CSS is like the spice and flavor to your plain rice. While HTML structures your content, CSS styles it to make it look attractive, just like adding seasoning and garnishing to a dish.
        </p>

        <h3 style={{ color: '#FFFFF', marginBottom: '10px' }}>Why Use CSS?</h3>
        <ul>
          <li><strong>Beautification:</strong> CSS allows you to add colors, fonts, layouts, and animations.</li>
          <li><strong>Consistency:</strong> You can style multiple pages the same way using a single CSS file.</li>
          <li><strong>Responsiveness:</strong> CSS makes web pages look good on all screen sizes (mobile, tablet, desktop).</li>
        </ul>

        <h3 style={{ color: '#FFFFF', marginBottom: '10px' }}>Example Transformation</h3>
        <p><strong>Before CSS:</strong> Your portfolio looks like a boring Word document—text and images stacked on top of each other.</p>
        <p><strong>After CSS:</strong> With CSS, you can:</p>
        <ul>
          <li>Add a background color or image to make it pop.</li>
          <li>Use stylish fonts to make text look professional.</li>
          <li>Create layouts that display your skills and projects in grids or cards.</li>
        </ul>

        {/* New Section: CSS Animation Example */}
        <div
          style={{
            backgroundColor: '#fff',
            width: '80%',
            maxWidth: '800px',
            padding: '20px',
            marginTop: '40px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            fontFamily: "'Poppins', sans-serif",
            color: '#333',
            textAlign: 'center',
          }}
        >
          <h3 style={{ color: '#4CAF50' }}>Let's See CSS in Action!</h3>
          <p>
            Below is an example of what we can do with CSS. Watch it bounce like a ball!
          </p>

          {/* Animated Bouncing Ball */}
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: '#4CAF50',
              margin: '20px auto',
              borderRadius: '50%', // Circle shape
              animation: 'bounce 2s ease-in-out infinite', // Apply animation
            }}
          ></div>

          {/* Adding the @keyframes directly in the component */}
          <style>
            {`
              @keyframes bounce {
                0% {
                  transform: translateY(0);
                }
                25% {
                  transform: translateY(-30px); /* Move up */
                }
                50% {
                  transform: translateY(0); /* Return to original position */
                }
                75% {
                  transform: translateY(-15px); /* Bounce a little less */
                }
                100% {
                  transform: translateY(0); /* Return to original position */
                }
              }
            `}
          </style>
        </div>

        {/* Next Button */}
        <Link to="/learn-css-content">
          <button
            style={{
              marginTop: '20px',
              padding: '12px 20px',
              backgroundColor: '#1E88E5',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              float:"right",
            }}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LearnCSSContent;
