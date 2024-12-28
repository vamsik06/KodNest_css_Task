import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LearnCSS = () => {
  const [styled, setStyled] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleStyleToggle = () => {
    setStyled(!styled);
  };

  const handleNextClick = () => {
    navigate("/BasicCSS"); // Navigate to the TryCSS page
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: styled ? "#f1f8e9" : "#f5f5f5",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "15px",
          position: "relative", // Make the div relative for absolute positioning inside it
        }}
      >
        <h1 style={{ fontSize: "24px", color: "#333" }}>
          If You Don’t Know the CSS, No Worries! Let’s Learn
        </h1>
        <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
          <strong>Definition:</strong> CSS (Cascading Style Sheets) is a language used to style and design web pages, controlling how HTML elements look, such as their color, layout, and fonts.
        </p>
        <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
          Imagine your webpage is like a house. HTML is the structure—the walls, windows, and doors. CSS is the paint, furniture, and decorations that make the house look beautiful and functional.
        </p>

        {/* Portfolio Without CSS */}
        <h3 style={{ fontSize: "18px", color: "#333", marginTop: "20px" }}>
          Portfolio Without CSS
        </h3>
        <ul style={{ fontSize: "14px", color: "#555" }}>
          <li>A plain white background.</li>
          <li>Text and images stacked on top of each other in a basic layout.</li>
          <li>A heading with no styling, and a list of projects with no spacing or structure.</li>
          <li>It’s functional, but it looks boring and uninviting—like a simple document with no design or personality.</li>
        </ul>

        <h3 style={{ fontSize: "18px", color: "#333", marginTop: "20px" }}>
          Portfolio With CSS
        </h3>
        <ul style={{ fontSize: "14px", color: "#555" }}>
          <li><strong>Background:</strong> A soft gradient or light color.</li>
          <li><strong>Text and Headings:</strong> Modern font and centered.</li>
          <li><strong>Project Boxes:</strong> Neatly styled cards with rounded corners.</li>
          <li><strong>Buttons:</strong> Colorful with hover effects and animations.</li>
          <li><strong>Layout:</strong> Clean, structured layout with spacing between elements.</li>
        </ul>

        {/* Portfolio HTML Structure */}
        <header
          style={{
            textAlign: "center",
            backgroundColor: styled ? "#2196F3" : "transparent",
            padding: "8px",
            borderRadius: "5px",
          }}
        >
          <div className="container">
            <h1 style={{ color: styled ? "#fff" : "#000" }}>Your Name</h1>
            <p style={{ color: styled ? "#fff" : "#000" }}>Web Developer | Programmer | Designer</p>
          </div>
        </header>

        <section
          id="about"
          style={{
            margin: "15px 0",
            padding: "8px",
            backgroundColor: styled ? "#e3f2fd" : "transparent",
            borderRadius: "5px",
          }}
        >
          <div className="container">
            <h2 style={{ fontSize: "20px", color: styled ? "#1E88E5" : "#333" }}>About Me</h2>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Hi, I'm Your Name. I'm a passionate web developer with experience in HTML, CSS, and JavaScript. I love creating websites that are functional and visually appealing.
            </p>
          </div>
        </section>

        <section
          id="projects"
          style={{
            margin: "15px 0",
            padding: "8px",
            backgroundColor: styled ? "#e3f2fd" : "transparent",
            borderRadius: "5px",
          }}
        >
          <div className="container">
            <h2
              style={{
                fontSize: "20px",
                color: styled ? "#1E88E5" : "#333",
                marginBottom: "15px",
              }}
            >
              My Projects
            </h2>
            <div className="project">
              <h3
                style={{
                  color: styled ? "#1E88E5" : "#333",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                Project 1
              </h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                A brief description of your project. What technologies were used, what challenges you faced, and what you learned.
              </p>
            </div>
            <div className="project">
              <h3
                style={{
                  color: styled ? "#1E88E5" : "#333",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                Project 2
              </h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                A brief description of your second project with similar details.
              </p>
            </div>
            <div className="project">
              <h3
                style={{
                  color: styled ? "#1E88E5" : "#333",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                Project 3
              </h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                A brief description of your third project. Feel free to add more projects as you like.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          style={{
            margin: "15px 0",
            padding: "8px",
            backgroundColor: styled ? "#e3f2fd" : "transparent",
            borderRadius: "5px",
          }}
        >
          <div className="container">
            <h2
              style={{
                fontSize: "20px",
                color: styled ? "#1E88E5" : "#333",
                marginBottom: "15px",
              }}
            >
              Contact Me
            </h2>
            <p style={{ fontSize: "14px", color: "#555" }}>
              If you want to work with me or just want to say hello, feel free to reach out!
            </p>
            <ul style={{ fontSize: "14px", color: "#555" }}>
              <li>Email: your.email@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/yourname"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: styled ? "#1E88E5" : "#000" }}
                >
                  yourname
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: styled ? "#1E88E5" : "#000" }}
                >
                  yourusername
                </a>
              </li>
            </ul>
          </div>
        </section>

        <footer
          style={{
            marginTop: "20px",
            textAlign: "center",
            padding: "8px",
            backgroundColor: styled ? "#2196F3" : "transparent",
            borderRadius: "5px",
          }}
        >
          <div className="container">
            <p style={{ color: styled ? "#fff" : "#000" }}>
              &copy; 2024 Your Name. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Button to toggle styles */}
        <button
          onClick={handleStyleToggle}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            backgroundColor: styled ? "#1E88E5" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            transition: "background-color 0.3s",
          }}
        >
          <strong>Style it</strong>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNextClick} // Add the onClick handler to navigate
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            padding: "12px 20px",
            backgroundColor: "#1E88E5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          <strong>Next</strong>
        </button>
      </div>
    </div>
  );
};

export default LearnCSS;
