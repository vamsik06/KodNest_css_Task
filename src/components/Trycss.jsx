import React, { useState } from "react";

const BasicCSS = () => {
  const [buttonText, setButtonText] = useState("Click Me!");

  const handleClick = () => {
    setButtonText("You clicked the button!");
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "15px",
        }}
      >
        <h1 style={{ fontSize: "24px", color: "#333" }}>Just Try This Basic CSS</h1>
        <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
          Let’s make your webpage look better with some simple CSS! It’s really easy—just follow these steps.
        </p>

        <h2 style={{ fontSize: "18px", marginBottom: "10px", color: "#FFFFF" }}>
          1. Change the color of your text:
        </h2>
        <pre
          style={{
            backgroundColor: "#f1f8e9",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "'Courier New', monospace",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          h1 &#123;
            <br />
            color: blue;
            <br />
          &#125;
        </pre>
        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
          This will change all your headings (<code>&lt;h1&gt;</code>) to a nice blue color.
        </p>

        <h2 style={{ fontSize: "18px", marginBottom: "10px", color: "#FFFFF" }}>
          2. Add some space around your text:
        </h2>
        <pre
          style={{
            backgroundColor: "#f1f8e9",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "'Courier New', monospace",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          p &#123;
            <br />
            margin: 20px;
            <br />
          &#125;
        </pre>
        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
          This adds 20px of space around all your paragraphs (<code>&lt;p&gt;</code>), so the text doesn’t touch the edges of the page.
        </p>

        <h2 style={{ fontSize: "18px", marginBottom: "10px", color: "#FFFFF" }}>
          3. Make your buttons look cooler:
        </h2>
        <pre
          style={{
            backgroundColor: "#f1f8e9",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "'Courier New', monospace",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          button &#123;
            <br />
            background-color: #4CAF50;
            <br />
            color: white;
            <br />
            padding: 10px 20px;
            <br />
            border: none;
            <br />
            border-radius: 5px;
            <br />
          &#125;
        </pre>
        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
          This will make your buttons have a green background, white text, and rounded corners, making them look more inviting.
        </p>

        <h2 style={{ fontSize: "18px", marginBottom: "10px", color: "#FFFFF" }}>
          Just Try the Below Process to Get an Understanding of CSS:
        </h2>
        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
          1. Link your CSS file to your HTML:
        </p>
        <pre
          style={{
            backgroundColor: "#f1f8e9",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "'Courier New', monospace",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          &#60;head&#62;
          <br />
          &#60;link rel="stylesheet" href="styles.css"&#62;
          <br />
          &#60;/head&#62;
        </pre>
        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
          What’s Happening Here:
        </p>
        <ul style={{ fontSize: "14px", color: "#555" }}>
          <li>
            The <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code> tells the browser to load and apply the styles from <code>styles.css</code> to your webpage.
          </li>
          <li>
            The <code>&lt;head&gt;</code> section is where you define metadata, links to external files like CSS, and other settings for the web page.
          </li>
        </ul>

        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
          2. In your <code>styles.css</code>, add these simple styles:
        </p>

        <pre
          style={{
            backgroundColor: "#f1f8e9",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "'Courier New', monospace",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          body &#123;
            <br />
            background-color: #f5f5f5;
            <br />
            font-family: 'Arial', sans-serif;
            <br />
            margin: 0;
            <br />
            padding: 0;
            <br />
          &#125;
          <br />
          h1 &#123;
            <br />
            color: #2c3e50;
            <br />
            text-align: center;
            <br />
            margin-top: 50px;
            <br />
          &#125;
        </pre>

        <h2 style={{ fontSize: "18px", marginBottom: "10px", color: "#FFFFF" }}>
          Let’s Understand What’s Happening in the CSS:
        </h2>
        <h3 style={{ fontSize: "16px", marginBottom: "10px", color: "#333" }}>Body Style:</h3>
        <ul style={{ fontSize: "14px", color: "#555" }}>
          <li>
            <strong>Background Color:</strong> The background of the webpage is set to a light gray (#f5f5f5).
          </li>
          <li>
            <strong>Font:</strong> The font used is Arial, or any other sans-serif font if Arial is unavailable.
          </li>
          <li>
            <strong>Margins and Padding:</strong> The default margin and padding are removed from the body for a clean, edge-to-edge layout.
          </li>
        </ul>

        <h3 style={{ fontSize: "16px", marginBottom: "10px", color: "#333" }}>Heading (h1) Style:</h3>
        <ul style={{ fontSize: "14px", color: "#555" }}>
          <li>
            <strong>Color:</strong> The heading text color is set to a dark blue-gray (#2c3e50).
          </li>
          <li>
            <strong>Centering:</strong> The heading is centered on the page.
          </li>
          <li>
            <strong>Top Margin:</strong> A margin of 50px is added to push the heading down from the top of the page.
          </li>
        </ul>

        {/* Conclusion and Resources */}
        <h2 style={{ fontSize: "18px", marginTop: "30px", color: "#FFFFF" }}>
          Conclusion:
        </h2>
        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
          CSS is essential for transforming a basic webpage into an attractive, user-friendly design. By linking a CSS file to your HTML, you can easily style text, buttons, and layouts, making your website more visually appealing and responsive. With just a few simple styles, you can enhance the user experience and create a professional-looking webpage.
        </p>

        <h2 style={{ fontSize: "18px", marginBottom: "10px", color: "#FFFFF" }}>
          Resources to Learn CSS:
        </h2>
        <ul style={{ fontSize: "14px", color: "#555", lineHeight: "1.8" }}>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              MDN Web Docs:</a> A comprehensive guide covering everything from the basics to advanced CSS techniques.
            
          </li>
          <li>
            <a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer">
              CSS-Tricks: </a>A site packed with articles, tips, and tricks on CSS to help you master layout and styling techniques.
            
          </li>
          <li>
            <a href="https://www.freecodecamp.org/learn/responsive-web-design/#basic-css" target="_blank" rel="noopener noreferrer">
           
              freeCodeCamp:</a> CSS Guide: A great starting point for beginners, offering detailed explanations and practical examples.
          </li>
        </ul>

        <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#555", marginTop: "20px" }}>
          <strong>"CSS is like a painter's brush—use it to bring your webpage to life."</strong>
        </p>
      </div>
    </div>
  );
};

export default BasicCSS;
