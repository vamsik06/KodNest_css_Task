import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link for navigation

const Home = () => {
  const [styled, setStyled] = useState(false);

  const handleStyle = () => {
    setStyled(!styled); // Toggle between styled and unstyled states
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5", // Background color for the full viewport
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "80%",
          maxWidth: "800px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow
          fontFamily: "'Poppins', sans-serif",
          color: "#333",
        }}
      >
        <h1
          style={{
            color: "#FFFFF",
            fontSize: "32px",
            display: "flex",
            marginBottom: "20px",
          }}
        >
          Introduction to CSS
        </h1>

        {/* The Problem: How Do We Make Web Pages Attractive? */}
        <h2 style={{ color: "#FFFFF", display: "flex" }}>
          The Problem: How Do We Make Web Pages Attractive?
        </h2>
        <p>
          Imagine you've just made a personal portfolio website using HTML. It works fine, but let's be honest—it looks very basic.
          It's like ordering food from Swiggy and getting only plain rice with no extra flavors. Sure, it fills your stomach, but it’s
          not exciting. People can see your skills and projects, but nothing really grabs their attention. It looks more like a plain text
          document than the cool, modern pages you see on an app like Swiggy. This is a common challenge for beginners in web development:
          how to make your content look good and catch people's eyes.
        </p>

        <h3 style={{ color: "#FFFFF", display:"flex" }}>Let's See How CSS Works 🌟</h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
          Below is a simple form. Your task is to style it using CSS to make it more visually appealing.
        </p>

        {/* Form Section */}
        <div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Align the content to the start
              margin: "20px 0",
              padding: "20px",
              border: styled ? "2px solid #1E88E5" : "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: styled ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none",
              backgroundColor: styled ? "#e3f2fd" : "transparent",
              transition: "all 0.3s ease-in-out",
              width: "550px", // You can adjust the form width as needed
            }}
          >
            {/* Name Input */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <label
                htmlFor="name"
                style={{
                  color: styled ? "#1E88E5" : "#000",
                  fontSize: styled ? "18px" : "16px",
                  marginRight: "10px", // Add some space between label and input
                  width: "150px", // Control the label width for alignment
                }}
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                style={{
                  background: "lightblue",
                  padding: "12px 16px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: styled ? "2px solid #1E88E5" : "1px solid #ccc",
                  transition: "border 0.3s ease-in-out, background-color 0.3s ease-in-out",
                  backgroundColor: styled ? "#f1f8e9" : "#fff",
                  outline: "none",
                  width: "300px", // Set width for the input
                }}
                onFocus={(e) => {
                  e.target.style.backgroundColor = "#e3f2fd";
                  e.target.style.color = "#1E88E5"; // Change text color on focus
                }}
                onBlur={(e) => {
                  e.target.style.backgroundColor = styled ? "#f1f8e9" : "#fff";
                  e.target.style.color = "#000"; // Reset text color
                }}
              />
            </div>

            {/* Email Input */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <label
                htmlFor="email"
                style={{
                  color: styled ? "#1E88E5" : "#000",
                  fontSize: styled ? "18px" : "16px",
                  marginRight: "10px", // Add some space between label and input
                  width: "150px", // Control the label width for alignment
                }}
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                style={{
                  padding: "12px 16px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: styled ? "2px solid #1E88E5" : "1px solid #ccc",
                  backgroundColor: styled ? "#f1f8e9" : "#fff",
                  transition: "border 0.3s ease-in-out, background-color 0.3s ease-in-out",
                  outline: "none",
                  width: "300px", // Set width for the input
                }}
                onFocus={(e) => {
                  e.target.style.backgroundColor = "#e3f2fd";
                  e.target.style.color = "#1E88E5"; // Change text color on focus
                }}
                onBlur={(e) => {
                  e.target.style.backgroundColor = styled ? "#f1f8e9" : "#fff";
                  e.target.style.color = "#000"; // Reset text color
                }}
              />
            </div>

            {/* Message Input */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <label
                htmlFor="message"
                style={{
                  color: styled ? "#1E88E5" : "#000",
                  fontSize: styled ? "18px" : "16px",
                  marginRight: "10px", // Add some space between label and textarea
                  width: "150px", // Control the label width for alignment
                }}
              >
                Message:
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                style={{
                  padding: "12px 16px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: styled ? "2px solid #1E88E5" : "1px solid #ccc",
                  width: "300px", // Set width for the textarea
                  height: "150px",
                  backgroundColor: styled ? "#f1f8e9" : "#fff",
                  transition: "border 0.3s ease-in-out, background-color 0.3s ease-in-out",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.target.style.backgroundColor = "#e3f2fd";
                  e.target.style.color = "#1E88E5"; // Change text color on focus
                }}
                onBlur={(e) => {
                  e.target.style.backgroundColor = styled ? "#f1f8e9" : "#fff";
                  e.target.style.color = "#000"; // Reset text color
                }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                padding: "12px 20px",
                backgroundColor: styled ? "#1E88E5" : "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1565C0")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = styled ? "#1E88E5" : "#4CAF50")}
            >
              Submit
            </button>
          </form>

          <button
            onClick={handleStyle}
            style={{
              padding: "12px 20px",
              backgroundColor: styled ? "#1E88E5" : "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "20px",
             position:"absolute",
              marginLeft: "auto",
              marginRight: "auto",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            Style Me!
          </button>
        </div>

        <Link to="/learn-css" style={{textDecoration : "none"}}>
          <button
            style={{
              padding: "12px 20px",
              backgroundColor: "#1E88E5",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "50px",
              display: "block",
              marginLeft: "auto",
              marginRight: "0",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            Learn CSS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
